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
      <meta name="copyright" content={`${inmutableConstants.NOMBRE_COMPLETO}`} />
      <meta name="designer" content={`${inmutableConstants.NOMBRE_COMPLETO}`} />

      <title>{title}</title>

      <meta name="robots" content="follow, index" />
      <meta name="description" content={description || ""} />

      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(",") : keywords!} />
    </Head>
  );
};
