export default async function handler(req, res) {
  // ดึง path และ query strings จาก URL
  // เช่น /api/wakatime/users/current/summaries?start=...
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const targetPath = url.pathname.replace('/api/wakatime', '');
  const searchParams = url.search;
  
  // Only expose the summaries endpoint; this proxy carries a private API key
  if (targetPath !== '/users/current/summaries') {
    return res.status(404).json({ error: 'Not found' });
  }

  const wakatimeUrl = `https://wakatime.com/api/v1${targetPath}${searchParams}`;

  const key = process.env.WAKATIME_API_KEY;
  
  if (!key) {
    return res.status(500).json({ error: 'WAKATIME_API_KEY is not defined' });
  }

  try {
    const encodedKey = Buffer.from(key).toString('base64');
    const response = await fetch(wakatimeUrl, {
      headers: {
        'Authorization': `Basic ${encodedKey}`
      }
    });

    const data = await response.json();
    
    // ตั้งค่า CORS เบื้องต้น
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
