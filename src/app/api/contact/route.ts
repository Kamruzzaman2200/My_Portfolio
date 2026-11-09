import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Sender name is required." },
        { status: 400 }
      );
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }
    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "A message body is required." },
        { status: 400 }
      );
    }

    const recipientEmail = "sohel.eightb@gmail.com";
    const subjectTopic = topic && typeof topic === "string" && topic.trim() ? topic.trim() : "Portfolio Inquiry";
    const fullSubject = `[Portfolio Dispatch] ${subjectTopic} — from ${name.trim()}`;

    const gmailUser = process.env.GMAIL_USER || recipientEmail;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailAppPassword) {
      console.warn("GMAIL_APP_PASSWORD is not set in .env.local");
      return NextResponse.json(
        {
          success: false,
          error: "Gmail delivery requires GMAIL_APP_PASSWORD in .env.local to authenticate with Google.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword.replace(/\s+/g, ""), // Strip any spaces from Google App Password
      },
    });

    const mailOptions = {
      from: `"Portfolio Dispatch" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: `"${name.trim()}" <${email.trim()}>`,
      subject: fullSubject,
      text: `New Portfolio Message\n\nName: ${name}\nEmail: ${email}\nTopic: ${subjectTopic}\n\nMessage:\n${message}\n\nSent at: ${new Date().toISOString()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #1A1C1E; color: #C2B280; padding: 32px 20px; border-radius: 14px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(194, 178, 128, 0.15);">
          <div style="border-bottom: 1px solid rgba(194, 178, 128, 0.12); padding-bottom: 16px; margin-bottom: 24px;">
            <span style="color: #0E76F1; font-size: 11px; font-family: monospace; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600;">Direct Dispatch · Portfolio Transmission</span>
            <h2 style="color: #ffffff; font-size: 22px; margin: 8px 0 0 0; font-weight: 400;">New Message Received</h2>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #7A7568; width: 90px; font-family: monospace; font-size: 12px; text-transform: uppercase;">From</td>
              <td style="padding: 10px 0; color: #ffffff; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A7568; font-family: monospace; font-size: 12px; text-transform: uppercase;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #0E76F1; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A7568; font-family: monospace; font-size: 12px; text-transform: uppercase;">Topic</td>
              <td style="padding: 10px 0; color: #C2B280;">${subjectTopic}</td>
            </tr>
          </table>

          <div style="background-color: #2B2D2F; border-left: 3px solid #0E76F1; padding: 18px; border-radius: 8px; margin-bottom: 24px;">
            <div style="color: #7A7568; font-size: 11px; font-family: monospace; text-transform: uppercase; margin-bottom: 8px;">Message Content</div>
            <div style="color: #C2B280; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${message}</div>
          </div>

          <div style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(194, 178, 128, 0.12);">
            <a href="mailto:${email}?subject=${encodeURIComponent(`Re: ${fullSubject}`)}" style="display: inline-block; background-color: #0E76F1; color: #ffffff; padding: 12px 26px; border-radius: 8px; text-decoration: none; font-size: 13px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; box-shadow: 0 4px 14px rgba(14, 118, 241, 0.3);">
              Reply Directly to ${name}
            </a>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Dispatch transmitted directly to sohel.eightb@gmail.com",
    });
  } catch (error: unknown) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to process message dispatch.",
      },
      { status: 500 }
    );
  }
}
