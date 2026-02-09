import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // මෙතැනදී අනාගතයේදී ඔබට OpenAI හෝ Google Gemini API එක සම්බන්ධ කළ හැක.
    // දැනට අපි සරල බුද්ධිමත් පිළිතුරක් සකසමු.
    const responseMessage = `DevPulse AI: Thank you for searching about '${message}'! If you are new to learning, I recommend starting with the '${message}' roadmap on our Explore page.`;

    return NextResponse.json({ reply: responseMessage });
  } catch (error) {
    return NextResponse.json({ error: "API Error" }, { status: 500 });
  }
}