export default function handler(request, response) {
  const configScript = `
    window.__ENV__ = {
      SUPABASE_URL: "${process.env.SUPABASE_URL || ''}",
      SUPABASE_ANON_KEY: "${process.env.SUPABASE_ANON_KEY || ''}"
    };
  `;
  response.setHeader('Content-Type', 'application/javascript');
  return response.status(200).send(configScript);
}