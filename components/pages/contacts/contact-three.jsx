"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import Form from "./form";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ContactThree = () => {
    return (
        <>
            <SEO pageTitle="Contact Fiasco Consultancy" />
            <BreadCrumb title="Contact Us" innerTitle="Our Location & Details" />
            <div className="contact__three pb-0 section-padding">
                <div className="container">
                    <div className="row">
                        {/* 📞 Phone Number Localized */}
                        <div className="col-xl-4 col-md-6 lg-mb-30">
                            <div className="contact__three-info">
                                <div className="contact__three-info-icon">
                                    <img src="/assets/img/icon/call.png" alt="icon" />
                                </div>
                                <div className="contact__three-info-content">
                                    <h4>Call Us</h4>
                                    {/* Using the provided single number */}
                                    <p><a href="tel:+254712770999">+254 712 770 999</a></p>
                                    {/* Keeping one line for structure, maybe for a secondary line or general line if needed, but using the same number for completeness */}
                                    <p><a href="tel:+254712770999">General Enquiries</a></p> 
                                </div>
                            </div>
                        </div>
                        {/* 📧 Email Address Localized */}
                        <div className="col-xl-4 col-md-6 md-mb-30">
                            <div className="contact__three-info">
                                <div className="contact__three-info-icon">
                                    <img src="/assets/img/icon/email.png" alt="icon" />
                                </div>
                                <div className="contact__three-info-content">
                                    <h4>Quick Email</h4>
                                    <p><a href="mailto:info@fiascoconsultancy.co.ke">info@fiascoconsultancy.co.ke</a></p>
                                    <p><a href="mailto:info@fiascoconsultancy.co.ke">Send a Message</a></p>
                                </div>
                            </div>
                        </div>
                        {/* 📍 Office Location Localized */}
                        <div className="col-xl-4 col-md-6">
                            <div className="contact__three-info">
                                <div className="contact__three-info-icon">
                                    <img src="/assets/img/icon/locations.png" alt="icon" />
                                </div>
                                <div className="contact__three-info-content">
                                    <h4>Office Location</h4>
                                    <p>Standard Building,<br/>Standard Street, Nairobi, Kenya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contact Form & Map Section */}
            <div className="contact__three section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 lg-mb-30">
                            <div className="contact__three-left mr-40 xl-mr-0">
                                <div className="contact__three-left-map">
                                    {/* Map Iframe Localized to Standard Street, Nairobi */}
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
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact__three-right">
                                <div className="contact__three-right-title">
                                    <span className="subtitle-one">Request a Call Back</span>
                                    <h2 className="mb-30">Let's Discuss Your Project.</h2>
                                </div>
                                <div className="contact__three-right-form">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </>
    );
};

export default ContactThree;