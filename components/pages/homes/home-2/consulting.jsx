import Link from 'next/link';

const Consulting = () => {
    return (
        <div className="consulting__area section-padding">
            {/* Keeping image paths general, assuming 'assets/img' is correct */}
            <img className="consulting__area-shape dark-n" src="assets/img/shape/consulting.png" alt="shape" />
            <img className="consulting__area-shape light-n" src="assets/img/shape/consulting-dark.png" alt="shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 lg-mb-30">
                        <div className="consulting__area-image dark__image">
                            {/* Consider changing this image to one that represents problem-solving or crisis response */}
                            <img src="assets/img/pages/consulting.jpg" alt="image representing crisis resolution" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="consulting__area-right">
                            <div className="consulting__area-right-title">
                                <span className="subtitle-two">Fiasco Consultancy Limited</span>
                                <h2>Turning Crises Into Triumphs</h2>
                                <p>When failure is not an option, Fiasco Consultancy Limited steps in. We specialize in rapid intervention, project recovery, and strategic defense to navigate your most challenging business fiascos. We turn uncertainty into clarity.</p>
                            </div>
                            <div className="consulting__area-right-list">
                                {/* Updated list items based on the services */}
                                <span><i className="far fa-check"></i>Rapid Crisis Management and Intervention.</span>
                                <span><i className="far fa-check"></i>Expert Project Turnaround and Recovery.</span>
                                <span><i className="far fa-check"></i>Strategic Reputation Repair and Defense.</span>
                            </div>
                            {/* Ensure the contact link is correct */}
                            <Link className="btn-six" href="contact">Schedule a Fiasco Audit<i className="far fa-chevron-double-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consulting;