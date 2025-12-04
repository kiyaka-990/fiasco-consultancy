"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    // New structure: "Fiasco Consultancy Limited | [Page Title]"
    document.title = "Fiasco Consultancy Limited | " + pageTitle;
  }, [pageTitle]); // Added pageTitle to dependency array for best practice
};

export default SEO;