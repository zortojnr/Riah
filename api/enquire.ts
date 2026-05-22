const TO = 'contact@riahevents.com';
const RESEND_URL = 'https://api.resend.com/emails';

async function sendEmail(payload: {
  from: string;
  to: string;
  subject: string;
  html: string;
  reply_to: string;
}): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8_000);

  let res: Response;
  try {
    res = await fetch(RESEND_URL, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } finally {
    clearTimeout(timer);
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => res.statusText);
    throw new Error(`Resend ${res.status}: ${detail}`);
  }
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return new Response(JSON.stringify({ error: 'RESEND_API_KEY not set' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
  console.log('RESEND_API_KEY present, length:', process.env.RESEND_API_KEY.length);

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const { type, ...fields } = body;

  if (type === 'wedding') {
    const rows: [string, string][] = [
      ['Name', fields.fullName],
      ["Partner's Name", fields.partnerName],
      ['Email', fields.email],
      ['Phone', fields.phone],
      ['Based In', fields.basedIn],
      ['Wedding Location', fields.location],
      ['Date / Season', fields.dateOrSeason],
      ['Guest Count', fields.guestCount],
      ['Planning Stage', fields.planningStage],
      ['Investment Range', fields.investment],
      ['How They Heard', fields.howHeard],
    ];

    try {
      await sendEmail({
        from: 'RIAH Enquiries <contact@riahevents.com>',
        to: TO,
        subject: 'Wedding Celebration Enquiry — RIAH',
        html: buildTable('New Wedding Celebration Enquiry', rows),
        reply_to: fields.email,
      });
    } catch (err) {
      console.error('Email send failed (wedding):', err instanceof Error ? err.message : err);
      return new Response('Email failed', { status: 500 });
    }

    return new Response('OK', { status: 200 });
  }

  if (type === 'private') {
    const rows: [string, string][] = [
      ['Name', fields.name],
      ['Email', fields.email],
      ['Phone', fields.phone],
      ['Celebration Type', fields.celebrationType],
      ['Location', fields.location],
      ['Date / Timeframe', fields.dateOrTimeframe],
      ['Guest Count', fields.guestCount],
      ['Investment Range', fields.investment],
      ['How They Heard', fields.howHeard],
    ];

    try {
      await sendEmail({
        from: 'RIAH Enquiries <contact@riahevents.com>',
        to: TO,
        subject: 'Private Celebration Enquiry — RIAH',
        html: buildTable('New Private Celebration Enquiry', rows),
        reply_to: fields.email,
      });
    } catch (err) {
      console.error('Email send failed (private):', err instanceof Error ? err.message : err);
      return new Response('Email failed', { status: 500 });
    }

    return new Response('OK', { status: 200 });
  }

  return new Response('Unknown enquiry type', { status: 400 });
}

function buildTable(title: string, rows: [string, string][]): string {
  return `
    <h2 style="font-family:sans-serif;color:#1a3330">${title}</h2>
    <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:600px">
      ${rows.map(([label, value]) => `
        <tr>
          <td style="padding:10px 14px;background:#f5f4f0;font-weight:600;color:#1a3330;width:38%;border-bottom:1px solid #e0ddd6">${label}</td>
          <td style="padding:10px 14px;color:#333;border-bottom:1px solid #e0ddd6">${value || '—'}</td>
        </tr>`).join('')}
    </table>
  `;
}
