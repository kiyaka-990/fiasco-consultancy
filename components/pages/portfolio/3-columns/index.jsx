"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ThreeColumns from "./three-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioThreeColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 03 Columns' />
             <BreadCrumb title="03 Columns" innerTitle="Portfolio Grid" />
            <ThreeColumns />        
            <ScrollToTop />
        </>
    );
};

export default PortfolioThreeColumns;