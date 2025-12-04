"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TwoColumns from "./two-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioTowColumns = () => {
    return (
        <>
            <SEO pageTitle='Project Portfolio' />
            <BreadCrumb title="Projects" innerTitle="Portfolio" />
            <TwoColumns />        
            <ScrollToTop />      
        </>
    );
};

export default PortfolioTowColumns;