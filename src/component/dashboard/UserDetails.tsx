import React, { useState } from "react";
import Link from "next/link";
const backArrow = "/images//dashboard/userDetails/backArrow.svg";
const avatar = "/images//dashboard/userDetails/avatar.svg";
const starIcon = "/images//dashboard/userDetails/starIcon.svg";
const shadedStar = "/images//dashboard/userDetails/shadedStar.svg";

export default function UserDetails() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: any) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="user-details">
      <div className="userDetails-subhead">
        <div>
          <Link className="userDetails-link" href="/dashboard">
            <img src={backArrow} className="linkBack-icon" alt="back" />
            <span> Back to Users</span>
          </Link>
        </div>
        <div className="userDetails-menus">
          <div className="menus-item">
            <button className="blacklist">Blacklist User</button>
          </div>
          <div className="menus-item">
            <button className="active">Activate User</button>
          </div>
        </div>
      </div>

      <div className="userDetails-title">
        <h2>User Details</h2>
      </div>
      <div className="userDetails-info">
        <div className="userDetails-box">
          <img src={avatar} className="avatar" alt="avatar" />
          <div className="user-name">
            <h3>Grace Effiom</h3>
            <p>LSQFf587g90</p>
          </div>
          <div className="user-rating">
            <h3>User’s Tier</h3>
            <div className="rating">
              <img src={shadedStar} className="star-icon" alt="rating" />
              <img src={starIcon} className="star-icon" alt="rating" />
              <img src={starIcon} className="star-icon" alt="rating" />
            </div>
          </div>
          <div className="user-bankDetails">
            <h3>₦200,000.00</h3>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <div className="users-menu">
          <nav className="usersmenu-lists">
            <li className={isActive ? "active-list" : ""} onClick={handleClick}>
              General Details
            </li>
            <li className={isActive ? "" : ""} onClick={handleClick}>
              Documents
            </li>
            <li className={isActive ? "" : ""} onClick={handleClick}>
              Bank Details
            </li>
            <li className={isActive ? "" : ""} onClick={handleClick}>
              Loans
            </li>
            <li className={isActive ? "" : ""} onClick={handleClick}>
              Savings
            </li>
            <li className={isActive ? "" : ""} onClick={handleClick}>
              App and System
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}
