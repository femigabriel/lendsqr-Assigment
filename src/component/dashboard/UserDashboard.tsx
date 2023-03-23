import React from "react";
const userLoans = "/images//dashboard/userLoans.svg";
const usersActive = "/images//dashboard/usersActive.svg";
const usersIcon = "/images//dashboard/usersIcon.svg";
const userSavings = "/images//dashboard/userSavings.svg";
import CountUp from "react-countup";

const user = [
  {
    id: 0,
    title: "Users",
    number: <CountUp start={100} end={2453} duration={3} />,
    userIcon: <img src={usersIcon} className="users-icon" alt="" />,
  },
  {
    id: 1,
    title: "Active Users",
    number: <CountUp start={300} end={1584} duration={3} />,
    userIcon: <img src={usersActive} className="users-icon" alt="" />,
  },
  {
    id: 2,
    title: "Users with Loans",
    number: <CountUp start={100} end={1573} duration={3} />,
    userIcon: <img src={userLoans} className="users-icon" alt="" />,
  },
  {
    id: 3,
    title: "Users with Savings",
    number: <CountUp start={50} end={2057} duration={3} />,
    userIcon: <img src={userSavings} className="users-icon" alt="" />,
  },
];

export default function UserDashboard() {
  return (
    <div className="userDashboard">
      <div className="userDashboard-title">
        <h1>Users</h1>
      </div>
      <div className="userDashboard-box">
        {user.map((list, key) => (
          <div key={key} className="userContent-box">
            {list.userIcon}
            <span className="userContent-title"> {list.title}</span>
            <span className="userContent-number"> {list.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
