"use client"

import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import BlogStandardMain from "./blog-standard";
import ScrollToTop from "../../common/scroll/scroll-to-top";


const BlogStandardPage = () => {
    return (
        <>
            <SEO pageTitle='Blog Standard' />
            <BreadCrumb title="Blog Standard" innerTitle="Blog Standard" />
            <BlogStandardMain />
            <ScrollToTop />
        </>
    );
};

export default BlogStandardPage;