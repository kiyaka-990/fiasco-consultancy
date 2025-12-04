import React from "react"; // Explicitly import React since it's a component file

const ServiceCta = () => {
    // Fiasco Consultancy (Nairobi, Kenya) specific contact details
    const phoneNumber = "+254712770999"; // Using a mock Kenyan mobile format
    const phoneLink = "tel:+254712770999"; // Link format
    const emailAddress = "info@fiascoconsultancy.co.ke"; // Professional email
    const emailLink = `mailto:${emailAddress}`;
    
    // Placeholder URL for the background image since relative imports fail in this environment
    const ctaBgUrl = "https://placehold.co/1200x400/1f2937/f9fafb?text=Fiasco+Consultancy+Contact+Banner";

    return (
        <div className="cta__two" style={{backgroundImage: `url(${ctaBgUrl})`}}>
            {/* Using a placeholder for the decorative shape */}
            <img className="cta__two-shape left-right-animate2" src="https://placehold.co/50x50/1e40af/ffffff?text=Shape" alt="Decorative Shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-5 lg-mb-30">
                        <div className="cta__two-title">
                            {/* Localized Subtitle */}
                            <span className="subtitle-one">Start the Conversation</span>
                            {/* Localized Title */}
                            <h2>Ready to Scale Your East African Business?</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="cta__two-info">
                            {/* Phone Contact (Localized and fixed to use <a> tag) */}
                            <div className="cta__two-info-item">
                                <div className="cta__two-info-item-icon">
                                    <i className="fal fa-phone-alt icon-animation"></i>
                                </div>
                                <div>
                                    <span>Call Our Nairobi Office</span>
                                    <h6><a href={phoneLink}>{phoneNumber}</a></h6>
                                </div>
                            </div>
                            {/* Email Contact (Localized and fixed to use <a> tag) */}
                            <div className="cta__two-info-item">
                                <div className="cta__two-info-item-icon">
                                    <i className="fal fa-envelope"></i>
                                </div>
                                <div>
                                    <span>General Inquiries</span>
                                    <h6><a href={emailLink}>{emailAddress}</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCta;