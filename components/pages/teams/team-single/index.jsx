"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamSingleMain from "./team-single";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamSingle = ({teamDetails}) => {
    return (
        <>
            <SEO pageTitle={teamDetails?.name} />
            <BreadCrumb title={teamDetails?.name} innerTitle={teamDetails?.name} />
            <TeamSingleMain teamDetails={teamDetails}/>
            <ScrollToTop />
        </>
    );
};

export default TeamSingle;