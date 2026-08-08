const siteUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://emeraldcityphotobooth.com';

export function GET() {
  const content = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
