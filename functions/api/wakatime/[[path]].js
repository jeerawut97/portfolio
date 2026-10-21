// Cloudflare Pages Function: proxies /api/wakatime/* to WakaTime with the private API key
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const targetPath = url.pathname.replace('/api/wakatime', '');

  // Only expose the summaries endpoint; this proxy carries a private API key
  if (targetPath !== '/users/current/summaries') {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }

  const key = env.WAKATIME_API_KEY;
  if (!key) {
    return Response.json({ error: 'WAKATIME_API_KEY is not defined' }, { status: 500 });
  }

  try {
    const response = await fetch(`https://wakatime.com/api/v1${targetPath}${url.search}`, {
      headers: { Authorization: `Basic ${btoa(key)}` },
    });
    const data = await response.json();

    return Response.json(data, {
      status: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
