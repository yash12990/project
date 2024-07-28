import { FaRegSquareFull, FaRegCircle } from "react-icons/fa6";
import { PiSquaresFour } from "react-icons/pi";
import { PiTriangleBold } from "react-icons/pi";

export const routeList = [
  {
    key: "route01",
    icon: <PiTriangleBold />,
    title: "Route 1",
    url: "/route01",
    // component: pages.Registrations,
  },
  {
    key: "route02",
    icon: <FaRegSquareFull />,
    title: "Route 2",
    url: "/route02",
    // component: pages.Registrations,
  },
  {
    key: "route03",
    icon: <FaRegCircle />,
    title: "Route 3",
    url: "/route03",
    // component: pages.Registrations,
  },
  {
    key: "route04",
    icon: <PiSquaresFour />,
    title: "Route 4",
    url: "/route04",
    // component: pages.Registrations,
  },
];

export const primaryRoutes = [
  { icon: <FaRegCircle /> },
  { icon: <FaRegSquareFull /> },
  { icon: <PiSquaresFour /> },
];
