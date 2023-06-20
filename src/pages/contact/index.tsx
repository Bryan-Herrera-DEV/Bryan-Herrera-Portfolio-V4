import { PageSeo } from "@/components/PageSeo";
import { getSEO } from "@/shared/seoData";

export default function Index() {
  const getSeoImp = getSEO("CONTACT");
  return (
    <>
      <PageSeo
        title={getSeoImp!.title}
        description={getSeoImp!.description}
        kewords={getSeoImp!.keywords}
      />
      <p>a</p>
    </>
  );
}
