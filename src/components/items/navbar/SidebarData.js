import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as GrIcons from "react-icons/gr";
// import * as BiIcons from "react-icons/bi";
// import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome />,
        clsName: "nav-text",
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <AiIcons.AiFillProfile />,
        clsName: "nav-text",
    },
    {
        title: "Links",
        clsName: "nav-text",
    },
    {
        title: "Current Plan",
        path: "/current",
        icon: <FaIcons.FaMoneyBillAlt />,
        clsName: "nav-text",
    },
    {
        title: "By-Gone Plan",
        path: "/bygone",
        icon: <FaIcons.FaMoneyBillWave />,
        clsName: "nav-text",
    },
];
