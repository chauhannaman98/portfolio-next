// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const adminEmail = process.env.ADMIN_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = await req.json();

    try {
        const data = await resend.emails.send({
        from: fromEmail,
        to: [adminEmail, email],
        subject: subject,
        react: (
            <>
                <h3>Thank you for contacting!</h3>
                <p>Your below message has been submitted.</p>
                <br></br>
                <p><i>{message}</i></p> 
                <hr></hr>
                <br></br>
                <p>I'll get back to you ASAP.</p>
            </>
            ),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
