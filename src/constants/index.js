import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  react,
  excel,
  python,
  gitHub,
  wordPress,
} from "../assets";

import Brilliant_Minds from "../assets/hero/Brilliant_Minds.png";
import Acquisition_Enterprise from "../assets/hero/Acquisition_Enterprise.jpg";
import Stellar_Builders from "../assets/hero/Stellar_Builders.png";
import DigiTechLogo from "../assets/hero/DigiTechLogo.jpg";
import seanSmythe from "../assets/team/Smythe-Sean-2022.jpg";
import carsonVerhulst from "../assets/team/CarsonVerhulst.jpg";


export const navigation = [
  {
    id: "0",
    title: "Why Us",
    url: "/",
  },
  {
    id: "1",
    title: "Services",
    url: "/services",
  },
  {
    id: "2",
    title: "Previous Work",
    url: "/previouswork",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "/contact",
  },
  {
    id: "4",
    title: "The Team",
    url: "/team",
  },
  {
    id: "5",
    title: "SOFTWARE PRODUCTS",
    url: "/software",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Account",
    url: "/accounts",
    onlyMobile: true,
  },
];


export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Tutoring Businesses",
    text: "We build custom websites for tutoring businesses, including easy booking systems for appointments. Our client portals let students and parents view schedules and make payments online. We also add features for clients to see educational progress and results. This approach improves how tutoring businesses run, makes customers happier, and shows clear learning outcomes, leading to better engagement and success",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Rental Properties",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Medical Practices",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Career Portal ",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
  {
    id: "4",
    title: "Profile Site",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
  {
    id: "5",
    title: "Restaurant Booking and Orders",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const team = [
  {
    id: "0",
    title: "Sean Smythe",
    text: "Sean is a versatile software developer with expertise across multiple domains. He holds a degree in Electrical Engineering from the University of Minnesota and is a self-taught software developer. His tech stack includes React.js, Firebase, Python, and Swift, enabling him to handle a wide range of development tasks from web and app development to automation and desktop applications. Sean's background in engineering and his self-driven learning make him an exceptional problem solver and quick to learn new programming languages and technologies. By leveraging precise prompt engineering and scripting, he can develop products quickly and efficiently, ensuring high-quality outcomes for diverse projects. His ability to adapt and innovate makes him a valuable asset in the tech industry.",
    date: "Founder",
    status: "Software developer",
    imageUrl: seanSmythe,
    colorful: true,
  },
  {
    id: "1",
    title: "Carson Verhulst",
    text: "Carson is a dedicated and innovative student majoring in Statistics and Computer Science at the University of Minnesota. He possesses a strong blend of technical expertise in programming, data analysis, and machine learning, enabling him to excel at developing data-driven solutions for complex challenges in technology-focused projects. His top skills include Data Modeling, Python, SQL, Swift, React.js, and Adobe products for graphic design and video editing. Carson's ability to effectively apply his knowledge and his passion for continuous learning make him a valuable contributor to any tech team.",
    date: "Co-Founder",
    status: "Software developer",
    imageUrl: carsonVerhulst,
    colorful: false,
  },
];


export const collabText = [
  "At DigiTech, we prioritize our clients' needs and ensure their satisfaction is at the forefront of everything we do. We believe in building strong, lasting relationships by understanding your business goals and delivering solutions that exceed your expectations.",
  "DigiTech specializes in bringing your business online. We create user-friendly, high-performance applications that enhance your online presence and help you reach a broader audience.",
  "We design our solutions with your business's future growth in mind. This ensures that as your needs evolve, your digital platforms can adapt seamlessly."
];

export const collabContent = [
  {
    id: "0",
    title: "We Care",
    text: collabText[0],
  },
  {
    id: "1",
    title: "Bringing your business vision to life online",
    text: collabText[1],
  },
  {
    id: "2",
    title: "Scaleable Solutions",
    text: collabText[2],
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: react,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: excel,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: gitHub,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: python,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: wordPress,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Personal productivity tools to test what we offer",
    price: "0",
    colorClass: "text-yellow-500", 
    features: [
      "Excel dashboards",
      "Email and text Bots",
      "Stock and Crypto Tracker",
      "Secure messaging",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "These software products are currently being developed",
    price: "9.99",
    colorClass: "text-purple-500",
    features: [
      "Coming soon",
      "Coming soon",
      "Coming soon",
      "Coming soon",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Do you have a great idea and need an affordable way to bring it to market? Partner with us to develop your SaaS product. We offer reduced rates and take a percentage of ownership, making it easier for you to get your product off the ground.",
    price: null,
    colorClass: "text-red-500",
    features: [
      "Wire Map of products",
      "Development of products",
      "Launch products",
    ], 
  },
];

export const benefits = [
  {
    id: "0",
    title: "Web Development",
    textHome: "Develop high-quality websites from scratch or fix existing ones. Unlike most web development services we will code them from scratch.",
    textService: "We develop high-quality mobile and desktop websites, whether creating from scratch or fixing existing ones. Specializing in scalable, fully customizable websites, we offer features like OAuth for user authentication, payment processing, booking systems, and CRUD capabilities. Our websites include client portals with messaging functionality, all built using React.js and Firebase. Choose our coding services for a fully customizable and flexible website tailored to your needs. We create detailed wireframes before development to ensure clarity and alignment with your vision.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: DigiTechLogo,
  },
  {
    id: "1",
    title: "App Development",
    textHome: "Create user-friendly iOS and Android apps, providing detailed wireframes before development to ensure clarity.",
    textService: "Our app development services cater to both iOS and Android platforms. We create user-friendly, high-performance applications that meet your business needs. From design to deployment, we handle all aspects of app development, ensuring seamless functionality and an engaging user experience. We provide detailed wireframes before development to align with your vision and ensure clarity.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: DigiTechLogo,
   
  },
  {
    id: "2",
    title: "Automation",
    textHome: "Streamline business processes with custom automation solutions that will do tasks that normally require man hours, saving you time and money.",
    textService: "Streamline business processes with custom automation solutions to increase efficiency and reduce manual workload. Our services include email and text automation, web scraping for data gathering, and more. We analyze your business to recommend and implement automation solutions that best fit your needs, optimizing your operations.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: DigiTechLogo,
  },
  {
    id: "3",
    title: "Graphic and Video Development",
    textHome: "Provide graphic design and video editing services for effective marketing.",
    textService: "Enhance your brand with our graphic design and video editing services. We create visually appealing graphics and videos tailored to your business requirements, helping you effectively market your products and services. Our team ensures high-quality, professional results that make your brand stand out.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: DigiTechLogo,
  },
  {
    id: "4",
    title: "Social Media Management",
    textHome: "Maintain a strong social media presence with our comprehensive management services, from content creation to account handling.",
    textService: "Maintain a strong presence across all social media platforms with our comprehensive social media management services. We handle everything from content creation to account management, helping your business engage with its audience and grow its online presence. Let us take care of your social media needs.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: DigiTechLogo,
  },
  {
    id: "5",
    title: "Consulting",
    textHome: "Optimize efficiency with our consulting services, choosing and setting up the latest productive software tools and automation. We will save your business as much money as possible.",
    textService: "Stay ahead with our consulting services. We help you choose and set up the latest productive software tools and automation solutions. From chatbots for quick customer responses to automated email marketing, we ensure these technologies integrate smoothly into your business, enhancing efficiency and performance. Improve your business efficiency with our process optimization services. We identify and eliminate bottlenecks in your workflow, implementing automation to reduce manual work and errors. Our goal is to streamline your operations, making your business run faster and more smoothly.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: DigiTechLogo,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const previousWorkData = [
  {
    image: Brilliant_Minds, // Add path to the client's image if available
    clientName: "Brilliant Minds Dyslexia",
    description: "We provided Brilliant Minds Dyslexia with a comprehensive solution, including a captivating website, professional email service, and a memorable logo.",
    link: "https://brilliantmindsdyslexia.com/", // Link to the client's website
  },
  {
    image: Acquisition_Enterprise, // Add path to the client's image if available
    clientName: "Acquisition Enterprise",
    description: "We built a comprehensive website for Acquisition Enterprise, highlighting their expertise in real estate acquisitions and investment opportunities.",
    link: "#", // Link to the client's website
},
  {
    image: Stellar_Builders, // Add path to the client's image if available
    clientName: "Stellar Builders",
    description: "We developed Stellar Builders' websites to and uses SEO to improve local search visibility. Promotional flyers were createdfor distribution during projects.",
    link: "https://www.thestellarbuilders.com/", // Link to the client's website
  
  },
  {
    image: null, // Add path to the client's image if available
    clientName: "Digi Tech Dynamics",
    description: "We built our website using React.js and Firebase backend, inspired by the UI of brainwave. We added our own animations and UI elements, and implemented payment processing, sign-in/sign-up features, and in-app messaging in our client/admin portal. Link leads to gitup repo of the code we started with",
    link: "https://github.com/adrianhajdin/brainwave/blob/main/README.md", // Link to the client's website
  },
];
