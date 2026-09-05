import { Resend } from "resend";

const RESEND_API_KEY =
  process.env.RESEND_API_KEY || "re_YOUR_API_KEY_HERE";

const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "chauhannaman98@gmail.com";

const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

const isPlaceholder = (key) => !key || key.includes("YOUR_API_KEY");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

function buildEmailHtml({ name, email, subject, message }) {
  return `
  <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#09090b;padding:32px;">
    <div style="max-width:560px;margin:0 auto;background:#111113;border:1px solid #27272a;border-radius:14px;overflow:hidden;">
      <div style="background:linear-gradient(100deg,#10b981,#14b8a6);padding:20px 28px;">
        <h1 style="margin:0;font-size:18px;color:#052e21;">New message from your portfolio</h1>
      </div>
      <div style="padding:28px;color:#e4e4e7;font-size:14px;line-height:1.7;">
        <p style="margin:0 0 14px;"><strong style="color:#a1a1aa;">Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 14px;"><strong style="color:#a1a1aa;">Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:0 0 14px;"><strong style="color:#a1a1aa;">Subject:</strong> ${escapeHtml(subject || "(no subject)")}</p>
        <hr style="border:none;border-top:1px solid #27272a;margin:20px 0;" />
        <p style="margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>
      </div>
      <div style="padding:16px 28px;background:#0c0c0e;color:#52525b;font-size:12px;">
        Sent via the contact form on techmirtz.com
      </div>
    </div>
  </div>`;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();
  const honeypot = (body.company || "").trim();

  // Honeypot filled → almost certainly a bot. Pretend success, send nothing.
  if (honeypot) {
    return Response.json({ success: true });
  }

  if (!name || !email || !message) {
    return Response.json(
      { success: false, error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (message.length > 5000 || name.length > 120 || subject.length > 200) {
    return Response.json(
      { success: false, error: "One of the fields is too long." },
      { status: 400 }
    );
  }

  // ── Demo mode: key still a placeholder → simulate a successful send ──
  if (isPlaceholder(RESEND_API_KEY)) {
    console.log(
      "[contact] RESEND_API_KEY is a placeholder — simulating send. " +
      "Set your real key in .env.local to enable actual email delivery."
    );
    return Response.json({
      success: true,
      demo: true,
      message:
        "Demo mode: RESEND_API_KEY is a placeholder. Add your real key in .env.local to send real emails.",
    });
  }

  // ── Real send via Resend ──
  try {
    const resend = new Resend(RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Portfolio: ${subject || "New message"} — ${name}`,
      html: buildEmailHtml({ name, email, subject, message }),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json(
        { success: false, error: error.message || "Email delivery failed." },
        { status: 502 }
      );
    }

    console.log("[contact] Email sent:", data?.id);
    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json(
      { success: false, error: "Unexpected error while sending the email." },
      { status: 500 }
    );
  }
}
