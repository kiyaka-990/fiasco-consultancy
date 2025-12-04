import { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
// Ensure this path is correct relative to the component location
import videoBg from "../../../../public/assets/img//pages/solution.jpg"; 


const Video = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    }; 
    return (
        <>
            <div className="solution__area section-padding" style={{backgroundImage: `url(${videoBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-9">
                            <div className="solution__area-title">
                                {/* Changed Subtitle to Fiasco-specific callout */}
                                <span className="subtitle-two">Rapid Fiasco Intervention</span>
                                {/* Changed Title to reflect crisis management mission */}
                                <h1>When failure strikes, we deliver the solution.</h1>
                                {/* Changed Button text to be more action-oriented for a crisis firm */}
                                <Link className="btn-five" href="/request-quote">Start Your Recovery<i className="far fa-chevron-double-right"></i></Link>
                            </div>                  
                        </div>
                        <div className="col-xl-3">
                            <div className="solution__area-right">
                                <div className="solution__area-right-video">
                                    <div className="solution__area-right-icon video video-pulse">
                                        <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                                    </div>
                                    {/* Changed Video Title to be relevant to Fiasco/Crisis */}
                                    <h6>See Our Intervention Methodology</h6>
                                </div>
                            </div>                  
                        </div>
                    </div>
                </div>
            </div>
            {/* Keeping the existing video modal logic and YouTube ID */}
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="WRPDv5xThWE" onClose={() => setOpenVideo(false)} />       
        </>
    );
};

export default Video;