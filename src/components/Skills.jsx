import React from "react";


const Skills = () => {
  const skills = [
    { name: "C/C++", icon: "💻", description: "Efficient system programming" },
    { name: "DSA", icon: "💡", description: "Optimized algorithms and data structures" },
    { name: "MERN Stack", icon: "🌐", description: "Full-stack web development" },
    { name: "HTML 5", icon: "🔤", description: "Markup language for web pages" },
    { name: "CSS", icon: "🎨", description: "Responsive styling and animations" },
    { name: "JavaScript", icon: "🟨", description: "Dynamic web development" },
    { name: "Git/GitHub", icon: "🐙", description: "Version control" },
   
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
