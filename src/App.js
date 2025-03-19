import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-scroll";
import { FaReact, FaNode, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiTailwindcss, SiNextdotjs, SiRedux, SiFirebase } from "react-icons/si";
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiTwitterFill } from "react-icons/ri";

// Images (update paths as needed)
import prof from "./Components/Home/prof.png";
import profite from "./Components/Projects/Photos/profiteai image.png";
import pmv from "./Components/Projects/Photos/pmv image.png";
import fikaa_web from "./Components/Projects/Photos/fikaa_web.png";
import fikaa_app from "./Components/Projects/Photos/fikaa_app.jpg";
import eventImg from "./Components/Projects/Photos/linkup_web.png";

// Theme Context
const ThemeContext = React.createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") !== "light");
  useEffect(() => localStorage.setItem("theme", isDark ? "dark" : "light"), [isDark]);
  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
};

// Core Skills
const skills = [
  { icon: <SiJavascript className="text-4xl md:text-5xl mb-2 text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-4xl md:text-5xl mb-2 text-blue-500" />, name: "TypeScript" },
  { icon: <FaReact className="text-4xl md:text-5xl mb-2 text-cyan-400" />, name: "React/React Native" },
  { icon: <SiNextdotjs className="text-4xl md:text-5xl mb-2 text-black dark:text-white" />, name: "Next.js" },
  { icon: <FaNode className="text-4xl md:text-5xl mb-2 text-green-500" />, name: "Node.js" },
  { icon: <SiRedux className="text-4xl md:text-5xl mb-2 text-purple-500" />, name: "Redux/RTK" },
  { icon: <SiTailwindcss className="text-4xl md:text-5xl mb-2 text-teal-400" />, name: "Tailwind CSS" },
  { icon: <SiMongodb className="text-4xl md:text-5xl mb-2 text-green-600" />, name: "MongoDB" },
  { icon: <SiFirebase className="text-4xl md:text-5xl mb-2 text-orange-500" />, name: "Firebase" },
  { icon: <FaGithub className="text-4xl md:text-5xl mb-2 text-gray-200" />, name: "Git/GitHub" },
];

// Top Projects
const projectsData = [
  { id: "Fikaa", title: "FIKAA Web", image: fikaa_web, description: "A fintech platform for mutual funds and digital gold, built with React, React Native, and secure payment integrations.", viewLink: "https://app.fikaa.in/login" },
  { id: "FikaaApp", title: "FIKAA App", image: fikaa_app, description: "A fintech Application for mutual funds and digital gold, built with React, React Native, and secure payment integrations.", viewLink: "https://play.google.com/store/apps/details?id=com.fikaa_app&hl=en_IN" },
  { id: "EventManagement", title: "Event Management Platform", image: eventImg, description: "A Next.js-based system with ticket purchasing, QR code verification, and real-time notifications via WebSockets.", viewLink: "", codeLink: "https://github.com/Ganesh-16N/event-management" },
  { id: "Profite", title: "Profite.ai", image: profite, description: "A finance analysis tool using React, Redux, and Tailwind CSS for real-time data insights.", viewLink: "https://profitenewdev.netlify.app" },
  { id: "PlanMyVenture", title: "Plan My Venture", image: pmv, description: "A MERN-stack web app delivering scalable, responsive solutions for startups.", viewLink: "https://planmyventure.com/" },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const Home = () => {
  const { isDark } = useTheme();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <section id="Home" className={`min-h-screen flex items-center ${isDark ? "bg-gradient-to-br from-gray-900 via-indigo-950 to-black" : "bg-gradient-to-br from-indigo-50 via-white to-gray-100"}`}>
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1 variants={fadeInUp} className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold ${isDark ? "text-white" : "text-indigo-900"} mb-4 tracking-tight`}>Ganesh Nagargoje</motion.h1>
          <motion.p variants={fadeInUp} className={`text-lg sm:text-xl md:text-2xl ${isDark ? "text-indigo-200" : "text-indigo-700"} mb-4 font-light`}>Front-End Developer | Fintech</motion.p>
          <motion.p variants={fadeInUp} className={`text-base sm:text-lg ${isDark ? "text-indigo-300" : "text-indigo-600"} mb-6 italic`}>"Building seamless digital experiences with code and creativity."</motion.p>
          <motion.p variants={fadeInUp} className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-700"} mb-6 max-w-md mx-auto md:mx-0`}>With over 2 years of experience, I specialize in crafting responsive, high-performance web and mobile apps using React, Next.js, React Native, and more.</motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="Contacts" spy smooth offset={-70} duration={700} className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold ${isDark ? "bg-indigo-500 hover:bg-indigo-600 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"} transition-all shadow-lg hover:shadow-xl`}>Let’s Talk</Link>
            <Link to="Projects" spy smooth offset={-70} duration={700} className={`px-6 py-2 sm:px-6 sm:py-3 rounded-full font-semibold ${isDark ? "border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-gray-900" : "border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"} transition-all`}>See My Work</Link>
          </motion.div>
        </motion.div>
        <motion.div className="w-full md:w-1/2 relative" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}>
          <motion.img style={{ scale }} src={prof} alt="Profile" className="w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 rounded-full object-cover mx-auto shadow-2xl hover:shadow-3xl transition-shadow duration-500 border-4 border-indigo-300/20" />
          <motion.div className="absolute top-0 right-2 sm:right-4 md:right-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.2, rotate: 360 }}>
            <span className={`inline-block px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold ${isDark ? "bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-900"} shadow-md`}>React</span>
          </motion.div>
          <motion.div className="absolute bottom-0 left-2 sm:left-4 md:left-10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1, ease: "easeOut" }} whileHover={{ scale: 1.2, rotate: -360 }}>
            <span className={`inline-block px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold ${isDark ? "bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-900"} shadow-md`}>Next.js</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const { isDark } = useTheme();
  return (
    <section id="About" className={`py-12 sm:py-24 ${isDark ? "bg-gray-800" : "bg-indigo-50"}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center ${isDark ? "text-white" : "text-indigo-900"} mb-8 sm:mb-12`}>About Me</motion.h2>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`p-6 sm:p-8 rounded-2xl ${isDark ? "bg-gray-900/80 text-indigo-100" : "bg-white/80 text-indigo-900"} backdrop-blur-md shadow-xl max-w-3xl mx-auto`}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>I’m a results-driven Front-End Developer with over 2 years of experience, specializing in responsive, accessible web and mobile applications. My expertise lies in modern frameworks like React, Next.js, and React Native, delivering optimized, high-quality solutions for fintech and event management domains.</motion.p>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const { isDark } = useTheme();
  const timeline = [
    { year: "Feb 2024 – Present", role: "Front-End Developer", company: "FIKAA, Mumbai", desc: "Developed scalable fintech solutions with React and React Native, integrating payment gateways and KYC workflows." },
    { year: "Jan 2023 – Jun 2023", role: "Front-End Developer", company: "Plan My Venture, Mumbai", desc: "Led UI development for Profite.ai and Plan My Venture using MERN stack and real-time APIs." },
    { year: "Sep 2020 – May 2023", role: "Student", company: "BCA, College of Computer Science and I.T.", desc: "Earned a 9.2 CGPA while mastering programming and web development fundamentals." },
  ];

  return (
    <section id="Experience" className={`py-12 sm:py-24 ${isDark ? "bg-indigo-950" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center ${isDark ? "text-white" : "text-indigo-900"} mb-8 sm:mb-12`}>My Journey</motion.h2>
        <div className="relative">
          <motion.div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${isDark ? "bg-indigo-500" : "bg-indigo-300"} rounded-full hidden md:block`} initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1.5, ease: "easeInOut" }} />
          {timeline.map((item, index) => (
            <motion.div key={index} className="flex flex-col md:flex-row items-center mb-8 sm:mb-12" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
              <div className={`w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-right ${index % 2 === 0 ? "order-1" : "order-2"} mb-4 md:mb-0`}>
                <motion.h3 whileHover={{ scale: 1.05 }} className={`text-lg sm:text-xl font-semibold ${isDark ? "text-white" : "text-indigo-900"}`}>{item.role}</motion.h3>
                <p className={`${isDark ? "text-indigo-300" : "text-indigo-700"}`}>{item.company}</p>
                <p className={`${isDark ? "text-indigo-400" : "text-gray-600"} text-sm sm:text-base`}>{item.desc}</p>
              </div>
              <div className={`w-full md:w-1/2 pl-0 md:pl-8 text-center md:text-left ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                <motion.span whileHover={{ scale: 1.1 }} className={`inline-block px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base ${isDark ? "bg-indigo-500 text-white" : "bg-indigo-200 text-indigo-900"} font-semibold`}>{item.year}</motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const { isDark } = useTheme();
  return (
    <section id="Skills" className={`py-12 sm:py-24 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center ${isDark ? "text-white" : "text-indigo-900"} mb-8 sm:mb-12`}>Skills</motion.h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
              className={`p-4 sm:p-6 rounded-2xl ${isDark ? "bg-gray-800/80 text-white" : "bg-indigo-50/80 text-indigo-900"} shadow-lg flex flex-col items-center text-center backdrop-blur-md`}
            >
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>{skill.icon}</motion.div>
              <span className="mt-2 sm:mt-3 text-sm sm:text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Project = ({ title, image, description, viewLink, codeLink }) => {
  const { isDark } = useTheme();
  return (
    <motion.div className="relative w-full h-80 perspective-1000" whileHover={{ scale: 1.05, y: -10 }} transition={{ duration: 0.4, ease: "easeOut" }}>
      <motion.div className="w-full h-full transition-transform duration-600 transform-style-3d" initial={{ rotateY: 0 }} whileHover={{ rotateY: 180 }}>
        <div className={`absolute w-full h-full backface-hidden ${isDark ? "bg-gray-800 text-white" : "bg-white text-indigo-900"} rounded-2xl shadow-xl overflow-hidden`}>
          <img src={image} alt={title} className="w-full h-48 object-cover" /> {/* Image displayed here */}
          <div className="p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className={`${isDark ? "text-indigo-300" : "text-gray-600"} mt-2 text-sm`}>{description}</p>
          </div>
        </div>
        <div className={`absolute w-full h-full backface-hidden  rounded-2xl shadow-xl flex flex-col items-center justify-center transform rotate-y-180 p-4`}>
          {/* <h3 className="text-xl font-semibold mb-4">{title}</h3> */}
          <div className="flex space-x-4">
            {viewLink && <a href={viewLink} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-full ${isDark ? "bg-indigo-500 hover:bg-indigo-600" : "bg-indigo-600 hover:bg-indigo-700"} text-white transition-all`}>Explore</a>}
            {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-full ${isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"} ${isDark ? "text-white" : "text-indigo-900"} transition-all`}>Code</a>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { isDark } = useTheme();
  return (
    <section id="Projects" className={`py-12 sm:py-24 ${isDark ? "bg-gray-800" : "bg-indigo-50"}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center ${isDark ? "text-white" : "text-indigo-900"} mb-8 sm:mb-12`}>My Projects</motion.h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Project {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { isDark } = useTheme();
  return (
    <section id="Contacts" className={`py-12 sm:py-24 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-indigo-900"} mb-6 sm:mb-8`}>Get in Touch</motion.h2>
        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-base sm:text-lg ${isDark ? "text-indigo-200" : "text-indigo-700"} mb-8 sm:mb-12`}>Let’s create something extraordinary together!</motion.p>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {[
            { href: "https://www.linkedin.com/in/ganesh-nagargoje-3a5238231/", icon: <RiLinkedinFill /> },
            { href: "https://twitter.com/ganunagargoje16", icon: <RiTwitterFill /> },
            { href: "mailto:ganesh.nagargoje045@gmail.com", icon: <RiMailFill /> },
            { href: "https://github.com/Ganesh-16N", icon: <RiGithubFill /> },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.3, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`text-3xl sm:text-4xl ${isDark ? "text-indigo-300 hover:text-indigo-500" : "text-indigo-600 hover:text-indigo-800"} transition-colors duration-300`}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

function App() {
  const { isDark, setIsDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`${isDark ? "bg-black text-white" : "bg-indigo-50 text-indigo-900"} min-h-screen font-sans transition-colors duration-500`}>
      <motion.nav
        className={`fixed w-full top-0 z-20 ${isDark ? "bg-gray-900/90" : "bg-white/90"} backdrop-blur-lg shadow-lg border-b border-indigo-500/20`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl sm:text-2xl font-bold tracking-tight">Ganesh Nagargoje</motion.div>
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {["Home", "About", "Experience", "Skills", "Projects", "Contacts"].map((item) => (
              <Link
                key={item}
                to={item}
                spy
                smooth
                offset={-70}
                duration={700}
                className={`cursor-pointer text-sm lg:text-base ${isDark ? "text-indigo-200 hover:text-indigo-400" : "text-indigo-700 hover:text-indigo-900"} font-medium transition-colors`}
              >
                <motion.span whileHover={{ y: -2 }}>{item}</motion.span>
              </Link>
            ))}
            <motion.button onClick={() => setIsDark(!isDark)} whileHover={{ rotate: 180 }} whileTap={{ scale: 0.9 }} className="text-xl sm:text-2xl">
              {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-600" />}
            </motion.button>
          </div>
          <motion.button onClick={toggleMenu} whileTap={{ scale: 0.9 }} className="md:hidden text-2xl sm:text-3xl">{menuOpen ? <FiX /> : <FiMenu />}</motion.button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={`md:hidden ${isDark ? "bg-gray-900" : "bg-white"} text-center py-6 shadow-lg`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              {["Home", "About", "Experience", "Skills", "Projects", "Contacts"].map((item) => (
                <Link key={item} to={item} spy smooth offset={-70} duration={700} className={`block py-3 text-base sm:text-lg ${isDark ? "text-indigo-200 hover:text-indigo-400" : "text-indigo-700 hover:text-indigo-900"} font-medium`} onClick={toggleMenu}>
                  <motion.span whileHover={{ scale: 1.1 }}>{item}</motion.span>
                </Link>
              ))}
              <motion.button onClick={() => setIsDark(!isDark)} whileHover={{ rotate: 180 }} whileTap={{ scale: 0.9 }} className="mt-4 text-xl sm:text-2xl">{isDark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-600" />}</motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className="pt-16 sm:pt-20">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}