import React from 'react';
import Link from 'next/link';
import servicesData from '@/components/data/services-data';

const ServicesSingleMain = ({serviceDetails}) => {
    const servicesD = servicesData.slice(0, 5);
    return (
        <>
            <div className="services__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 order-last order-lg-first">
                            <div className="all__sidebar">
                                <div className="all__sidebar-item">
                                    <h4>Our Solutions</h4>
                                    <div className="all__sidebar-item-solution">
                                        <ul>
                                            {servicesD.map((data, id) => (
                                                <li key={id}><Link href={`/services/${data.id}`}><i className="far fa-chevron-double-right"></i>{data.title}<span>({data.number})</span></Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="all__sidebar-item">
                                    <h4>Company Profile</h4>
                                    <div className="all__sidebar-item-download">
                                        <ul>
                                            <li><Link href="/assets/files/fiasco-profile.pdf"><div><i className="fa-light fa-file-word"></i>Download File</div><span className="fal fa-arrow-to-bottom"></span></Link></li>
                                            <li><Link href="/assets/files/fiasco-profile.pdf"><div><i className="fa-light fa-file-pdf"></i>Download Pdf</div><span className="fal fa-arrow-to-bottom"></span></Link></li>
                                        </ul>                            
                                    </div>
                                </div>
                                <div className="all__sidebar-help">
                                    <div className="all__sidebar-help-image">
                                        <img className="img__full" src="../assets/img/pages/help.jpg" alt="image" />
                                        <div className="all__sidebar-help-image-content">
                                            <img src="../assets/img/favicon-1.png" alt="icon" />
                                            {/* Updated Sidebar CTA */}
                                            <h4>Immediate Assistance for Critical Fiascos</h4>
                                            <Link className="btn-one" href="/contact">Need Help<i className="far fa-chevron-double-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 lg-mb-50">
                            <div className="services__details-left">
                                <div className="services__details-left-image dark__image">
                                    <img src={serviceDetails?.image.src} alt="image" />
                                </div>
                                <div className="services__details-left-content">
                                    {/* Updated H2/Title */}
                                    <h2>{serviceDetails?.title}</h2>
                                    {/* Updated Paragraph 1 */}
                                    <p className="mb-25">Fiasco Consultancy specializes in rapid deployment to stabilize high-stakes situations. We cut through complexity, identify the core failure points, and implement decisive, measurable solutions where others have failed. Our process is built on immediate intervention followed by deep, forensic diagnosis.</p>
                                    {/* Updated Paragraph 2 */}
                                    <p className="mb-25">When time is critical and reputation is on the line, generic solutions are insufficient. We provide tailored recovery strategies that account for legal, operational, and financial risks simultaneously. Our goal is not just recovery, but the creation of organizational resilience.</p>                        
                                    <div className="services__details-left-content-list">
                                        {/* Updated List Item 1 */}
                                        <span><i className="far fa-check"></i>It's essential to work with specialists who have a proven history of crisis turnaround and failure resolution.</span>
                                        {/* Updated List Item 2 */}
                                        <span><i className="far fa-check"></i>We clarify costs based on the severity and complexity of the fiasco, ensuring transparent retainer agreements.</span>
                                        {/* Updated List Item 3 */}
                                        <span><i className="far fa-check"></i>Immediate interviews with stakeholders, management, and key personnel are critical for rapid diagnosis.</span>
                                    </div>
                                    {/* Updated H3 */}
                                    <h3 className="mb-30">The Fiasco: Recognizing and Addressing Core Failure Points</h3>
                                    {/* Updated Paragraph 3 */}
                                    <p className="mb-25">Our teams focus on identifying the root causes—whether they stem from systemic mismanagement, technological collapse, or unmitigated compliance failures. We don't just treat symptoms; we eliminate the source of the crisis.</p>
                                    <div className="services__details-left-content-list bold">
                                        <div className="row">
                                            <div className="col-sm-6 sm-mb-15">
                                                {/* Updated List Items */}
                                                <span><i className="far fa-check"></i>Forensic Audit and Investigation.</span>
                                                <span><i className="far fa-check"></i>Review of all legal and compliance documentation.</span>
                                                <span><i className="far fa-check"></i>Financial Damage Control.</span>
                                            </div>
                                            <div className="col-sm-6">
                                                {/* Updated List Items */}
                                                <span><i className="far fa-check"></i>Reputation Crisis Management.</span>
                                                <span><i className="far fa-check"></i>Operational Failure Turnaround.</span>
                                                <span><i className="far fa-check"></i>Long-Term Resilience Building.</span>
                                            </div>
                                        </div>
                                    </div>  
                                    {/* Updated H3 */}
                                    <h3>Frequently Encountered Crisis Scenarios</h3>
                                    <div className="faq__area mt-35" id="accordionExample">
                                        <div className="faq__area-item">
                                            {/* Updated FAQ Title 1 */}
                                            <h6 className="icon page collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">How do you manage crisis communication effectively?</h6>
                                            <div id="collapseOne" className="faq__area-item-body collapse" data-bs-parent="#accordionExample">
                                                {/* Updated FAQ Answer 1 */}
                                                <p>We establish a single source of truth, manage all media inquiries, and craft messages that stabilize public and stakeholder perception, ensuring full legal compliance.</p>
                                            </div>
                                        </div>
                                        <div className="faq__area-item">
                                            {/* Updated FAQ Title 2 */}
                                            <h6 className="icon page" data-bs-toggle="collapse" data-bs-target="#collapseTwo">What is your protocol for legal and regulatory exposure?</h6>
                                            <div id="collapseTwo" className="faq__area-item-body collapse show" data-bs-parent="#accordionExample">
                                                {/* Updated FAQ Answer 2 */}
                                                <p>Our team works directly with your legal counsel to gather evidence, prepare for regulatory reviews, and develop defense strategies to mitigate penalties and liability risks.</p>
                                            </div>
                                        </div>
                                        <div className="faq__area-item">
                                            {/* Updated FAQ Title 3 */}
                                            <h6 className="icon page collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">How quickly can Fiasco Consultancy mobilize a team?</h6>
                                            <div id="collapseThree" className="faq__area-item-body collapse" data-bs-parent="#accordionExample">
                                                {/* Updated FAQ Answer 3 */}
                                                <p>For critical situations, we can mobilize a specialized intervention team within hours. Our structure is designed for speed and immediate, decisive action.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default ServicesSingleMain;