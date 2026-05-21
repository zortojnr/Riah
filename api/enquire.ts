import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = 'tobi@riahevents.com';

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const { type, ...fields } = body;

  if (type === 'wedding') {
    const rows = [
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

    const html = `
      <h2 style="font-family:sans-serif;color:#1a3330">New Wedding Celebration Enquiry</h2>
      <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:600px">
        ${rows.map(([label, value]) => `
          <tr>
            <td style="padding:10px 14px;background:#f5f4f0;font-weight:600;color:#1a3330;width:38%;border-bottom:1px solid #e0ddd6">${label}</td>
            <td style="padding:10px 14px;color:#333;border-bottom:1px solid #e0ddd6">${value || '—'}</td>
          </tr>`).join('')}
      </table>
    `;

    const { error } = await resend.emails.send({
      from: 'RIAH Enquiries <tobi@riahevents.com>',
      to: TO,
      subject: 'Wedding Celebration Enquiry — RIAH',
      html,
      replyTo: fields.email,
    });

    if (error) {
      console.error(error);
      return new Response('Email failed', { status: 500 });
    }

    return new Response('OK', { status: 200 });
  }

  if (type === 'private') {
    const rows = [
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

    const html = `
      <h2 style="font-family:sans-serif;color:#1a3330">New Private Celebration Enquiry</h2>
      <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:600px">
        ${rows.map(([label, value]) => `
          <tr>
            <td style="padding:10px 14px;background:#f5f4f0;font-weight:600;color:#1a3330;width:38%;border-bottom:1px solid #e0ddd6">${label}</td>
            <td style="padding:10px 14px;color:#333;border-bottom:1px solid #e0ddd6">${value || '—'}</td>
          </tr>`).join('')}
      </table>
    `;

    const { error } = await resend.emails.send({
      from: 'RIAH Enquiries <tobi@riahevents.com>',
      to: TO,
      subject: 'Private Celebration Enquiry — RIAH',
      html,
      replyTo: fields.email,
    });

    if (error) {
      console.error(error);
      return new Response('Email failed', { status: 500 });
    }

    return new Response('OK', { status: 200 });
  }

  return new Response('Unknown enquiry type', { status: 400 });
}
