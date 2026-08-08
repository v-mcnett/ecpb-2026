const siteUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://emeraldcityphotobooth.com';

const pages = [
  { path: '/', priority: '1.00' },
  { path: '/about', priority: '0.80' },
  { path: '/book', priority: '0.80' },
  { path: '/contact', priority: '0.80' },
  { path: '/gallery', priority: '0.80' },
  { path: '/services', priority: '0.80' },
];

export function GET() {
  const lastMod = new Date().toISOString();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    pages.map((page) => `  <url>\n    <loc>${siteUrl}${page.path}</loc>\n    <lastmod>${lastMod}</lastmod>\n    <priority>${page.priority}</priority>\n  </url>`).join(`\n`) +
    `\n</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
