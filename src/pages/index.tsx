import { PageSeo } from "@/components/PageSeo";
import HomeLayout from "@/components/layouts/home";
import WorkExperience from "@/components/layouts/home/WorkExperience";
import { getSEO } from "@/shared/seoData";

const index = () => {
  const getSeoImp = getSEO("HOME");
  return (
    <>
      <PageSeo
        title={getSeoImp!.title}
        description={getSeoImp!.description}
        kewords={getSeoImp!.keywords}
      />
      <HomeLayout />
      <WorkExperience />
    </>
  );
};

export default index;
