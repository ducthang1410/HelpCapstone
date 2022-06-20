import { AiOutlineHome, AiOutlineBarChart } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { HiDocumentText, HiDocumentReport } from "react-icons/hi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "home",
        icon: <AiOutlineHome />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "users",
        icon: <IoMdContacts />,
      },
      {
        name: "tests",
        icon: <HiDocumentText />,
      },
      {
        name: "testResults",
        icon: <HiDocumentReport />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const themeColors = [
  {
    color: "#FB8C00",
    name: "default-theme",
  },
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];
