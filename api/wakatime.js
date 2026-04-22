export default async function handler(req, res) {
  // ดึง path และ query strings จาก URL
  // เช่น /api/wakatime/users/current/summaries?start=...
  const url = new URL(req.url, `http://${req.headers.host}`);
  const targetPath = url.pathname.replace('/api/wakatime', '');
  const searchParams = url.search;
  
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

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
