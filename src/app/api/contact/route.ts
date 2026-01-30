import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message || !body.privacyAgreed) {
      return NextResponse.json(
        { success: false, message: "必須項目を入力してください。" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: "有効なメールアドレスを入力してください。" },
        { status: 400 }
      );
    }

    // Log submission (replace with email service later)
    console.log("=== Contact Form Submission ===");
    console.log("Name:", body.name);
    console.log("Email:", body.email);
    console.log("Category:", body.category);
    console.log("Message:", body.message);
    console.log("================================");

    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました。",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "送信中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
