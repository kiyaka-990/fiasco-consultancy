"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Services" />
                              
            <BreadCrumb title="Our Services" innerTitle="Our Services" />
            <ServicesMain />
                                
            <ScrollToTop />
        </>
    );
};

export default ServicePage;