import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./Components/common/Navigation";
import LoadingSpinner from "./Components/common/LoadingSpinner";

// Lazy load components for better performance
const Hero = lazy(() => import("./Components/Hero"));
const About = lazy(() => import("./Components/About/About"));
const Experience = lazy(() => import("./Components/Experience/Experience"));
const ReactNativeShowcase = lazy(() => import("./Components/ReactNativeShowcase/ReactNativeShowcase"));
const Projects = lazy(() => import("./Components/Projects/Projects"));
const Contact = lazy(() => import("./Components/Contact/Contact"));

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-black">
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <Experience />
        <ReactNativeShowcase />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
};

// Wrapped App with Theme Provider
export default function Portfolio() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}