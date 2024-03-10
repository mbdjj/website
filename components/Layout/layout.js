import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import SiteContent from "../SiteContent/SiteContent";
import SiteLayout from "../SiteLayout/SiteLayout";

export default function Layout({ children }) {
  return (
    <>
      <SiteLayout>
        <Nav />
        <div className="line" />

        <SiteContent>{children}</SiteContent>

        <div className="line" />
        <Footer />
      </SiteLayout>
    </>
  )
}