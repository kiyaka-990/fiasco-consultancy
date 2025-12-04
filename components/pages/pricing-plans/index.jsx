"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import PricingPlansMain from "./pricing-plans";
import ScrollToTop from "../common/scroll/scroll-to-top";

const PricingPages = () => {
    return (
        <>
            <SEO pageTitle='Pricing Plan' />
            <BreadCrumb title='Pricing Plan' innerTitle='Pricing Plan' />
            <div className='pricing__area page section-padding'>
                <PricingPlansMain />
            </div>
             <ScrollToTop />        
        </>
    );
};

export default PricingPages;