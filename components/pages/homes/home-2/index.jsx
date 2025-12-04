"use client"
import SEO from "@/components/data/seo";
// REMOVED: HeaderTwo import 
// REMOVED: FooterTwo import
import BannerTwo from "./banner";
import SwitchTab from "../../common/dark-light";
import Services from "./services";
import About from "./about";
import Video from "./video";
import Work from "./work";
import Consulting from "./consulting";
import Portfolio from "./portfolio";
import Team from "./team";
import Blog from "./blog";
import ScrollToTop from "../../common/scroll/scroll-to-top";

// Note: If HeaderTwo or FooterTwo are not used anywhere else in this file, 
// you should also remove their imports entirely to clean up the code.

const HomeTwo = ({addClass}) => {
    return (
        <>
            <SEO pageTitle="Consulting Business" />
            <SwitchTab addClass={addClass} />
            
            {/* REMOVED: <HeaderTwo /> */}
            
            {/* This is the unique content of your homepage */}
            <BannerTwo />
            <Services />
            <About />
            <Video />
            <Work />
            <Consulting />
            <Portfolio />
            <Team />
            <Blog />
            
            {/* REMOVED: <FooterTwo /> */}
            
            <ScrollToTop addClass={addClass} />
        </>
    );
};

export default HomeTwo;