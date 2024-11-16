import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require("nodemailer");
// Typy pro data z formuláře
interface FormData {
    name: string | null;
    email: string | null;
    message: string | null;
}

// Typ pro environmentální proměnné
interface EnvVariables {
    NEXT_PUBLIC_BURNER_USERNAME: string;
    NEXT_PUBLIC_BURNER_PASSWORD: string;
    NEXT_PUBLIC_PERSONAL_EMAIL: string;
}

export async function POST(request: NextRequest) {
    const env = process.env as unknown as EnvVariables;

    const { NEXT_PUBLIC_BURNER_USERNAME, NEXT_PUBLIC_BURNER_PASSWORD, NEXT_PUBLIC_PERSONAL_EMAIL } = env;

    if (!NEXT_PUBLIC_BURNER_USERNAME || !NEXT_PUBLIC_BURNER_PASSWORD || !NEXT_PUBLIC_PERSONAL_EMAIL) {
        return NextResponse.json(
            { message: "Missing environment variables" },
            { status: 500 }
        );
    }
    console.log("Dealing with request...");

    // Získání dat z formuláře
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
        return NextResponse.json(
            { message: "Error: Missing required fields" },
            { status: 400 }
        );
    }

    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: NEXT_PUBLIC_BURNER_USERNAME,
            pass: NEXT_PUBLIC_BURNER_PASSWORD,
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: NEXT_PUBLIC_BURNER_USERNAME,
            to: NEXT_PUBLIC_PERSONAL_EMAIL,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return NextResponse.json({ message: "Success: Email was sent" });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Error: Could not send message" }, { status: 500 });
    }
}
