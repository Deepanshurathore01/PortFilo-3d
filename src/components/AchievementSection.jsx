import React from "react";

const achievements = [
  {
    title: "LeetCode",
    description:
      "Achieved a 365 Days Streak Badge with 550+ questions solved, ranking in the top 0.4% globally.",
    icon: "📘",
  },
  {
    title: "Vultr Cloud Hackathon",
    description: "Earned a valuable certification for innovative contributions.",
    icon: "☁️",
  },
  {
    title: "Clash 2.0 Hackathon",
    description:
      "Awarded for designing a full-stack event management platform, competing against 30+ teams.",
    icon: "🏆",
  },
  {
    title: "ReImagine Hackathon Finalist",
    description:
      "Developed a high-fidelity redesign of Netflix and KFC websites, earning finalist recognition.",
    icon: "🚀",
  },
  {
    title: "GeeksForGeeks",
    description:
      "Secured a 2-star rating, ranking in the top 1% within my institution.",
    icon: "💻",
  },
  {
    title: "TCSion | Young Professional",
    description:
      "Completed the program to enhance professional skills.",
    icon: "🎓",
  },
  {
    title: "CodeChef Silver Badge",
    description:
      "Recently earned the Silver Badge for outstanding problem-solving skills.",
    icon: "🥈",
  },
  {
    title: "HackerRank 3-Star Coder",
    description:
      "Achieved 3-star rating on HackerRank, showcasing strong problem-solving ability.",
    icon: "⭐",
  }
];

const AchievementSection = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-16 px-6" id="achievements">
      <h2 className="text-5xl text-center text-yellow-400 font-extrabold mb-12 animate-pulse">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white shadow-lg rounded-xl p-6 transform transition duration-500 hover:scale-110 hover:shadow-2xl hover:bg-yellow-400 hover:text-black flex flex-col items-center"
          >
            <div className="text-5xl mb-4 animate-bounce">{achievement.icon}</div>
            <h3 className="text-2xl font-bold text-center">{achievement.title}</h3>
            <p className="mt-4 text-center text-gray-300 hover:text-black">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
