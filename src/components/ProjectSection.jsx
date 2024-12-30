import React from "react";

const projects = [
  {
    title: "Uber Clone",
    description:
      "A feature-rich Uber clone application with an interactive design and smooth user experience. Built with modern web technologies, it includes real-time location tracking, ride booking, and user authentication for seamless usability.",
    liveLink: "https://your-live-project-link.com", // Replace with the actual live link if available
    githubLink: "https://github.com/Deepanshurathore01/Uber-Project",
  },
  {
    title: "SmartSpender – Money Management",
    description:
      "A MERN-based expense management application with features to add, view, and manage expenses. Integrated advanced reporting tools for financial insights and secured user data with OAuth 2.0 authentication.",
    liveLink: "https://your-live-project-link.com",
    githubLink: "https://github.com/yourrepo/smartspender",
  },
  {
    title: "EventHive",
    description:
      "A MERN-based event organizing and booking platform offering smooth user authentication, dynamic CRUD functionality, and real-time event booking with seamless backend data fetching.",
    liveLink: "https://your-live-project-link.com",
    githubLink: "https://github.com/yourrepo/eventhive",
  },
  {
    title: "OS Process Scheduling Simulation",
    description:
      "A C++ simulator to analyze CPU scheduling algorithms like FCFS, SJF, and Round Robin. Utilized data structures like priority queues and linked lists to calculate performance metrics and enabled customizable input scenarios.",
    liveLink: "https://your-live-project-link.com",
    githubLink: "https://github.com/yourrepo/os-process-scheduling",
  },
];

const ProjectSection = () => {
  return (
    <div className="project-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button live-button"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button github-button"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
