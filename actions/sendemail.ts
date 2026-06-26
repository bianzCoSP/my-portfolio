"use server";

import { transporter } from "@/lib/transporter";

export type EmailFormState = {
	emailSentSuccessfully: boolean;
	message: string;
} | null;

export async function sendEmailAction(
	_prevState: EmailFormState,
	formData: FormData,
): Promise<EmailFormState> {
	const name = formData.get("name")?.toString().trim();
	const subject = formData.get("subject")?.toString().trim();
	const email = formData.get("email")?.toString().trim();
	const message = formData.get("message")?.toString().trim();

	if (!name || !email || !message) {
		return { emailSentSuccessfully: false, message: "Please fill all fields" };
	}

	try {
		await transporter.sendMail({
			from: `"${name}" <${process.env.EMAIL_FROM}>`,
			to: process.env.EMAIL_TO,
			subject: `${subject} - ${name} (${email})`,
			text: message,
			html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
		});
		return { emailSentSuccessfully: true, message: "Email sent successfully!" };
	} catch (err) {
		console.error("Mail error:", err);
		return { emailSentSuccessfully: false, message: "Email failed to send" };
	}
}
