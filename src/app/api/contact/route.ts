import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";


const allowedOrigins = [
  "http://localhost:3000",
  "https://aliwebapp2.vercel.app/"
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
  });

  await transporter.sendMail({
    from: `"Global Procurement Solutions" <${process.env.GMAIL_USER}>`,
    to: "chantaramalee6@gmail.com",
    replyTo: data.email,
    subject: data.subject,
    html: `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  });
}

export async function POST(req: NextRequest) {
  const origin = getAllowedOrigin(req);
  
  try {
    const data = await req.json();
    await sendMail(data);

    const res = new NextResponse(JSON.stringify({ success: true, message: "Email sent!" }), {
      status: 200,
    });
    // Set CORS headers
    res.headers.set("Access-Control-Allow-Origin", origin || "*");
    res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return res;
  } catch (err: any) {
    const res = new NextResponse(JSON.stringify({ success: false, message: err.message }), {
      status: 500,
    });
    res.headers.set("Access-Control-Allow-Origin", origin || "*");
    res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return res;
  }
}


export async function OPTIONS(req: NextRequest) {
  const origin = getAllowedOrigin(req);

  const res = new NextResponse(null, { status: 204 });
  res.headers.set("Access-Control-Allow-Origin", origin || "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}
