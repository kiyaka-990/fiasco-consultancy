"use client"

import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import ScrollToTop from "../common/scroll/scroll-to-top";
import WhoWeAre from "./who-we-are";
import History from "./history";

// Remove the imports for HeaderTwo and FooterTwo from this file

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="About Us" />
        {/* The HeaderTwo is now rendered globally by RootLayout, so it's removed here. */}

        <BreadCrumb title="About Us" innerTitle="About us" />
        <AboutMain />
        <WhoWeAre />
        <History />
        
        {/* The FooterTwo is now rendered globally by RootLayout, so it's removed here. */}
        <ScrollToTop />
      </>
    );
};

export default AboutUs;