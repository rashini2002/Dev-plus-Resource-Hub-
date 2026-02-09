import { connectMonthgoDB } from "@/lib/mongodb";
import Resource from "@/lib/models/Resource";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, desc, link, tag, category } = await req.json();
    await connectMonthgoDB();
    await Resource.create({ name, desc, link, tag, category });
    
    return NextResponse.json({ message: "Resource Registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error occurred" }, { status: 500 });
  }
}