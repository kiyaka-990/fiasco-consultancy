"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioDetailsMain from "./portfolio-details";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioDetails = ({singleData}) => {
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <BreadCrumb title={singleData?.title} innerTitle={singleData?.title} />
            <PortfolioDetailsMain singleData={singleData} />
            <ScrollToTop />
        </>
    );
};

export default PortfolioDetails;