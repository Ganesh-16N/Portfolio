import React from "react";
import bookShop from "./Photos/bookShop.png";
import youtube from "./Photos/youtube.png";
import advik from "./Photos/advik.png";
import profImg from "./Photos/port.png";
import team from "./Photos/team.png";
import pmv from "./Photos/pmv image.png";
import profite from "./Photos/profiteai image.png";
import tollnaka from "./Photos/toll-naka.png";
// import mobileApp1 from "./Photos/mobileApp1.jpeg";
// import mobileApp2 from "./Photos/mobileApp2.jpeg";
import Mob from "./Mob";

const projectsData = [
  {
    id: "Profite",
    title: "Profite.ai",
    image: profite,
    description: ["React-based finance and business analysis web app at Plan My Venture. Achievements include creating intuitive interfaces, integrating third-party APIs, and showcasing expertise in JavaScript and the MERN stack."],
    viewLink: "https://profitenewdev.netlify.app",
    // codeLink: "http://www.google.com",
  },
  {
    id: "PlanMyVenture",
    title: "Plan My Venture",
    image: pmv,
    description: ["created using MERN technologies to develop and maintain a responsive web application. Demonstrated proficiency in crafting user-centric interfaces and collaborating with cross-functional teams."],
    viewLink: "https://planmyventure.com/",
    // codeLink: "http://www.google.com",
  },
  {
    id: "tollnakaImage",
    title: "Tollnaka",
    image: tollnaka,
    description: [
      "Registering New Tolls.",
      "Automated Tariff selection.",
      "Searching the Vehicles and Sorting the Tolls.",
      "Fully functional made using ReactJS.",
    ],
    viewLink: "https://toll-naka.netlify.app/",
    codeLink: "https://github.com/Ganesh-16N/toll-management-system",
  },
  {
    id: "Portfolio",
    title: "Portfolio",
    image: profImg,
    description: ["My portfolio showcasing a diverse range of projects that reflect my expertise in web development and Mobile Application development. "],
    viewLink: "https://ganesh-nagargoje.netlify.app/",
    // codeLink: "http://www.google.com",
  },
  {
    id: "Youtube",
    title: "Youtube Clone",
    image: youtube,
    description: ["A sleek Youtube Clone built from scratch. Seamlessly navigating through video content and offering a spectrum of videos, channels."],
    viewLink: "https://ganesh-youtube-clone.netlify.app/",
    codeLink: "https://github.com/Ganesh-16N/youtube-clone",
  },
  {
    id: "Advik",
    title: "Advik",
    image: advik,
    description: ["To calculate and show live the distance between two points on the Earth's surface given their latitude and longitude coordinates."],
    viewLink: "https://advikk.netlify.app/",
    codeLink: "https://github.com/Ganesh-16N/advik",
  },
  {
    id: "TeamMaker",
    title: "Team Maker",
    image: team,
    description: [
      "A mern stack application which includes Pagination, searching, sorting for creating teams based on various aspects.",
    ],
    viewLink: "https://users-team.netlify.app/",
    codeLink: "https://github.com/Ganesh-16N/client",
  },
  {
    id: "bookShop",
    title: "E Book Shop",
    image: bookShop,
    description: [
      "Developed a web application for an online book shop, offering a user-friendly experience."
      ," A MERN Application with features like login, book searching, and sorting, catering to both buyers and sellers."
    ],
    codeLink: "https://github.com/Ganesh-16N/E-Book-Store",
  },
];

const Project = ({ id, title, image, description, viewLink, codeLink }) => (
  <div className="project-card">
    <div id={id} className="projectImage">
      <img src={image} alt={title} className="w-full rounded" />
    </div>
    <div className="projectInfo p-6 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul className="text-gray-400 mt-4">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="codeAndLink mt-4">
       { viewLink && <a href={viewLink} className="text-indigo-500 hover:text-white hover:bg-indigo-600 py-2 px-4 rounded">
          View
        </a>}
        {codeLink && <a href={codeLink} className="text-indigo-500 hover:text-white hover:bg-indigo-600 py-2 px-4 rounded">
          Code
        </a>}
      </div>
    </div>
  </div>
); 

const Projects = () => {
  return (
    <>
    <div className="p-8 bg-black text-white">
      <h2 className="text-3xl font-semibold text-center my-8">My Projects</h2>
      <div id="mainProjects">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Project key={project.id} {...project} />
            ))}

    {<Mob></Mob>}

        </div>
      </div>
    </div>
</>
  );
};

export default Projects;
