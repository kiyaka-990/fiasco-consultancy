import React from 'react';

const Work = () => {
    return (
        <div className="work__area section-padding pb-0">
            <div className="container">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="work__area-title t-center">
                            {/* Updated Subtitle */}
                            <span className="subtitle-two">The Fiasco Methodology</span>
                            {/* Updated Main Title */}
                            <h2>Our Four-Stage Recovery Process</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* STEP 01: Crisis Intervention */}
                    <div className="col-xl-3 col-sm-6 xl-mb-30">
                        <div className="work__area-item">
                            <span>01</span>
                            <h6>Rapid Crisis Intervention</h6>
                            <p>Immediate assessment and stabilization of the situation to halt damage and secure critical assets.</p>
                            <img className="work__area-item-arrow sm-display-n dark-n" src="assets/img/icon/arrow-1.png" alt="shape" />
                            <img className="work__area-item-arrow sm-display-n light-n" src="assets/img/icon/arrow-1-dark.png" alt="shape" />
                        </div>
                    </div>
                    
                    {/* STEP 02: Root Cause Diagnosis */}
                    <div className="col-xl-3 col-sm-6 sm-mb-30">
                        <div className="work__area-item">
                            <span>02</span>
                            <h6>Root Cause Fiasco Diagnosis</h6>
                            <p>Deep dive investigation and forensic audit to uncover the precise origin of the problem and its full impact.</p>
                            <img className="work__area-item-arrow xl-display-n dark-n" src="assets/img/icon/arrow-2.png" alt="shape" />
                            <img className="work__area-item-arrow xl-display-n light-n" src="assets/img/icon/arrow-2-dark.png" alt="shape" />
                        </div>
                    </div>
                    
                    {/* STEP 03: Strategic Resolution */}
                    <div className="col-xl-3 col-sm-6 sm-mb-30">
                        <div className="work__area-item">
                            <span>03</span>
                            <h6>Strategic Resolution & Action</h6>
                            <p>Development and aggressive execution of a tailored recovery plan to resolve the crisis and mitigate future risk.</p>
                            <img className="work__area-item-arrow xl-display-n dark-n" src="assets/img/icon/arrow-1.png" alt="shape" />
                            <img className="work__area-item-arrow xl-display-n light-n" src="assets/img/icon/arrow-1-dark.png" alt="shape" />
                            <img className="work__area-item-arrow display-n xl-display-b sm-display-n dark-n" src="assets/img/icon/arrow-2.png" alt="shape" />
                            <img className="work__area-item-arrow display-n xl-display-b sm-display-n light-n" src="assets/img/icon/arrow-2-dark.png" alt="shape" />
                        </div>
                    </div>
                    
                    {/* STEP 04: Future Stabilization */}
                    <div className="col-xl-3 col-sm-6">
                        <div className="work__area-item">
                            <span>04</span>
                            <h6>Future Stabilization & Resilience</h6>
                            <p>Implementing controls and training to ensure long-term stability .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;