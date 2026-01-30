import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { success: false, message: "メール送信設定が未構成です。" },
        { status: 500 }
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const toAddress = process.env.CONTACT_TO || "info@hia.jp";
    const fromAddress = process.env.CONTACT_FROM || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `お問い合わせ: ${body.category}`;
    const textBody = [
      "HUMAN INFINITY ACADEMY お問い合わせフォーム",
      "",
      `お名前: ${body.name}`,
      `メールアドレス: ${body.email}`,
      `種別: ${body.category}`,
      "",
      "メッセージ:",
      body.message,
    ].join("\n");

    await transporter.sendMail({
      to: toAddress,
      from: fromAddress,
      replyTo: body.email,
      subject,
      text: textBody,
    });

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
