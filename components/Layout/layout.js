import Nav from "../Nav/Nav";
import SiteContent from "../SiteContent/SiteContent";
import SiteLayout from "../SiteLayout/SiteLayout";
import { usePathname } from "next/navigation";

const titleData = {
  "/": {
    title: "Marcin Bartmiński",
    caption: "iOS Developer",
  },
  "/projects": {
    title: "Projects",
    caption: "Some projects I've worked on.",
  },
  "/projects/walut": {
    title: "Walut",
    caption:
      "App that you can use to check currency rates. Written in SwiftUI.",
  },
  "/experience": {
    title: "Experience",
    caption: "My career in IT.",
  },
  "/links": {
    title: "Links",
    caption: "My presence on different platforms.",
  },
};

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <SiteLayout>
        <Nav />
        <div className="line" />

        <SiteContent>
          <div>
            <h1>{titleData[pathname]?.title}</h1>
            <p className="caption">{titleData[pathname]?.caption}</p>
          </div>
          {children}
        </SiteContent>
      </SiteLayout>
    </>
  );
}
