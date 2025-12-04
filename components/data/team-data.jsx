import team1 from "../../public/assets/img/team/team-1.jpg";
import team2 from "../../public/assets/img/team/team-2.jpg";
import team3 from "../../public/assets/img/team/team-3.jpg";
import team4 from "../../public/assets/img/team/team-4.jpg";
import team5 from "../../public/assets/img/team/team-5.jpg";
import team6 from "../../public/assets/img/team/team-6.jpg";

const teamData = [
    {
        id: 'amelia-clover',
        image: team1,
        // Updated Position
        position: 'Head of Crisis Response',
        name: 'Amelia Wangui',
        mail: 'wangui@fiascoconsultancy.com',
        phone: '+254728976543',
        // Updated Category
        category: 'leadership',
        social_link: [
            { link: 'https://www.facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://www.linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> }, // Changed icon to LinkedIn
        ],
    },
    {
        id: 'steve-rhodes',
        image: team2,
        // Updated Position
        position: 'Senior Turnaround Strategist',
        name: 'Steve Nyagah',
        mail: 'steve@fiascoconsultancy.com',
        phone: '+254712345678',
        // Updated Category
        category: 'turnaround',
        social_link: [
            { link: 'https://www.facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://www.linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> }, // Changed icon to LinkedIn
        ],
    },
    {
        id: 'grace-elizabeth',
        image: team3,
        // Updated Position
        position: 'Forensic Audit Specialist',
        name: 'Grace Elizabeth',
        mail: 'elizabeth@fiascoconsultancy.com',
        phone: '+254725495672',
        // Updated Category
        category: 'investigation',
        social_link: [
            { link: 'https://www.facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://www.linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> }, // Changed icon to LinkedIn
        ],
    },
    {
        id: 'michael Wanaina',
        image: team4,
        // Updated Position
        position: 'Reputation & Communications Lead',
        name: 'Michael James',
        mail: 'mike@fiascoconsultancy.com',
        phone: '+254712345679',
        // Updated Category
        category: 'crisis',
        social_link: [
            { link: 'https://www.facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://www.linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> }, // Changed icon to LinkedIn
        ],
    },
    {
        id: 'samuel-thomas',
        image: team5,
        // Updated Position
        position: 'Resilience Planning Expert',
        name: 'Samuel Otieno',
        mail: 'sam@fiascoconsultancy.com',
        phone: '+254725495673',
        // Updated Category
        category: 'resilience',
        social_link: [
            { link: 'https://www.facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://www.linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> }, // Changed icon to LinkedIn
        ],
    },
    {
        id: 'balm-bayrak',
        image: team6,
        // Updated Position
        position: 'Legal & Compliance Advisor',
        name: 'Betty Mwendo',
        mail: 'betty@fiascoconsultancy.com',
        phone: '+254728976544',
        // Updated Category
        category: 'litigation',
        social_link: [
            { link: 'https://www.facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://www.linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> }, // Changed icon to LinkedIn
        ],
    },
];

export default teamData;