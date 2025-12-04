import React from 'react';

const RequestQuoteMain = () => {
    return (
        <div className="request__quote section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        {/* The form structure remains, but action="#" should be updated for a real implementation */}
                        <form action="#">
                            <div className="row">
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Name<span> *</span></label>
                                        {/* Name inputs aligned */}
                                        <input type="text" name="firstName" placeholder="First" required />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-30 md-mt-0 lg-mb-30">
                                    <div className="request__quote-item">
                                        <label>Last Name<span> *</span></label>
                                        <input type="text" name="lastName" placeholder="Last" required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Email Address<span> *</span></label>
                                        <input type="email" name="email" placeholder="example@company.com" required />
                                    </div>
                                </div>
                                <div className="col-md-6 lg-mb-30">
                                    <div className="request__quote-item">
                                        <label>Phone Number<span> *</span></label>
                                        <input type="tel" name="phone" placeholder="+254 7XX XXX XXX" required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Company/Organization<span> *</span></label>
                                        <input type="text" name="company" placeholder="Fiasco Consulting" required />
                                    </div>
                                </div>
                                <div className="col-md-6 lg-mb-30">
                                    <div className="request__quote-item">
                                        <label>Website (If applicable)</label>
                                        {/* Changed from * required */}
                                        <input type="url" name="website" placeholder="https://" />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-30">
                                    <p className="mb-10">Which core services are you interested in?<span> *</span></p>
                                    <div className="row">
                                        {/* Localized Services for Consulting */}
                                        <div className="col-md-4">
                                            <div className="request__quote-services">
                                                <label><input className="mr-10" type="checkbox" name="service_strategy" />Corporate Strategy & Planning</label>
                                                <label><input className="mr-10" type="checkbox" name="service_market" />Market Entry & Feasibility</label>
                                                <label><input className="mr-10" type="checkbox" name="service_finance" />Financial Modeling & Analysis</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="request__quote-services">
                                                <label><input className="mr-10" type="checkbox" name="service_operations" />Operational Efficiency (LEAN)</label>
                                                <label><input className="mr-10" type="checkbox" name="service_supply" />Supply Chain Optimization</label>
                                                <label><input className="mr-10" type="checkbox" name="service_tech" />Technology & Digital Transformation</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="request__quote-services">
                                                <label><input className="mr-10" type="checkbox" name="service_talent" />HR & Talent Management</label>
                                                <label><input className="mr-10" type="checkbox" name="service_change" />Change Management & Culture</label>
                                                <label><input className="mr-10" type="checkbox" name="service_project" />Interim Management / Project Lead</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-30">
                                    <div className="request__quote-item">
                                        <label>Project Scope or Message<span> *</span></label>
                                        <textarea name="message" rows="6" placeholder="Briefly describe your challenge and what success looks like for this project."></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p className="mb-10">Join our email list?</p>
                                    {/* Added name to radio buttons for correct group selection */}
                                    <label><input className="mr-10" type="radio" name="mailingList" value="yes" />Yes, Please! I want Fiasco insights.</label><br />
                                    <label><input className="mr-10" type="radio" name="mailingList" value="no" defaultChecked />Not yet, thanks</label>
                                    <p className="description">Join our mailing list to get our latest insights and thought leadership. We respect your privacy and will never share your information.</p>
                                    <button className="btn-one mt-30" type="submit">Submit Request <i className="far fa-chevron-double-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestQuoteMain;