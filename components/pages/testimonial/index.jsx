"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import TestimonialMain from "./testimonial";
import ScrollToTop from "../common/scroll/scroll-to-top";

const Testimonial = () => {
    return (
        <>
            <SEO pageTitle='Testimonials' />
              <BreadCrumb title='Testimonials' innerTitle='Testimonials' />
            <div className='pricing__area page'>
                <TestimonialMain />
            </div>
          
            <ScrollToTop />         
        </>
    );
};

export default Testimonial;