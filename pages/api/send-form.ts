import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body || {};

    const formData = new URLSearchParams();
    formData.append('access_key', process.env.FORM_ACCESS_KEY || '');
    if (name) formData.append('name', String(name));
    if (email) formData.append('email', String(email));
    if (message) formData.append('message', String(message));

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    return res.status(response.ok ? 200 : 500).json(data);
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error?.message || 'Server error' });
  }
}
