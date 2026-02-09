"use server";

import { auth } from "@clerk/nextjs/server";
import Bookmark  from "../models/Bookmark"; 
import Resource from "../models/Resource";
import { revalidatePath } from "next/cache";
import { connectMonthgoDB } from "../mongodb";

export async function toggleBookmark(resourceId: string) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    await connectMonthgoDB();

    // දැනටමත් save කර ඇත්දැයි බලන්න
    const existing = await Bookmark.findOne({ userId, resourceId });

    if (existing) {
      await Bookmark.findByIdAndDelete(existing._id);
      revalidatePath("/bookmarks");
      return { saved: false };
    } else {
      await Bookmark.create({ userId, resourceId });
      revalidatePath("/bookmarks");
      return { saved: true };
    }
  } catch (error) {
    console.error(error);
    return { error: "Failed to update bookmark" };
  }
}


export async function createResource(formData: {
  title: string;
  url: string;
  description: string;
  category: string;
}) {
  try {
    // Next.js 15 හි auth() await කළ යුතුයි
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    await connectMonthgoDB();

    const newResource = await Resource.create({
      ...formData,
      userId,
    });

    // අදාළ පිටුව Refresh කිරීම සඳහා path එක revalidate කිරීම
    revalidatePath(`/explore/${formData.category}`);
    revalidatePath("/explore");

    return { success: true, id: newResource._id.toString() };
  } catch (error) {
    console.error("Action Error (createResource):", error);
    return { success: false, error: "Failed to create resource" };
  }
}

/**
 * Category එක අනුව සියලුම Resources ගෙන ඒම
 */
export async function getResourcesByCategory(category: string) {
  try {
    await connectMonthgoDB();

    // Regex භාවිතා කර Case-insensitive ලෙස සෙවීම
    const resources = await Resource.find({
      category: { $regex: new RegExp(`^${category}$`, "i") },
    }).sort({ createdAt: -1 }); // අලුත්ම ඒවා මුලට

    return JSON.parse(JSON.stringify(resources));
  } catch (error) {
    console.error("Action Error (getResourcesByCategory):", error);
    return [];
  }
}

/**
 * සියලුම Resources එකවර ගෙන ඒම (General Search සඳහා)
 */
export async function getAllResources() {
  try {
    await connectMonthgoDB();
    const resources = await Resource.find().sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(resources));
  } catch (error) {
    console.error("Action Error (getAllResources):", error);
    return [];
  }
}

/**
 * එක් එක් Category එකට අදාළ Resources ප්‍රමාණය (Count) ලබා ගැනීම
 */
export async function getResourceCountByCategory(category: string) {
  try {
    await connectMonthgoDB();
    
    const count = await Resource.countDocuments({
      category: { $regex: new RegExp(`^${category}$`, "i") },
    });

    return count;
  } catch (error) {
    console.error("Action Error (getResourceCountByCategory):", error);
    return 0;
  }
}