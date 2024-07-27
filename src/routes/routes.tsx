import { DiAndroid, DiApple, DiAptana, DiBlackberry } from "react-icons/di";

export const routeList = [
  {
    key: "route01",
    icon: <DiAndroid />,
    title: "Route 1",
    url: "/route01",
    // component: pages.Registrations,
  },
  {
    key: "route02",
    icon: <DiApple />,
    title: "Route 2",
    url: "/route02",
    // component: pages.Registrations,
  },
  {
    key: "route03",
    icon: <DiAptana />,
    title: "Route 3",
    url: "/route03",
    // component: pages.Registrations,
  },
  {
    key: "route04",
    icon: <DiBlackberry />,
    title: "Route 4",
    url: "/route04",
    // component: pages.Registrations,
  },
];

export const primaryRoutes = [
  { icon: <DiBlackberry /> },
  { icon: <DiApple /> },
  { icon: <DiAptana /> },
];
