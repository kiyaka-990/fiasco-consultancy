import React from 'react';

const Solution = () => {
    return (
        <div className="solutions__two section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 lg-mb-30">
                        <div className="solutions__two-title">
                            {/* Updated Subtitle */}
                            <span className="subtitle-one">Fiasco Solutions</span>
                            {/* Updated Main Title */}
                            <h2>Restoring Order From Chaos</h2>
                            {/* Updated Description */}
                            <p>We provide the immediate, decisive action required to stabilize crises and implement long-term strategies for organizational resilience.</p>
                        </div>
                    </div>
                    
                    {/* Item 1: Rapid Intervention */}
                    <div className="col-xl-3 col-md-6 xl-mb-30">
                        <div className="solutions__two-item">
                            <div className="solutions__two-item-icon">
                                {/* Assuming image path is correct */}
                                <img src="assets/img/icon/solutions-1.png" alt="Intervention icon" />
                            </div>
                            {/* Updated Title */}
                            <h4>Rapid Crisis Intervention</h4>
                            {/* Updated Description */}
                            <p>Immediate on-site teams deployed to halt damage and stabilize the most critical situations in businesses.</p>                        
                        </div>
                    </div>
                    
                    {/* Item 2: Forensic Investigation */}
                    <div className="col-xl-3 col-md-6 md-mb-30">
                        <div className="solutions__two-item">
                            <div className="solutions__two-item-icon">
                                {/* Assuming image path is correct */}
                                <img src="assets/img/icon/solutions-2.png" alt="Investigation icon" />
                            </div>
                            {/* Updated Title */}
                            <h4>Forensic Audit & Diagnosis</h4>
                            {/* Updated Description */}
                            <p>Deep investigation to uncover the root causes of failure, fraud, or systemic operational weaknesses.</p>                        
                        </div>
                    </div>
                    
                    {/* Item 3: Project Turnaround */}
                    <div className="col-xl-3 col-md-6">
                        <div className="solutions__two-item">
                            <div className="solutions__two-item-icon">
                                {/* Assuming image path is correct */}
                                <img src="assets/img/icon/solutions-3.png" alt="Turnaround icon" />
                            </div>
                            {/* Updated Title */}
                            <h4>Project Turnaround Strategy</h4>
                            {/* Updated Description */}
                            <p>Strategic planning and execution to rescue stalled, failing, and high-risk business initiatives.</p>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;