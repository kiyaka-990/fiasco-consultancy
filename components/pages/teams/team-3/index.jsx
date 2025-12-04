"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamPageThree = () => {
    return (
        <>
            <SEO pageTitle='Team Three' />
             <BreadCrumb title='Team Three' innerTitle='Team Three'/>
            <TeamMain />
            <ScrollToTop />
        </>
    );
};

export default TeamPageThree;