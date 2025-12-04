import React from 'react';

const PortfolioDetailsMain = ({singleData}) => {
    return (
        <div className="portfolio__details dark__image section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="portfolio__details-image dark_image">
                            <img src={singleData.image.src} alt="portfolio" />
                            <div className="portfolio__details-meta">
                                {/* === Localized Meta Data Labels & Content === */}
                                <div className="portfolio__details-meta-item">
                                    <span>Project Date :</span>
                                    <h6>September 2024</h6> {/* Updated Date Format */}
                                </div>
                                <div className="portfolio__details-meta-item">
                                    <span>Service Provided :</span> {/* Changed 'Category' to 'Service Provided' */}
                                    <h6>{singleData.title}</h6> 
                                </div>
                                <div className="portfolio__details-meta-item">
                                    <span>Client Name :</span> {/* Changed 'Customer' to 'Client Name' */}
                                    <h6>Maisha Foods Ltd.</h6> {/* Example Client */}
                                </div>
                                <div className="portfolio__details-meta-item">
                                    <span>Region :</span> {/* Changed 'Locations' to 'Region' */}
                                    <h6>Nairobi, Kenya (East Africa)</h6> {/* Localized Region */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* === Localized Section Headings and Content Focus === */}
                <div className="row mt-40">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>Overview & Context</h3> {/* Localized Heading */}
                    </div>
                    <div className="col-lg-8">
                        <p>This case study details our engagement with **Maisha Foods Ltd.**, a rapidly growing regional food distributor. The primary goal was to optimize their supply chain and establish a robust digital transformation roadmap to handle projected 30% annual growth over the next five years in the East African market.</p>
                        <p>Our consulting focused on analyzing current operational bottlenecks, identifying key market risks in regulatory compliance, and integrating scalable technology solutions to improve inventory management and cross-border logistics efficiency.</p>
                    </div>
                </div>
                <div className="row mt-30 dark_image">
                    {/* Image placeholders remain dynamic */}
                    <div className="col-sm-4 sm-mb-25">
                        <img className="img__full" src="../assets/img/portfolio/project-1.jpg" alt="portfolio" />
                    </div>
                    <div className="col-sm-4 sm-mb-25">
                        <img className="img__full" src="../assets/img/portfolio/project-2.jpg" alt="portfolio" />
                    </div>
                    <div className="col-sm-4">
                        <img className="img__full" src="../assets/img/portfolio/project-3.jpg" alt="portfolio" />
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>Key Challenges</h3> {/* Localized Heading */}
                    </div>
                    <div className="col-lg-8">
                        <p>The main challenges included a fragmented, paper-based logistics system that led to high spoilage rates and delays. Furthermore, the company lacked a clear strategy for talent acquisition and retention in competitive regional hubs like Nairobi and Kampala.</p>
                        <p>Specific pain points involved navigating varied tariffs and customs procedures across borders (Kenya, Uganda, Tanzania), which impacted pricing strategy and competitive advantage.</p>
                    </div>
                </div>
                <div className="row mt-20">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>Fiasco Consultancy Solution</h3> {/* Localized Heading */}
                    </div>
                    <div className="col-lg-8">
                        <p>We implemented a two-phased solution: 1) **Operational Restructuring**: Introducing an integrated ERP system for real-time tracking and developing standardized customs compliance protocols. 2) **Strategic HR**: Designing a localized remuneration and benefits structure to attract and retain specialized logistics talent.</p>
                        <p>The implementation phase included on-site training for key personnel and the creation of a 'Regional Expansion Playbook' for future growth into new territories.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsMain;