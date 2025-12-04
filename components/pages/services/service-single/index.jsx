"use client"
import SEO from "@/components/data/seo";
// Header and Footer imports are removed as they are provided globally
// import HeaderOne from "@/components/layout/headers/header-one";
// import FooterTwo from "@/components/layout/footers/footer-two";

import BreadCrumb from "../../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const ServicesSingle = ({serviceDetails}) => {
    return (
        <>
            <SEO pageTitle={serviceDetails?.title} />
            
            {/* ❌ REMOVED: <HeaderOne /> */}
            
            {/* These are the unique content sections */}
            <BreadCrumb title={serviceDetails?.title} innerTitle={serviceDetails?.title} />
            <ServicesSingleMain serviceDetails={serviceDetails}/>
            
            {/* ❌ REMOVED: Footer container and <FooterTwo /> */}
            
            <ScrollToTop />
        </>
    );
};

export default ServicesSingle;