import portfolioData from "@/components/data/portfolio-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay} from 'swiper/modules';
import Link from "next/link";

// Fallback/Demo Data Structure (assuming portfolioData holds real data)
// const localizedPortfolioItem = [
//     { id: 1, title: "Market Entry Strategy: Kenyan Tech Startup", subtitle: "Strategic Advisory", image: { src: "assets/img/portfolio/case-1.jpg" } },
//     { id: 2, title: "Operational Efficiency in Nairobi Manufacturing", subtitle: "Operational Consulting", image: { src: "assets/img/portfolio/case-2.jpg" } },
//     // ... and so on
// ];

const portfolioItem = portfolioData.slice(0, 5); // Use the imported data

const slideControl = {
    loop: true,
    speed: 2000,
    spaceBetween: 30,
    autoplay: {
        delay: 4500,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        750: {
            slidesPerView: 2
        },
        1138: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 4
        },
    }
};

const Portfolio = () => {

    return (
        <div className="portfolio__area dark__image section-padding pb-0 overflow-hidden">
            <div className="container-fluid p-0">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__area-title t-center">
                            {/* Localized Subtitle */}
                            <span className="subtitle-one">Client Success Stories</span>
                            {/* Localized Title */}
                            <h2>Our Strategic Consulting Case Studies</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper modules={[EffectFade, Autoplay]} {...slideControl} >
                            {/* The data loop assumes portfolioData provides title, subtitle, and image properties. */}
                            {portfolioItem?.map((data, id) => (
                                <SwiperSlide key={id}>
                                    <div className="portfolio__area-item swiper-slide">
                                        <img src={data.image.src} alt={`Case Study: ${data.title}`} />
                                        <div className="portfolio__area-item-content">
                                            <div className="portfolio__area-item-content-title">
                                                {/* Uses the titles from the external data */}
                                                <h4><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h4>
                                                <span className="text-eight">{data.subtitle}</span>
                                            </div>
                                            <div className="portfolio__area-item-content-icon">
                                                <Link href={`/portfolio/${data.id}`}><img src="assets/img/icon/up-arrow.png" alt="icon" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;