import goalImage from "../assets/Goal.jpg";
import handImage from "../assets/Natural User Interface.jpg";
import rocketImage from "../assets/Rocket.jpg";

const features: {
  title: string;
  img: string;
  description: string;
  flex: string;
}[] = [
  {
    title: "Smart Task Engine",
    img: rocketImage,
    description:
      "Every task is more than just a line on a list. It’s a dedicated command center that keeps you and your client in perfect sync.",
    flex: "p-20 mt-20 shadow-borderColor shadow-lg rounded-2xl w-5xl duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-xl",
  },
  {
    title: "Dynamic Command Center",
    img: goalImage,
    description:
      "Stop searching for what to do next. Our dashboard organizes your workflow based on urgency and real-time performance.",
    flex: "p-20 mt-20 shadow-borderColor shadow-lg rounded-2xl w-5xl ml-100 duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-xl",
  },
  {
    title: "The Smart Nudge System",
    img: handImage,
    description:
      "Stay productive and healthy with a system that watches your back. Our automated prompts keep you accountable without the need for a human manager.",
    flex: "p-20 mt-20 shadow-borderColor shadow-lg rounded-2xl w-5xl duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-xl",
  },
];

export default features;
