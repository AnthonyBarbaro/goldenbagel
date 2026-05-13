import { writeFileSync } from "node:fs";
import { absoluteUrl } from "../src/lib/seo";

const routes = ["/", "/menu/", "/catering/", "/jobs/", "/visit/", "/reviews/", "/privacy/", "/terms/", "/accessibility/"];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${absoluteUrl(route)}</loc></url>`).join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", sitemap);
writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`);
