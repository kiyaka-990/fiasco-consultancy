"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamFilter from "./team-filter";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamFilterPage = () => {
    return (
        <>
            <SEO pageTitle='Team Filter' />
            <BreadCrumb title='Team Filter' innerTitle='Team Filter'/>
            <TeamFilter />
            <ScrollToTop />
        </>
    );
};

export default TeamFilterPage;