"use client"
import SEO from "@/components/data/seo";
// REMOVED: HeaderOne import - the global layout provides the header (HeaderTwo)
// import HeaderOne from "@/components/layout/headers/header-one"; 

import BreadCrumb from "../../common/breadcrumb";
// REMOVED: FooterTwo import - the global layout provides the footer
// import FooterTwo from "@/components/layout/footers/footer-two"; 

import ServicesMain from "./service-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const ServicePageTwo = () => {
    return (
        <>
            <SEO pageTitle="Services Two" />
            
            {/* REMOVED: <HeaderOne /> - Rely on the global layout (app/layout.js) */}
            
            <BreadCrumb title="Services Two" innerTitle="Services Two" />
            
            <ServicesMain />
            
            {/* REMOVED: The entire footer div and <FooterTwo /> call */}
            {/* <div className='all-footer'>
                <FooterTwo />
            </div> */}
            
            <ScrollToTop />
        </>
    );
};

export default ServicePageTwo;