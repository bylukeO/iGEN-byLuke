import type { NextApiRequest, NextApiResponse } from 'next';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwKVrhO47F45TK_wJx2e41v36lGsW9hv8iCzMYQmiLItL0CkKbDMSoHgO6OEStTLYv1NA/exec";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send message' });
  }
}