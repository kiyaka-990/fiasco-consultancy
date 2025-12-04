import banner1 from "../../public/assets/img/banner/banner-7.jpg";
import banner2 from "../../public/assets/img/banner/banner-3.png";
import banner3 from "../../public/assets/img/banner/banner-4.png";
import banner4 from "../../public/assets/img/banner/banner-5.jpg";
import banner5 from "../../public/assets/img/banner/banner-6.jpg";
import banner6 from "../../public/assets/img/banner/banner-1.jpg";
import banner7 from "../../public/assets/img/banner/banner-2.jpg";

const bannerData = [
    {
        id: 1,
        // Changed subtitle
        subtitle: 'Fiasco Consultancy Limited',
        // Changed title
        title: 'Intervene. Resolve. Recover.',
        // Changed button text
        button: 'View Services',
        count: 500, // Kept count
        // Changed count title
        countTitle: 'Recoveries',
        image: banner1,
        banner_1: true,
    },
    {
        id: 2,
        // Changed subtitle
        subtitle: "Expert Crisis Management",
        // Changed title
        title: "Turnaround Your Business Failure.",
        // Changed description
        des: "We specialize in rapid deployment to stabilize failing projects, manage reputational crises, and secure your future.",
        // Changed button text        
        button: 'Get Fiasco Audit',
        image: banner2,
        banner_2: true, 
    },
    {
        id: 3,
        // Changed subtitle
        subtitle: "Protecting Against Chaos",
        // Changed title
        title: "Strategic Resolution for Complex Issues.",
        // Changed description
        des: "If you have any doubts or concerns about project viability, legal exposure, or internal audit findings, contact us immediately.",
        // Changed button text
        button: 'Discover Our Approach',
        image: banner3,
        banner_2: true, 
    },
    {
        id: 4,
        // Changed subtitle
        subtitle: "Fiasco Prevention",
        // Changed title
        title: "Mitigate Litigation Risks.",
        // Changed description
        des: "Our support is crucial for comprehensive risk management that safeguards your company against legal and operational disasters.",
        // Changed button text
        button: 'Consult Now',
        image: banner4,
        banner_3: true, 
    },
    {
        id: 5,
        // Changed subtitle
        subtitle: "Building Resilience",
        // Changed title
        title: "Secure Against System Failure.",
        // Changed description
        des: "We offer tailored consulting coverage that protects your reputation and assets when disruption hits hardest.",
        // Changed button text
        button: 'Contact Specialists',
        image: banner5,
        banner_3: true, 
    },
    {
        id: 6,
        // Changed subtitle
        subtitle: "Secure your viability now",
        // Changed title
        title: "Customize Recovery Solutions",
        // Changed button text
        button: 'View Case Studies',
        image: banner6,
        dark_image: "/assets/img/banner/banner-1-dark.jpg",
        banner_4: true, 
    },
    {
        id: 7,
        // Changed subtitle
        subtitle: "Instill Operational Peace of Mind",
        // Changed title
        title: "Shielding your business and future",
        // Changed button text
        button: 'Request a Quote',
        image: banner7,
        dark_image: "/assets/img/banner/banner-2-dark.jpg",
        banner_4: true, 
    },
];

export default bannerData;