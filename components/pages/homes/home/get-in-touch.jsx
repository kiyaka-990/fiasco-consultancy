import Link from "next/link";
import bgImage from "../../../../public/assets/img/pages/getInTouch.jpg";

const GetInTouch = () => {
    const touchContent = {
        // Localized promotional text
        subtitle: 'Start Your Project',
        title: 'Request a Free Consultation',
        // Updated to reflect local market focus, assuming a strong presence in Kenya/East Africa
        title2: 'A Trusted Partner for Leading Businesses in East Africa',
        des: 'Partner with Fiasco Consultancy for strategically tailored solutions. We are committed to empowering your enterprise with expert advice, driving innovation, and delivering measurable results.',
    }
    return (
        <>
            <div className="getIn__touch section-padding" style={{backgroundImage: `url(${bgImage.src})`}}>
                <img className="getIn__touch-shape left-right-animate2" src="assets/img/shape/getInTouch.png" alt="shape" />
                <div className="container">
                    <div className="row">
                        {/* Consultation Form Section */}
                        <div className="col-xl-6 col-lg-5 lg-mb-30">
                            <div className="getIn__touch-left">
                                <div className="getIn__touch-left-title">
                                    <span className="subtitle-one">{touchContent.subtitle}</span>
                                    <h2>{touchContent.title}</h2>                           
                                </div>
                                <div className="getIn__touch-left-form">
                                    <form action="#">   
                                        <div className="mt-25">
                                            <input type="text" name="name" placeholder="Full Name" required="required" />
                                        </div>
                                        <div className="mt-25">
                                            <input type="email" name="email" placeholder="Email Address" required="required" />
                                        </div>
                                        <div className="mt-25">
                                            <input type="text" name="subject" placeholder="Consulting Service Required" required="required" />
                                        </div>
                                        <div className="mt-25">
                                            <button className="btn-one" type="submit">Book Free Consultation</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Promotional Content Section */}
                        <div className="col-xl-6 col-lg-7">
                            <div className="getIn__touch-right">
                                <div className="getIn__touch-right-title">
                                    <h2>{touchContent.title2}</h2>
                                    <p>{touchContent.des}</p>
                                </div>
                                <div className="getIn__touch-right-bottom">
                                    <div className="getIn__touch-right-bottom-text">
                                        <h4>Commitment to Client Success in East Africa</h4>
                                    </div>
                                    <div className="getIn__touch-right-bottom-shape">
                                        <img src="assets/img/icon/getInTouch.png" alt="shape" />
                                    </div>
                                    <div className="getIn__touch-right-bottom-image">
                                        <ul>
                                            {/* Retaining avatar images as placeholders */}
                                            <li><img src="assets/img/avatar/avatar-1.jpg" alt="client avatar" /></li>
                                            <li><img src="assets/img/avatar/avatar-2.jpg" alt="client avatar" /></li>
                                            <li><img src="assets/img/avatar/avatar-3.jpg" alt="client avatar" /></li>
                                            <li><img src="assets/img/avatar/avatar-4.jpg" alt="client avatar" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Help Area Section (Below the main banner) */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-5"></div>
                    <div className="col-xl-7">
                        <div className="help__area">
                            {/* 📞 Phone Number Localized */}
                            <div className="help__area-item">
                                <div className="help__area-item-icon icon-animation">
                                    <i className="fal fa-phone-alt"></i>
                                </div>
                                <div className="help__area-item-info">
                                    <span className="text-three">Get Direct Help</span>
                                    <h5><Link href="tel:+254712770999">+254 712 770 999</Link></h5>
                                </div>
                            </div>
                            {/* 📧 Email Address Localized */}
                            <div className="help__area-item">
                                <div className="help__area-item-icon">
                                    <i className="fal fa-envelope-open-text"></i>
                                </div>
                                <div className="help__area-item-info">
                                    <span className="text-three">Email Our Team</span>
                                    <h5><Link href="mailto:info@fiascoconsultancy.co.ke">info@fiascoconsultancy.co.ke</Link></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>      
    );
};

export default GetInTouch;