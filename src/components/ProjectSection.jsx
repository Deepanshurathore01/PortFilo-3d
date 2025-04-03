import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Uber Clone",
    description:
      "A feature-rich Uber clone application with an interactive design and smooth user experience. Built with modern web technologies, it includes real-time location tracking, ride booking, and user authentication for seamless usability.",

    githubLink: "https://github.com/Deepanshurathore01/Uber-Project",
  },
  {
    title: "SmartSpender – Money Management",
    description:
      "A MERN-based expense management application with features to add, view, and manage expenses. Integrated advanced reporting tools for financial insights and secured user data with OAuth 2.0 authentication.",

    githubLink: "https://github.com/Deepanshurathore01/SmartSpender",
  },
  {
    title: "EventHive",
    description:
      "A MERN-based event organizing and booking platform offering smooth user authentication, dynamic CRUD functionality, and real-time event booking with seamless backend data fetching.",

    githubLink: "https://github.com/Deepanshurathore01/EventHive",
  },
  {
    title: "OS Process Scheduling Simulation",
    description:
      "A C++ simulator to analyze CPU scheduling algorithms like FCFS, SJF, and Round Robin. Utilized data structures like priority queues and linked lists to calculate performance metrics and enabled customizable input scenarios.",

    githubLink: "https://github.com/Deepanshurathore01/Scheduling-Algo",
  },

  {
    title: "Malware Detection App",
    description:
      "A MERN-based cybersecurity application that detects malware patterns using AI-driven analysis. Includes real-time scanning, a user-friendly dashboard, and secured authentication.",

    githubLink: "https://github.com/Deepanshurathore01/Malware-Detection",
  },
];

const ProjectSection = () => {
  return (
    <div className="p-10 bg-black text-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-8">Our Best Projects</h2>
      <p className="text-center text-gray-400 mb-12">
        Explore some of the best projects built with modern web technologies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 transition-transform hover:scale-105 hover:border-blue-500 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-3">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
