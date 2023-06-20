import { PageSeo } from "@/components/PageSeo";
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
      <div>
        <section>
          <p>Hola1</p>
        </section>
        <section>
          <p>Hola2</p>
        </section>
        <section>
          <p>Hola3</p>
        </section>
      </div>
    </>
  );
};

export default index;
