import React from 'react';
// Assuming these images reflect professional milestones relevant to the theme
import image1 from "../../../public/assets/img/about/history-1.jpg";
import image2 from "../../../public/assets/img/about/history-2.jpg";
import image3 from "../../../public/assets/img/about/history-3.jpg";
import image4 from "../../../public/assets/img/about/history-4.jpg";
import image5 from "../../../public/assets/img/about/history-5.jpg";

const History = () => {
    return (
        <div className="company__history section-padding">
            <div className="container">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="company__history-title t-center">
                            <span className="subtitle-one">Our Journey</span>
                            <h2>Strategic Milestones of Fiasco Consultancy</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="company__history-area dark__image">
                            
                            {/* Milestone 1: Founding */}
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <img src={image1.src} alt="image of founding team" />
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2015</span>
                                            <h5>The Inception of Fiasco</h5> {/* Changed Title */}
                                        </div>
                                        <p>Fiasco Consultancy was founded to bridge the gap between abstract strategy and executable, high-impact business solutions for scaling enterprises in the tech and finance sectors.</p> {/* Changed Description */}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Milestone 2: International Presence */}
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            <span>2019</span>
                                            <h5>First Global Project Office</h5> {/* Changed Title */}
                                        </div>
                                        <p>Following a major client acquisition in Europe, we established our first international project office, formalizing our cross-border risk management and compliance practice.</p> {/* Changed Description */}
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        <img src={image2.src} alt="image of new office" />
                                    </div>
                                </div>
                            </div>

                            {/* Milestone 3: Technological Advancement */}
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <div className="company__history-area-item-left-image">
                                        <img src={image3.src} alt="image of technology or data" />
                                    </div>
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2021</span>
                                            <h5>Launch of the Foresight Engine</h5> {/* Changed Title */}
                                        </div>
                                        <p>We released our proprietary, AI-driven 'Foresight Engine' tool, enabling clients to integrate deep market analytics directly into their capital allocation and operational strategy.</p> {/* Changed Description */}
                                    </div>
                                </div>
                            </div>

                            {/* Milestone 4: Industry Recognition */}
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            <span>2023</span>
                                            <h5>Achieving Industry-Leading Status</h5> {/* Changed Title */}
                                        </div>
                                        <p>Recognized by industry bodies for our innovative approach to Digital Transformation, marking a milestone in our goal to redefine business consultancy practices.</p> {/* Changed Description */}
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        <img src={image4.src} alt="image of team collaboration" />
                                    </div>
                                </div>
                            </div>

                            {/* Milestone 5: Future Vision */}
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <div className="company__history-area-item-left-image">
                                        <img src={image5.src} alt="image of future business concept" />
                                    </div>
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2025</span>
                                            <h5>Focus on Sustainable Growth</h5> {/* Changed Title */}
                                        </div>
                                        <p>Our current focus centers on guiding clients toward sustainable and resilient business models, emphasizing ESG integration and long-term value creation in volatile markets.</p> {/* Changed Description */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;