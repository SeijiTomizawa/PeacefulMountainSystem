interface Env {
  RESEND_API_KEY: string;
  CONTACT_FROM_EMAIL: string;
  CONTACT_TO_EMAIL: string;
}

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  inquiry_type?: string;
  message: string;
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const env = ctx.env;

  let body: ContactBody;
  try {
    body = await ctx.request.json<ContactBody>();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone = "", inquiry_type = "", message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json(
      { ok: false, error: "必須項目をすべて入力してください。 / Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { ok: false, error: "有効なメールアドレスを入力してください。 / Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resendApiKey = env.RESEND_API_KEY;
  const fromEmail    = env.CONTACT_FROM_EMAIL;
  const toEmail      = env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !fromEmail || !toEmail) {
    return Response.json({ ok: false, error: "Server configuration error." }, { status: 500 });
  }

  function escHtml(s: string): string {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const inquiryLabels: Record<string, string> = {
    trial:   "体験稽古・入門",
    shiatsu: "指圧整体のご予約",
    dojo:    "道場・流派について",
    other:   "その他",
  };
  const inquiryLabel = inquiryLabels[inquiry_type] ?? inquiry_type ?? "未選択";
  const subject = `[泰山流 お問い合わせ] ${inquiryLabel} — ${name} 様`;

  const textBody = [
    `■ お名前　　: ${name}`,
    `■ メール　　: ${email}`,
    `■ 電話番号　: ${phone || "（未入力）"}`,
    `■ 種別　　　: ${inquiryLabel}`,
    ``,
    `■ メッセージ`,
    message,
    ``,
    `──────────────────`,
    `泰山流護身術・逮捕術 東京八王子本部道場`,
    `https://peacefulmountainsystem.com`,
  ].join("\n");

  const htmlBody = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#6B1F23;border-bottom:2px solid #6B1F23;padding-bottom:8px;">
        泰山流 お問い合わせ
      </h2>
      <table style="width:100%;border-collapse:collapse;margin:20px 0;">
        <tr><td style="padding:8px 12px;background:#f9f6f2;font-weight:bold;width:120px;">お名前</td><td style="padding:8px 12px;">${escHtml(name)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f9f6f2;font-weight:bold;">メール</td><td style="padding:8px 12px;"><a href="mailto:${escHtml(email)}">${escHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 12px;background:#f9f6f2;font-weight:bold;">電話番号</td><td style="padding:8px 12px;">${escHtml(phone || "（未入力）")}</td></tr>
        <tr><td style="padding:8px 12px;background:#f9f6f2;font-weight:bold;">種別</td><td style="padding:8px 12px;">${escHtml(inquiryLabel)}</td></tr>
      </table>
      <h3 style="color:#6B1F23;">メッセージ</h3>
      <div style="background:#f9f6f2;padding:16px;border-radius:6px;white-space:pre-wrap;">${escHtml(message)}</div>
      <hr style="margin:32px 0;border:none;border-top:1px solid #ddd;">
      <p style="color:#888;font-size:12px;">泰山流護身術・逮捕術 東京八王子本部道場</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:     `泰山流 お問い合わせフォーム <${fromEmail}>`,
        to:       [toEmail],
        reply_to: email,
        subject,
        text:     textBody,
        html:     htmlBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return Response.json(
        { ok: false, error: "送信に失敗しました。時間をおいてから再度お試しください。 / Something went wrong. Please try again later." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("Contact form error:", e);
    return Response.json(
      { ok: false, error: "送信に失敗しました。時間をおいてから再度お試しください。 / Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
};
