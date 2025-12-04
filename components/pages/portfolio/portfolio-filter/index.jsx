"use client"

import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioFilter from "./portfolio-filter";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioFilterPage = () => {
    return (
        <>
            <SEO pageTitle='Projects' />
            <BreadCrumb title="projects " innerTitle="projects" />
            <PortfolioFilter />
            <ScrollToTop />
        </>
    );
};

export default PortfolioFilterPage;