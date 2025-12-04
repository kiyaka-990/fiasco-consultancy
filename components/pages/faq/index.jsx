"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import FaqArea from "./faq";
import ScrollToTop from "../common/scroll/scroll-to-top";

const Faq = () => {
    return (
        <>        
            <SEO pageTitle='FAQ' />
            <BreadCrumb title='Question & Ans.' innerTitle="FAQ's" />
            <div className='section-padding'>
                <FaqArea />
            </div>
            <ScrollToTop />
        </>
    );
};

export default Faq;