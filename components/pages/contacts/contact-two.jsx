"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import Form from "./form";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ContactTwo = () => {
    return (
        <>
            <SEO pageTitle="Contacts" />
            <BreadCrumb title="Contact Us" innerTitle="Reach Out to Fiasco" />
            
            {/* Contact Information Boxes */}
            <div className="contact__four section-padding">
                <div className="container">
                    <div className="row">
                        {/* 📍 Office Location Localized */}
                        <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                            <div className="contact__four-info">
                                <div className="contact__four-info-icon">
                                    <img src="/assets/img/icon/locationss.png" alt="icon" />
                                </div>
                                <h4>Office Location</h4>
                                <span>You are most welcome to visit our office in Nairobi.</span>
                                <p>Standard Building, Standard Street,<br/> Nairobi, Kenya</p>
                            </div>
                        </div>
                        
                        {/* 📞 Phone Number Localized */}
                        <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                            <div className="contact__four-info">
                                <div className="contact__four-info-icon">
                                    <img src="/assets/img/icon/phone-call.png" alt="icon" />
                                </div>
                                <h4>Call Us</h4>
                                <span>Keeping you always better connected.</span>
                                <p><a href="tel:+254712770999">+254 712 770 999</a></p>
                                {/* Keeping the second line for structure, but using the same primary number */}
                                <p><a href="tel:+254712770999">Direct Line</a></p>
                            </div>
                        </div>
                        
                        {/* 📧 Email Address Localized */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="contact__four-info">
                                <div className="contact__four-info-icon">
                                    <img src="/assets/img/icon/emails.png" alt="icon" />
                                </div>
                                <h4>Quick Email</h4>
                                <span>Drop us a mail we will answer you asap.</span>
                                <p><a href="mailto:info@fiascoconsultancy.co.ke">info@fiascoconsultancy.co.ke</a></p>
                                {/* Keeping the second line for structure, but using the same primary email */}
                                <p><a href="mailto:info@fiascoconsultancy.co.ke">Send Inquiry</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact__four">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact__four-form t-center">
                                <div className="contact__four-form-title"> 
                                    <span className="subtitle-one">Get in Touch</span>
                                    <h2>We are always Ready for your solution</h2>
                                </div>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Map Iframe Localized to Standard Street, Nairobi */}
            <div className="contact__two-map">
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

export default ContactTwo;