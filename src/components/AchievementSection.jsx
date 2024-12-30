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
];

const AchievementSection = () => {
  return (
    <div className="bg-black py-12 px-6" id="achievements">
      <h2 className="text-4xl text-center text-yellow-400 font-bold mb-8">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-yellow-400 hover:text-black"
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{achievement.icon}</div>
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
            </div>
            <p className="mt-4">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
