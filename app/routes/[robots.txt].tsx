import { LoaderArgs } from "@remix-run/cloudflare";

export function loader({ request, context }: LoaderArgs) {

  return new Response(`
    User-agent: *
    Disallow: /admin/
    Disallow: /login/
    Allow: /

    Sitemap: https://anrdhomes.com/sitemap.xml
    `, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
    })
}
