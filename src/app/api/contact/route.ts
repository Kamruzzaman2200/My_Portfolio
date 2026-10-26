import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Sender name is required." },
        { status: 400 }
      );
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }
    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "A message body is required." },
        { status: 400 }
      );
    }

    const recipientEmail = "sohel.eightb@gmail.com";
    const subjectTopic = topic && typeof topic === "string" && topic.trim() ? topic.trim() : "Portfolio Inquiry";
    const fullSubject = `[Portfolio Dispatch] ${subjectTopic} — from ${name.trim()}`;

    const gmailUser = process.env.GMAIL_USER || recipientEmail;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    // If Gmail App Password is configured, send directly via official Gmail SMTP
    if (gmailAppPassword) {
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
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #05070a; color: #dfe7e0; padding: 32px 20px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #1a221d;">
            <div style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; margin-bottom: 24px;">
              <span style="color: #e0231c; font-size: 11px; font-family: monospace; letter-spacing: 0.2em; text-transform: uppercase;">Direct Dispatch · Portfolio Transmission</span>
              <h2 style="color: #ffffff; font-size: 22px; margin: 8px 0 0 0; font-weight: 400;">New Message Received</h2>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; color: #78837c; width: 90px; font-family: monospace; font-size: 12px; text-transform: uppercase;">From</td>
                <td style="padding: 10px 0; color: #ffffff; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #78837c; font-family: monospace; font-size: 12px; text-transform: uppercase;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #e0231c; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #78837c; font-family: monospace; font-size: 12px; text-transform: uppercase;">Topic</td>
                <td style="padding: 10px 0; color: #dfe7e0;">${subjectTopic}</td>
              </tr>
            </table>

            <div style="background-color: #0d1217; border-left: 3px solid #e0231c; padding: 18px; border-radius: 6px; margin-bottom: 24px;">
              <div style="color: #78837c; font-size: 11px; font-family: monospace; text-transform: uppercase; margin-bottom: 8px;">Message Content</div>
              <div style="color: #dfe7e0; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${message}</div>
            </div>

            <div style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08);">
              <a href="mailto:${email}?subject=${encodeURIComponent(`Re: ${fullSubject}`)}" style="display: inline-block; background-color: #e0231c; color: #ffffff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-size: 13px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">
                Reply Directly to ${name}
              </a>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({
        success: true,
        deliveryMethod: "gmail_smtp",
        message: "Dispatch transmitted directly to sohel.eightb@gmail.com",
      });
    }

    // Fallback: If GMAIL_APP_PASSWORD is not yet set in .env.local,
    // we return a response indicating setup instructions and direct compose URLs
    const encodedTopic = encodeURIComponent(subjectTopic);
    const encodedBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${subjectTopic}\n\nMessage:\n${message}`
    );
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(fullSubject)}&body=${encodedBody}`;
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(fullSubject)}&body=${encodedBody}`;

    return NextResponse.json({
      success: false,
      needsSetup: true,
      recipient: recipientEmail,
      message: "Gmail App Password not configured in .env.local yet.",
      gmailComposeUrl,
      mailtoUrl,
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
