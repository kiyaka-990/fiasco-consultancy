"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamPage = () => {
    return (
        <>
            <SEO pageTitle='Our Team' />
             <BreadCrumb title='Our Team' innerTitle='Our Team'/>
            <TeamMain />
            <ScrollToTop />
        </>
    );
};

export default TeamPage;