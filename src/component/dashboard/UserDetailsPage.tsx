import React, { useState } from 'react'
import Link from 'next/link'
const backArrow = '/images//dashboard/userDetails/backArrow.svg'
const avatar = '/images//dashboard/userDetails/avatar.svg'
const starIcon = '/images//dashboard/userDetails/starIcon.svg'
const shadedStar = '/images//dashboard/userDetails/shadedStar.svg'
import { useSearchParams } from 'next/navigation'

export default function UserDetails() {
  const searchParams = useSearchParams();
  const user = JSON.parse(searchParams.get('search') || '');
  // try {
  // } catch (e) {
  //   console.error(e)
  // }

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
          <img src={user.profile.avatar} className="avatar" alt="avatar" />
          <div className="user-name">
            <h3>
              {user.profile.firstName} {''}
              {user.profile.lastName}
            </h3>
            <p>{user.accountNumber}</p>
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
            <h3>₦ {user.accountBalance}</h3>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <div className="users-menu">
          <nav className="usersmenu-lists">
            <li className="active-list">
              <Link className="usersmenu-link" href="/userDetails">
                General Details
              </Link>
            </li>
            <li className="">
              <Link className="usersmenu-link" href="/document">
                Documents
              </Link>
            </li>
            <li className="">
              <Link className="usersmenu-link" href="/bankDetails">
                Bank Details
              </Link>
            </li>
            <li className="">
              <Link className="usersmenu-link" href="/loans">
                Loans
              </Link>
            </li>
            <li className="">
              <Link className="usersmenu-link" href="/bankDetails">
                Savings
              </Link>
            </li>
            <li className="">
              <Link className="usersmenu-link" href="/bankDetails">
                App and System
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
  )
}
