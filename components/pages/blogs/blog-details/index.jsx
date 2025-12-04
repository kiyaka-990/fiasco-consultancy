"use client"

import BlogSingleMain from "./blog-details";
import BreadCrumb from "../../common/breadcrumb";
import SEO from "@/components/data/seo";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const BlogDetails = ({singleData}) => {
    const firstThreeWords = singleData?.title.split(' ').slice(0, 3).join(' ') + '...';
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <BreadCrumb title={firstThreeWords} innerTitle={singleData?.title} />
            <BlogSingleMain singleData={singleData}/>
            <ScrollToTop />
        </>
    );
};

export default BlogDetails;