import CaseStudiesDetailsContent from "@/components/CaseStudies/CaseStudiesDetailsContent";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";
import caseStudiesDetail from "../../../../constants/case-studies/caseStudyDetailsData";
import NotFound from "@/app/not-found";
type Prop = {
  params: Promise<{ detail: string }>;
};

export default async function Page({ params }: Prop) {
  const { detail } = await params;
  const caseStudy = caseStudiesDetail.find(
    (caseItem) => caseItem.key === detail.toLowerCase()
  );
  if (!caseStudy) return <NotFound />;
  return (
    <>
      <NavbarStyle2 />

      {/* <PageTitle homeText="Home" pageTitle="Case Studies Details" /> */}

      <CaseStudiesDetailsContent details={caseStudy} />

      {/* <GetStarted /> */}

      <Footer />
    </>
  );
}
