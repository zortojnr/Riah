import { Resend } from 'resend';
import type { IncomingMessage, ServerResponse } from 'http';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = 'contact@riahevents.com';

function buildTable(title: string, rows: [string, string | undefined][]): string {
  return `
    <h2 style="font-family:sans-serif;color:#1a3330;margin-bottom:20px">${title}</h2>
    <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:600px">
      ${rows.map(([label, value]) => `
        <tr>
          <td style="padding:10px 14px;background:#f5f4f0;font-weight:600;color:#1a3330;width:38%;border-bottom:1px solid #e0ddd6">${label}</td>
          <td style="padding:10px 14px;color:#333;border-bottom:1px solid #e0ddd6">${value || '—'}</td>
        </tr>`).join('')}
    </table>
  `;
}

function buildConfirmation(name: string, type: 'wedding' | 'private'): string {
  const intro = type === 'wedding'
    ? `Thank you for considering RIAH to curate your wedding celebration, ${name}.`
    : `Thank you for reaching out to RIAH, ${name}.`;

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a3330">
      <div style="border-bottom:1px solid #e0ddd6;padding-bottom:24px;margin-bottom:32px">
        <p style="font-size:11px;letter-spacing:0.4em;text-transform:uppercase;color:#8a7e72;margin:0">RIAH</p>
      </div>

      <p style="font-size:15px;line-height:1.8;font-weight:300;margin-bottom:24px">${intro}</p>

      <p style="font-size:15px;line-height:1.8;font-weight:300;margin-bottom:24px">
        We have received your enquiry and our team will thoughtfully review your details.
        Should your date and vision align with our availability, we will be in touch within
        <strong>48 hours</strong> to invite you to a private consultation.
      </p>

      <p style="font-size:15px;line-height:1.8;font-weight:300;margin-bottom:40px">
        We accept a limited number of celebrations each year in order to preserve the depth,
        care, and artistry our clients deserve. Thank you for your patience.
      </p>

      <div style="border-top:1px solid #e0ddd6;padding-top:24px;margin-top:32px">
        <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#8a7e72;margin:0 0 4px">Tobi Yusuf</p>
        <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#b0a89e;margin:0">Founder, RIAH</p>
        <p style="margin-top:16px;margin-bottom:0">
          <a href="https://www.riahevents.com" style="font-size:11px;color:#8a7e72;text-decoration:none;letter-spacing:0.2em">www.riahevents.com</a>
        </p>
      </div>
    </div>
  `;
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.writeHead(405).end('Method not allowed');
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('[enquire] RESEND_API_KEY is not set');
    res.writeHead(500, { 'Content-Type': 'application/json' }).end(JSON.stringify({ error: 'Server misconfiguration' }));
    return;
  }

  let body: Record<string, string>;
  try {
    const raw = await readBody(req);
    body = JSON.parse(raw);
  } catch {
    res.writeHead(400).end('Invalid JSON');
    return;
  }

  const { type, ...fields } = body;

  if (type === 'wedding') {
    if (!fields.fullName || !fields.email) {
      res.writeHead(400).end('Missing required fields');
      return;
    }

    const rows: [string, string | undefined][] = [
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

    const [{ error: e1 }, { error: e2 }] = await Promise.all([
      resend.emails.send({
        from: 'RIAH <contact@riahevents.com>',
        to: TO,
        subject: 'Wedding Celebration Enquiry — RIAH',
        html: buildTable('New Wedding Celebration Enquiry', rows),
        replyTo: fields.email,
      }),
      resend.emails.send({
        from: 'RIAH <contact@riahevents.com>',
        to: fields.email,
        subject: 'Your Enquiry Has Been Received — RIAH',
        html: buildConfirmation(fields.fullName, 'wedding'),
        replyTo: TO,
      }),
    ]);

    if (e1 || e2) {
      console.error(`[enquire] Wedding send failed for ${fields.fullName} <${fields.email}>:`, e1 || e2);
      res.writeHead(500).end('Email failed');
      return;
    }

    console.log(`[enquire] Wedding enquiry sent — ${fields.fullName} <${fields.email}>`);
    res.writeHead(200).end('OK');
    return;
  }

  if (type === 'private') {
    if (!fields.name || !fields.email) {
      res.writeHead(400).end('Missing required fields');
      return;
    }

    const rows: [string, string | undefined][] = [
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

    const [{ error: e1 }, { error: e2 }] = await Promise.all([
      resend.emails.send({
        from: 'RIAH <contact@riahevents.com>',
        to: TO,
        subject: 'Private Celebration Enquiry — RIAH',
        html: buildTable('New Private Celebration Enquiry', rows),
        replyTo: fields.email,
      }),
      resend.emails.send({
        from: 'RIAH <contact@riahevents.com>',
        to: fields.email,
        subject: 'Your Enquiry Has Been Received — RIAH',
        html: buildConfirmation(fields.name, 'private'),
        replyTo: TO,
      }),
    ]);

    if (e1 || e2) {
      console.error(`[enquire] Private send failed for ${fields.name} <${fields.email}>:`, e1 || e2);
      res.writeHead(500).end('Email failed');
      return;
    }

    console.log(`[enquire] Private enquiry sent — ${fields.name} <${fields.email}>`);
    res.writeHead(200).end('OK');
    return;
  }

  res.writeHead(400).end('Unknown enquiry type');
}
