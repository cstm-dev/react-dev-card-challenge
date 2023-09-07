function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let rdmColor = "#";

  for (let i = 0; i < 6; i++) {
    rdmColor += letters[Math.floor(Math.random() * 16)];
  }

  return rdmColor;
}

const skills = [
  {
    name: "HTML + CSS",
    level: "👍",
    color: getRandomColor(),
  },
  {
    name: "JS",
    level: "👍",
    color: getRandomColor(),
  },
  {
    name: "Node.js",
    level: "👍",
    color: getRandomColor(),
  },
  {
    name: "Express",
    level: "👍",
    color: getRandomColor(),
  },
  {
    name: "MongoDb + Mongoose",
    level: "👍",
    color: getRandomColor(),
  },
  {
    name: "SQL",
    level: "💪",
    color: getRandomColor(),
  },
  {
    name: "Git + GitHub",
    level: "👍",
    color: getRandomColor(),
  },
  {
    name: "WebDesign",
    level: "👶",
    color: getRandomColor(),
  },
  {
    name: "Bootstrap",
    level: "👶",
    color: getRandomColor(),
  },
  {
    name: "Tailwind",
    level: "👶",
    color: getRandomColor(),
  },
  {
    name: "React",
    level: "👶",
    color: getRandomColor(),
  },
  {
    name: "Next.js",
    level: "❓",
    color: getRandomColor(),
  },
  {
    name: "Solidity",
    level: "❓",
    color: getRandomColor(),
  },
];

export { skills };
