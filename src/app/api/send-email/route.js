import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { email, name, message } = data;

    const response = await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.RESEND_TO,
      subject: 'Yeni mesaj (İletişim formu)',
      html: `
        <p>${message}</p>
        <p>---</p>
        <p>İsim: ${name}</p>
        <p>Email: ${email}</p>
      `,
    });

    console.log('Resend response:', response);
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error);
    return Response.json({ ok: false, message: "Sunucu hatası" }, { status: 500 });
  }
}
