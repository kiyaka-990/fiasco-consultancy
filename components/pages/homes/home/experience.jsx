import Link from "next/link";
import image1 from "../../../../public/assets/img/pages/experience-1.jpg";
import image2 from "../../../../public/assets/img/pages/experience-2.jpg";
import SkillBar from "../../common/skill-bar";
import SkillBarItem from "../../common/skill-bar";

const Experience = () => {
    const experienceContent = {
        // Localized Subtitle, Title, and Description
        subtitle: 'Our Expertise & Success Rate',
        title: 'Empowering Your Business Growth with Local Insight',
        des: 'Fiasco Consultancy provides robust, strategically sound solutions tailored for the dynamics of the East African market. We partner with you to achieve sustainable growth and operational excellence.',
        btn_text: 'Request a Quote',
        btn_link: '/contact', // Changed to /contact for a clear path
        // Skill Bar 1: Strategic Planning (High Confidence)
        progress1: '95', 
        // Skill Bar 2: Talent/HR Management (Slightly Lower, for variety)
        progress2: '85',
    }
    return (
        <>
            <div className="experience__area dark__image section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 lg-mb-30">
                            <div className="experience__area-image">
                                <img className="experience__area-image-shape left-right-animate" src="assets/img/shape/dots.png" alt="" />
                                <div className="experience__area-image-item">
                                    <img src={image1.src} alt="image" />
                                </div>
                                <div className="experience__area-image-item mt-65">
                                    <img src={image2.src} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="experience__area-right">
                                <div className="experience__area-right-title">
                                    <span className="subtitle-one">{experienceContent.subtitle}</span>
                                    <h2>{experienceContent.title}</h2>      
                                    <p>{experienceContent.des}</p>
                                </div>
                                <div className="skill__area mt-30">
                                    {/* Skill Bar 1: Strategic Planning */}
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">Strategic Planning & Development</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={experienceContent?.progress1} />
                                        </div>
                                    </div>
                                    {/* Skill Bar 2: HR/Talent Management */}
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">HR & Talent Management Solutions</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={experienceContent?.progress2} />
                                        </div>
                                    </div>
                                </div>
                                <Link className="btn-two" href={experienceContent.btn_link}>{experienceContent.btn_text}<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;