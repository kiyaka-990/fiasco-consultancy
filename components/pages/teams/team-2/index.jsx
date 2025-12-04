"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamPageTwo = () => {
    return (
        <>
            <SEO pageTitle='Team' />
            <BreadCrumb title='Our Team' innerTitle='Consultants'/>
            <TeamMain />
            <ScrollToTop />
        </>
    );
};

export default TeamPageTwo;