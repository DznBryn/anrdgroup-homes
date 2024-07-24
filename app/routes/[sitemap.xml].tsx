import { LoaderArgs } from '@remix-run/cloudflare';

export function loader({ request, context }: LoaderArgs) {
	console.log({ request, context });
	// make this dynamic to routes
	const urls = [
		`<url>
      <loc>https://anrdhomes.com/</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>   
    </url>`,
	];
	return new Response(
		`<urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
        <url>
          <loc>https://anrdhomes.com/</loc>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>   
        </url>
      <urlset>
    `,
		{
			status: 200,
			headers: {
				'Content-Type': 'application/xml',
			},
		}
	);
}
