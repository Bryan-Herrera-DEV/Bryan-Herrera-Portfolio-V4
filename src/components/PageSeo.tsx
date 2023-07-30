import Head from "next/head";
import { Metadata } from "next";
import { inmutableConstants } from "@/shared/constants";

interface PageSeoProps extends Metadata {
  title: string;
  description: string;
  kewords: string[];
}
export const PageSeo = ({ title, description, keywords }: PageSeoProps) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="googlebot" content="all" />
      <meta name="googlebot-news" content="all" />

      <meta
        name="author"
        content={`${inmutableConstants.NOMBRE_COMPLETO}, ${inmutableConstants.EMAIL}`}
      />
      <meta
        name="publisher"
        content={`${inmutableConstants.NOMBRE_COMPLETO}, ${inmutableConstants.NOMBRE_COMPLETO}`}
      />
      <meta name="reply-to" content={`${inmutableConstants.EMAIL}`} />
      <meta
        name="copyright"
        content={`${inmutableConstants.NOMBRE_COMPLETO}`}
      />
      <meta name="designer" content={`${inmutableConstants.NOMBRE_COMPLETO}`} />

      <title>{title}</title>

      <meta name="description" content={description || ""} />

      <meta
        name="keywords"
        content={Array.isArray(keywords) ? keywords.join(",") : keywords!}
      />
      <meta name="theme-color" content="#0a0a0d" />

      <meta name="robots" content="all" />
      <meta name="googlebot-news" content="all" />
      <meta
        name="google-site-verification"
        content="VFIoBukbxlXNN3cDw3_aaIGXvk0LbfAB1O9l7Ii6Wzg"
      />
      <meta name="url" content="https://bryan-herrera.netlify.app/" />
      <meta
        name="identifier-URL"
        content="https://bryan-herrera.netlify.app/"
      />
      <link rel="canonical" href="https://bryan-herrera.netlify.app/" />

      {/* Og */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bryan-herrera.netlify.app/" />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:image:width" content="1584" />
      <meta property="og:image:height" content="396" />
      <meta
        property="og:image"
        content="/Bryan_Herrera_Banner.png"
      />
    </Head>
  );
};
