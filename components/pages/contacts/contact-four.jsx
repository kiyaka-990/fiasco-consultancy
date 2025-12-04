"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import Form from "./form";
import Social from "@/components/data/social";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ContactFour = () => {
    return (
        <>
            {/* The SEO page title is kept generic unless you want to change it */}
            <SEO pageTitle="Contact us" />
            <BreadCrumb title="Contact Us" innerTitle="Contacts" />
            <div className="contact__two section-padding pb-0">
                <div className="container">
                    <div className="row contact__two-box">
                        <div className="col-xl-4 col-lg-5 lg-mb-30">
                            <div className="contact__two-left">
                                <h3>Get in Touch</h3>
                                <p className="mb-30">Our team is ready to assist you. Reach out to Fiasco Consultancy through the details below.</p>
                                
                                {/* Phone Number Localized */}
                                <div className="contact__two-left-item">
                                    <div className="contact__two-left-item-icon">
                                        <img src="/assets/img/icon/call.png" alt="icon" />
                                    </div>
                                    <div className="contact__two-left-item-info">
                                        <span>Call Us</span>
                                        <p><a href="tel:+254712770999">+254 712 770 999</a></p>
                                    </div>
                                </div>
                                
                                {/* Email Address Localized */}
                                <div className="contact__two-left-item">
                                    <div className="contact__two-left-item-icon">
                                        <img src="/assets/img/icon/email.png" alt="icon" />
                                    </div>
                                    <div className="contact__two-left-item-info">
                                        <span>Quick Email</span>
                                        <p><a href="mailto:info@fiascoconsultancy.co.ke">info@fiascoconsultancy.co.ke</a></p>
                                    </div>
                                </div>
                                
                                {/* Office Address Localized */}
                                <div className="contact__two-left-item">
                                    <div className="contact__two-left-item-icon">
                                        <img src="/assets/img/icon/locations.png" alt="icon" />
                                    </div>
                                    <div className="contact__two-left-item-info">
                                        <span>Office Address</span>
                                        {/* Removed the <a> tag as it's a physical address display */}
                                        <p>Standard Building, Standard Street, Nairobi, Kenya</p>
                                    </div>
                                </div>
                                
                                <div className="contact__two-left-item-socialIcon">
                                    <h6>Follow Us</h6>
                                    <Social />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="contact__two-right">
                                <h3>Send Us A Message</h3>
                                {/* Updated placeholder text for relevance */}
                                <p>Fill out the form below and we will get back to you promptly to discuss your consultancy needs.</p>
                                <div className="contact__two-right-form">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Map Iframe Localized to Standard Street, Nairobi */}
            <div className="contact__two-map">
                {/* This is a direct embed URL for Standard Street, Nairobi */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.825867169123!2d36.82143107507996!3d-1.2801458987103855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7a6e1180d%3A0xb367c37466986e24!2sStandard%20Street%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1701768856699!5m2!1sen!2ske" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fiasco Consultancy Location Map"
                ></iframe>
            </div>
            <ScrollToTop />
        </>
    );
};

export default ContactFour;