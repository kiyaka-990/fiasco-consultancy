"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contacts" />
            <BreadCrumb title="Contact Us" innerTitle="Contact" />
            <div className="contact__page section-padding pb-0">
                <div className="container">
                    <div className="row">
                        {/* Contact Form Section (Left Column on Large Screens) */}
                        <div className="col-xl-5 col-lg-5 order-last order-lg-first">
                            <div className="contact__page-form">
                                <h3 className="mb-30">Send Us a Message</h3>
                                <form action="#"> 
                                    <div className="row">
                                        <div className="col-sm-12 mb-20"> 
                                            <div className="contact__page-form-item contact-item">
                                                <span className="fal fa-user"></span>
                                                <input type="text" name="name" placeholder="Full Name" required="required" />
                                            </div> 
                                        </div>
                                        <div className="col-sm-12 mb-20">
                                            <div className="contact__page-form-item contact-item">
                                                <span className="far fa-envelope-open"></span>
                                                <input type="email" name="email" placeholder="Email Address" required="required" /> 
                                            </div> 
                                        </div>
                                        <div className="col-sm-12 mb-30"> 
                                            <div className="contact__page-form-item contact-item">
                                                <span className="far fa-comments"></span>
                                                <textarea name="message" placeholder="Type your comments...."></textarea>
                                            </div> 
                                        </div>
                                        <div className="col-lg-12"> 
                                            <div className="contact__page-form-item">
                                                <button className="btn-one" type="submit">Submit Now<i className="far fa-chevron-double-right"></i></button>
                                            </div> 
                                        </div>
                                    </div> 
                                </form> 
                            </div>
                        </div>
                        
                        {/* Informational Details Section (Right Column on Large Screens) */}
                        <div className="col-xl-7 col-lg-7 lg-mb-30">
                            <div className="contact__page-info">
                                <h2 className="mb-60 lg-mb-30">Visit Our Nairobi Office</h2>
                                
                                {/* 📍 Office Address Localized */}
                                <div className="contact__page-info-item">
                                    <h6>Office Address<span>:</span></h6>
                                    <span>Standard Building, Standard Street, Nairobi, Kenya</span>
                                </div>
                                
                                {/* 📧 Email Address Localized */}
                                <div className="contact__page-info-item">
                                    <h6>Email Address <span>:</span></h6>
                                    <span>
                                        <a href="mailto:info@fiascoconsultancy.co.ke">info@fiascoconsultancy.co.ke</a>
                                        {/* Removed the second placeholder email */}
                                    </span>
                                </div>
                                
                                {/* 📞 Phone Number Localized */}
                                <div className="contact__page-info-item">
                                    <h6>Phone Number<span>:</span></h6>
                                    <span>
                                        <a href="tel:+254712770999">+254 712 770 999</a>
                                        {/* Removed the second placeholder phone number */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Map Iframe Localized to Standard Street, Nairobi */}
            <div className="contact__page-map">
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

export default ContactUs;