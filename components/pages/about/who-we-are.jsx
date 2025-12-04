import React from 'react';
import bgImage from "../../../public/assets/img/about/about-solution.jpg";
import image from "../../../public/assets/img/about/about-9.jpg";
import shape from "../../../public/assets/img/shape/about-solution.png";
import Count from '../common/count';
import Link from 'next/link';

const WhoWeAre = () => {
    return (
        <>
            <div className="company__two section-padding pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7 lg-mb-30">
                            <div className="company__two-left">
                                <div className="company__two-left-title">
                                    <span className="subtitle-one">Who We Are</span>
                                    <h2>Delivering Actionable Strategy for Business Transformation</h2> {/* Changed Title */}
                                    <p>Fiasco Consultancy Limited is committed to turning complex business challenges into strategic advantages. We provide radical transparency and high-impact solutions, ensuring our clients not only meet but exceed their ambitious growth objectives.</p> {/* Changed Description */}
                                </div>
                                <div className="company__two-left-skill">
                                    <div className="company__two-left-skill-item">
                                        <h2><Count number={50} />M+</h2> {/* Changed Number/Suffix */}
                                        <h6>Client Value Generated (USD)</h6> {/* Changed Description */}
                                    </div>
                                    <div className="company__two-left-skill-item">
                                        <h2><Count number={150} />+</h2> {/* Changed Number/Suffix */}
                                        <h6>Successful Engagements Worldwide</h6> {/* Changed Description */}
                                    </div>
                                </div>
                                <Link className="btn-two" href="/about">Discover Our Methodology<i className="far fa-chevron-double-right"></i></Link> {/* Changed Link Text */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="company__two-right dark__image t-right">
                                <img className="img__full" src={image.src} alt="image of professionals collaborating" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
            {/* The Solution Banner Section */}
            <div className="about__solution" style={{backgroundImage: `url(${bgImage.src})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8">
                            <div className="about__solution-left xl-t-center">
                                <h2>Ready to implement solutions & achieve transformative goals?</h2> {/* Enhanced Title */}
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="about__solution-right t-right xl-t-center"> 
                                <Link className="btn-one" href="/contact">Schedule a Consultation<i className="far fa-chevron-double-right"></i></Link> {/* Changed Link Text */}
                                <img className="about__solution-right-shape left-right-animate" src={shape.src} alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default WhoWeAre;