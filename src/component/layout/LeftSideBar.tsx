import React from "react";
const briefcase = "/images/dashboard/sidebar/briefcase.svg";
const handshake = "/images//dashboard/sidebar/handshake.svg";
const npbank = "/images//dashboard/sidebar/npbank.svg";
const home = "/images//dashboard/sidebar/home.svg";
const sack = "/images//dashboard/sidebar/sack.svg";
const scroll = "/images//dashboard/sidebar/scroll.svg";
const coinsSolid = "/images//dashboard/sidebar/coinsSolid.svg";
const userFriends = "/images//dashboard/sidebar/userFriends.svg";
const userCheck = "/images//dashboard/sidebar/userCheck.svg";
const userTimes = "/images//dashboard/sidebar/userTimes.svg";
const users = "/images//dashboard/sidebar/users.svg";
const piggyBank = "/images//dashboard/sidebar/piggyBank.svg";
const icon = "/images//dashboard/sidebar/icon.svg";
const galaxy = "/images//dashboard/sidebar/galaxy.svg";
const userCog = "/images//dashboard/sidebar/userCog.svg";
const chartbar = "/images//dashboard/sidebar/chartbar.svg";
const sliders = "/images//dashboard/sidebar/sliders.svg";
const badgePercent = "/images//dashboard/sidebar/badgePercent.svg";
const clipboardList = "/images//dashboard/sidebar/clipboardList.svg";
const downArrow = "/images//dashboard/sidebar/downArrow.svg";
import Link from "next/link";
const sideBarItems = [
  {
    id: 0,
    name: "Users",
    title: "Orgnaization",
    icon: <img src={userFriends} className="sideBar-icon" alt="" />,
    titleIcon: <img src={briefcase} className="sideBar-icon" alt="" />,
    settingName: "Preferences",
    settingIcon: <img src={sliders} className="sideBar-icon" alt="" />,
  },
  {
    id: 1,
    name: "Guarantors",
    title: "Loan Products",
    icon: <img src={users} className="sideBar-icon" alt="" />,
    titleIcon: <img src={npbank} className="sideBar-icon" alt="" />,
    settingName: "Fess and Pricing",
    settingIcon: <img src={badgePercent} className="sideBar-icon" alt="" />,
  },
  {
    id: 2,
    name: "Loans",
    title: "Saving Products",
    icon: <img src={sack} className="sideBar-icon" alt="" />,
    titleIcon: <img src={npbank} className="sideBar-icon" alt="" />,
    settingName: "Audit Logs",
    settingIcon: <img src={clipboardList} className="sideBar-icon" alt="" />,
  },
  {
    id: 3,
    name: "Decision Models",
    title: "Fees and Charges",
    icon: <img src={handshake} className="sideBar-icon" alt="" />,
    titleIcon: <img src={coinsSolid} className="sideBar-icon" alt="" />,
  },
  {
    id: 4,
    name: "Savings",
    title: "Transactions",
    icon: <img src={piggyBank} className="sideBar-icon" alt="" />,
    titleIcon: <img src={icon} className="sideBar-icon" alt="" />,
  },
  {
    id: 5,
    name: "Loan Requests",
    title: "Services",
    icon: <img src={npbank} className="sideBar-icon" alt="" />,
    titleIcon: <img src={galaxy} className="sideBar-icon" alt="" />,
  },
  {
    id: 6,
    name: "Whitelist",
    title: "Service Account",
    icon: <img src={userCheck} className="sideBar-icon" alt="" />,
    titleIcon: <img src={userCog} className="sideBar-icon" alt="" />,
  },
  {
    id: 7,
    name: "Karma",
    title: "Settlements",
    icon: <img src={userTimes} className="sideBar-icon" alt="" />,
    titleIcon: <img src={scroll} className="sideBar-icon" alt="" />,
  },
  {
    id: 8,
    // name: "Karma",
    title: "Reports",
    // icon: <FaUserTimes className="sideBar-icon" />,
    titleIcon: <img src={chartbar} className="sideBar-icon" alt="" />,
  },
];

function LeftSideBar() {
  return (
    <div className="leftSide-bar">
      <div className="switch-label">
        <span className="slider-switch">
          <img src={briefcase} className="sideBar-icon" alt="" />
          Switch Orgnaization
          <img src={downArrow} className="switch-icon" alt="" />
        </span>
      </div>
      <div className="sidebar-label">
        <Link className="sidebar-link" href="/dashboard">
          <span className="">
            <img src={userFriends} className="sideBar-icon" alt="" />
            Dashboard
          </span>
        </Link>
      </div>
      <div className="sidebar-label">
        <span className="">Customers</span>
      </div>
      <nav>
        {sideBarItems.map((list, key) => (
          <li key={key} className="sideBar-list">
            {list.icon}
            {list.name}
          </li>
        ))}
      </nav>
      <div className="sidebar-label">
        <span className="">Businesses</span>
      </div>
      <nav>
        {sideBarItems.map((list, key) => (
          <li key={key} className="sideBar-list">
            {list.titleIcon}
            {list.title}
          </li>
        ))}
      </nav>
      <div className="sidebar-label">
        <span className="">Settings</span>
      </div>
      <nav>
        {sideBarItems.map((list, key) => (
          <li key={key} className="sideBar-list">
            {list.settingIcon}
            {list.settingName}
          </li>
        ))}
      </nav>
    </div>
  );
}

export default LeftSideBar;
