import React from "react";

import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import AchievementSection from "./components/AchievementSection";

const App = () => {
  return (
    <>
      <Navbar />
      <FrontPage />
      <Skills />
      <ProjectSection />
      <AchievementSection />
      <About />
      <ContactForm />
    </>
  );
};

export default App;
