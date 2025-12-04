import Link from 'next/link';
import React from 'react';

const PricingPlansMain = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                {/* --- 1. Starter Strategy Audit (KSh 49,900) --- */}
                <div className="col-xl-4 col-lg-6 col-md-6 xl-mb-30">
                    <div className="pricing__area-item">
                        <div className="pricing__area-item-price">
                            {/* Localized Price and Currency (KSh) */}
                            <h4>KSh<span>49</span>.9k</h4>
                            <span className="text-two">Per Month Retainer</span>
                        </div>
                        <div className="pricing__area-item-title">
                            <span className="text-two">Fundamental Analysis</span>
                            <h3>Strategy Audit</h3>
                        </div>
                        <div className="pricing__area-item-list">
                            <ul>
                                {/* Localized Features */}
                                <li><i className="fal fa-check"></i>Dedicated Strategic Advisor</li>
                                <li><i className="fal fa-check"></i>Monthly Progress Review Call</li>
                                <li><i className="fal fa-check"></i>Core Market Assessment</li>
                                <li><i className="fal fa-times"></i>Full Operations Diagnostic</li>
                                <li><i className="fal fa-times"></i>On-Site Consultant Allocation</li>
                            </ul>
                        </div>
                        {/* Localized CTA */}
                        <Link className="btn-eight" href="/request-quote">Request Proposal</Link>
                    </div>
                </div>

                {/* --- 2. Growth Accelerator (KSh 99,900) --- */}
                <div className="col-xl-4 col-lg-6 col-md-6 md-mb-30">
                    <div className="pricing__area-item">
                        <div className="pricing__area-item-price">
                            {/* Localized Price and Currency (KSh) */}
                            <h4>KSh<span>99</span>.9k</h4>
                            <span className="text-two">Per Month Retainer</span>
                        </div>
                        <div className="pricing__area-item-title">
                            <span className="text-two">Scalable Solutions</span>
                            <h3>Growth Accelerator</h3>
                        </div>
                        <div className="pricing__area-item-list">
                            <ul>
                                {/* Localized Features */}
                                <li><i className="fal fa-check"></i>Dedicated Strategic Advisor</li>
                                <li><i className="fal fa-check"></i>Priority Email & Phone Support</li>
                                <li><i className="fal fa-check"></i>Tailored Operational Plan</li>
                                <li><i className="fal fa-check"></i>Full Operations Diagnostic</li>
                                <li><i className="fal fa-times"></i>On-Site Consultant Allocation</li>
                            </ul>
                        </div>
                        {/* Localized CTA */}
                        <Link className="btn-eight" href="/request-quote">Request Proposal</Link>
                    </div>
                </div>

                {/* --- 3. Full Scale Partnership (KSh 179,900) --- */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pricing__area-item">
                        <div className="pricing__area-item-price">
                            {/* Localized Price and Currency (KSh) */}
                            <h4>KSh<span>179</span>.9k</h4>
                            <span className="text-two">Per Month Retainer</span>
                        </div>
                        <div className="pricing__area-item-title">
                            <span className="text-two">Comprehensive Support</span>
                            <h3>Full Scale Partnership</h3>
                        </div>
                        <div className="pricing__area-item-list">
                            <ul>
                                {/* Localized Features */}
                                <li><i className="fal fa-check"></i>Dedicated Strategic Advisor</li>
                                <li><i className="fal fa-check"></i>Priority Email & Phone Support</li>
                                <li><i className="fal fa-check"></i>Tailored Operational Plan</li>
                                <li><i className="fal fa-check"></i>Full Operations Diagnostic</li>
                                <li><i className="fal fa-check"></i>On-Site Consultant Allocation (1 day/week)</li>
                            </ul>
                        </div>
                        {/* Localized CTA */}
                        <Link className="btn-eight" href="/request-quote">Request Proposal</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default PricingPlansMain;