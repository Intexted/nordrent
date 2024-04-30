import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req) {
  const _req = await req.json();
  const { email, name, message } = _req;

  // transporter
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    let mailOptions = {
      from: process.env.EMAIL,
      to: "nord.promo.car.40@gmail.com",
      subject: "Nord Promo Car Contact",
      html: `
      <center><h2>${email}</h2></center>
      <center><h2>${name} contacted you </h2></center>
      <hr/>
      <strong><p>${message}</p><strong>
      `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: "Message Sent Successfully!",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
