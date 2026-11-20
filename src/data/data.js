import ReactJs from "../Img/ReactJs.png";
import TailwindCss from "../Img/TailwindCss.png";
import TypeScript from "../Img/TypeScript.png";
import ThreeJs from "../Img/threeJs.png";
import FramerMotion from "../Img/FramerMotion.png";
import Clerk from "../Img/Clerk.png";
import Shogun from "../Img/Shogun.png";
import Gsap from "../Img/Gsap.png";
import NextJs from "../Img/NextJs.png";
import Project01 from "../Img/Project01.png";
import Project02 from "../Img/Project02.png";
import Project03 from "../Img/Project03.png";
import Project04 from "../Img/Project04.png";
import Cloudinary from "../Img/Cloudinary.png";
import Appwrite from "../Img/Appwrite.png";
import Hostinger from "../Img/Hostinger.png";
import Stream from "../Img/Stream.png";
import Docker from "../Img/Docker.png";
import Experience01 from "../Img/Experience01.png";
import Experience02 from "../Img/Experience02.png";
import Experience03 from "../Img/Experience03.png";
import Experience04 from "../Img/Experience04.png";


export const navItems = [
  { id: 1, label: "About",       sectionId: "about" },
  { id: 2, label: "Projects",    sectionId: "projects" },
  { id: 3, label: "Testimonials",sectionId: "testimonials" },
  { id: 4, label: "Contact",     sectionId: "contact" },
];

export const projects = [
  {
    id: 1,
    image: Project01,
    title: "3D Portfolio Website",
    description:
      "An interactive portfolio with 3D animated elements, smooth scrolling and a fully responsive layout.",
    technologies: [ReactJs, TailwindCss, TypeScript, ThreeJs, FramerMotion],
  },
  {
    id: 2,
    image: Project02,
    title: "E-Commerce Platform",
    description:
      "A full online store with product filtering, a shopping cart, secure checkout and an admin dashboard.",
    technologies: [NextJs, TailwindCss, TypeScript, Shogun, Clerk],
  },
  {
    id: 3,
    image: Project03,
    title: "Task Management App",
    description:
      "A collaborative task board with drag and drop, real-time updates and team workspaces.",
    technologies: [ReactJs, TailwindCss, TypeScript, ThreeJs, Clerk],
  },
  {
    id: 4,
    image: Project04,
    title: "Weather Dashboard",
    description:
      "A weather app showing live forecasts, interactive charts and saved favorite locations.",
    technologies: [NextJs, TailwindCss, TypeScript, ThreeJs, Gsap],
  },
];

export const companies = [
  {id: 1,image: Cloudinary},
  {id: 2,image: Appwrite},
  {id: 3,image: Hostinger},
  {id: 4,image: Stream},
  {id: 5,image: Docker}
];

export const experienceDetails = [
  {
    id: 1,
    image: Experience01,
    role: "Frontend Engineer Intern",
    details: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
  },
  {
    id: 2,
    image: Experience02,
    role: "Mobile App Dev - JSM Tech",
    details: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  },
  {
    id: 3,
    image: Experience03,
    role: "Freelance App Dev Project",
    details: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  },
  {
    id: 4,
    image: Experience04,
    role: "Lead Frontend Developer",
    details: "Developed and maintained user-facing features using modern frontend technologies.",
  }
]

