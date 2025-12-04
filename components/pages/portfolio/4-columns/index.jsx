"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import FourColumns from "./four-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioFourColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 04 Columns' />
             <BreadCrumb title="04 Columns" innerTitle="Portfolio Grid" />
            <FourColumns />        
            <ScrollToTop />     
        </>
    );
};

export default PortfolioFourColumns;