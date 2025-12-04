import shape1 from "../../../../public/assets/img/shape/about-1.png";
import shape2 from "../../../../public/assets/img/shape/about-1-dark.png";
import shape3 from "../../../../public/assets/img/shape/about-2.png";
import shape4 from "../../../../public/assets/img/shape/about-2-dark.png";
import image1 from "../../../../public/assets/img/about/about-1.jpg";
import image2 from "../../../../public/assets/img/about/about-2.jpg";
import avatar from "../../../../public/assets/img/avatar/avatar-1.jpg";
import Count from "../../common/count";
import Link from "next/link";

const About = () => {
    const aboutData = {
        // Updated Experience (Placeholder - you should update this value)
        count: 10,
        exp: 'Years Driving Business Success in East Africa',
        // Updated Titles and Descriptions
        subtitle: 'About Fiasco Consultancy',
        title: 'Strategic Solutions to Grow and Scale Your Business.',
        description: 'Fiasco Consultancy delivers tailored, expert-led strategies designed to navigate the complexities of the East African market. We focus on achieving tangible, measurable results for our clients.',
        // Updated Author Information (Placeholder name)
        author_name: 'David Mwangi',
        author_sub: 'Lead Consultant & CEO',
        btn_title: 'Our Success Stories',
        btn_link: '/about' // This link should lead to the about page
    }
    return (
        <div className="about__one dark__image section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 lg-mb-30">
                        <div className="about__one-left">
                            <div className="about__one-left-image">
                                <img className="one" src={image1.src} alt="about-image" />
                                <img className="two" src={image2.src} alt="about-image" />
                            </div>
                            <div className="about__one-left-experience">
                                <h1><Count number={aboutData?.count}/>+</h1>
                                <h6>{aboutData?.exp}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__one-right">
                            <div className="about__one-right-title">
                                <span className="subtitle-one">{aboutData?.subtitle}</span>
                                <h2>{aboutData?.title}</h2>
                                <p>{aboutData?.description}</p>
                            </div>
                            <div className="about__one-right-btn">
                                <div>
                                    <Link className="btn-one" href={aboutData?.btn_link}>{aboutData?.btn_title}<i className="far fa-chevron-double-right"></i></Link>
                                </div>
                                <div className="about__one-right-btn-author">
                                    <div className="about__one-right-btn-author-avatar">
                                        <img src={avatar.src} alt="about-avatar" />
                                    </div>
                                    <div className="about__one-right-btn-author-name">
                                        <span className="text-one">{aboutData?.author_name}</span>
                                        <h6>{aboutData?.author_sub}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="about__one-right-bottom">
                                <div className="about__one-right-bottom-list">
                                    {/* Updated bullet points to reflect consultancy services */}
                                    <span><i className="far fa-check"></i>Customized Strategic Planning.</span>
                                    <span><i className="far fa-check"></i>In-depth Market Entry Analysis.</span>
                                    <span><i className="far fa-check"></i>Operational Efficiency Consulting.</span>
                                </div>
                                <div className="about__one-right-bottom-experience">
                                    {/* Changed the hardcoded number to a counter, assuming this section lists key stats */}
                                    <h3><span className="counter">250</span>+</h3>
                                    <h6>Successful Projects Completed</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="about__one-shape-1 dark-n" src={shape1?.src} alt="about-shape" />
            <img className="about__one-shape-1 light-n" src={shape2?.src} alt="about-shape" />
            <img className="about__one-shape-2 dark-n" src={shape3?.src} alt="about-shape" />
            <img className="about__one-shape-2 light-n" src={shape4?.src} alt="about-shape" />
        </div>
    );
};

export default About;