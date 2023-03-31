import React from 'react';
import Home from 'pages/Home'

import GitHubIcon from "@mui/icons-material/GitHub";
import GroupsIcon from '@mui/icons-material/Groups';
import HouseIcon from '@mui/icons-material/House';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BlogIcon from '@mui/icons-material/BorderColor';

const routes = [
  {
    name: "Home",
    icon: <HouseIcon />,
    component: <Home/>,
    route: "/"
  },
  {
    name: "Teams",
    icon: <GroupsIcon />,
    collapse: [
      {
        name: "PLUB",
        description: "취미 생활, 소모임 커뮤니티 활동을 위한 플랫폼",
        href: "https://github.com/plub2022",
      },
      {
        name: "SOEM",
        description: "Share Our Enthusiasm",
        href: "https://github.com/shareourenthusiasm",
      },
      {
        name: "PayItForward",
        description: "System Integrator Team",
        href: "/payitforward",
      },
    ],
  },
  {
    name: "Linkedin",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/%EC%98%81%EC%A4%80-%EB%85%B8-377113229/",
  },
  {
    name: "Tistory",
    icon: <BlogIcon />,
    href: "https://youngjun-99.tistory.com/",
  },
  {
    name: "Github",
    icon: <GitHubIcon />,
    href: "https://github.com/youngjun-99/",
  },
];

export default routes;