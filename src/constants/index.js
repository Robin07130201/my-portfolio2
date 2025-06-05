import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mui,
  express,
  mysql,
  github,
  Three3js,
  aws,
  project2,
  project1,
  project3,
  shopify,
  next
} from "../assets";
import tekisky from '../assets/company/tekisky.png';
// import project2 from '../assets/project2.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title:"Mobile application",
    icon:mobile
  },
  {
    title: "Shopify",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name:"Shopify",
    icon:shopify
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: Three3js,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name:"next",
    icon:next
  }
];

const experiences = [
  {
    title: "Full-Stack Developer",
    icon: tekisky,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Blockchain",
    icon: tekisky,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining decentralized applications (dApps) and smart contracts on blockchain platforms like Ethereum or Solana.",
      "Collaborating with cross-functional teams including developers, product managers, and security experts to build secure and scalable blockchain solutions.",
      "Implementing consensus algorithms such as Proof of Work or Proof of Stake to ensure network integrity.",
      "Writing and deploying smart contracts using Solidity or Rust, with a focus on security and efficiency.",
      "Integrating blockchain systems with external data sources and APIs to enable seamless interaction between on-chain and off-chain components.",
      "Conducting code reviews and security audits to identify vulnerabilities and improve contract reliability.",
      "Keeping up to date with blockchain innovations and regulatory requirements to enhance system performance and compliance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Deepanshu proved me wrong.",
    name: "Rahul Iyer",
    designation: "Export AutoParts",
    company: "GearXpert",
    image:
      "https://www.stglawfirm.com/wp-content/uploads/2022/11/Rahul-Iyer-Attorney-Profile.png.webp",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Deepanshu does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Deepanshu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kavita Nair",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GareXpert",
    description:
      "Web-based platform that enables users to browse, purchase, and manage auto parts from various suppliers, ensuring a seamless and reliable shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "EmailJS",
        color: "-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "TekiskyMart",
    description:
      "An eCommerce platform offering a seamless shopping experience with a wide range of products, secure payments, and fast delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "taildwind",
        color: "orange-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://tekiskymart.com/",
  },
  {
    name: "Softcadia",
    description:
      "A job portal connecting job seekers with employers, offering seamless job search, application tracking, and recruitment solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://softcadia.tekisky.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
