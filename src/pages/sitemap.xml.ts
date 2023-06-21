const URL = "https://bryan-herrera.netlify.app";

import { RoutesConstants, routesContstants } from "../shared/constants";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     ${Object.keys(routesContstants).map((key: unknown) => {
    return `
         <url>
           <loc>${URL}${routesContstants[key as keyof RoutesConstants][0][0]}</loc>
         </url>
    `;
  }).join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }: { res: any }) {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default function SiteMap() { }