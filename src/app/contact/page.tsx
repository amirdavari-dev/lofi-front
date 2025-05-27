import PageTitle from "@/components/Common/PageTitle";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import GoogleMap from "@/components/Contact/GoogleMap";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";

export default function Page() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="Contact Us" />

      <ContactInfo />

      <ContactForm />

      <GoogleMap />

      <Footer />
    </>
  );
}
