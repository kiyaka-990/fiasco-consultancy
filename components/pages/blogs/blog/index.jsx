"use client"

import SEO from "@/components/data/seo";
// HeaderTwo is no longer needed here
// import HeaderTwo from "@/components/layout/headers/header-two"; 
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
// FooterTwo is no longer needed here
// import FooterTwo from "@/components/layout/footers/footer-two"; 
import ScrollToTop from "../../common/scroll/scroll-to-top";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='Blog Grid' />
            {/* REMOVED: <HeaderTwo/>  */}
            
            <BreadCrumb title="Blog Grid" innerTitle="Blog Grid" />
            
            <BlogGridMain />
            
            {/* REMOVED: Footer container and component */}
            {/* <div className='all-footer'> 
                <FooterTwo />
            </div> */}
            
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;