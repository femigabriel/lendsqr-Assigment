import React from 'react'
const profilePix = '../images/dashboard/profilePix.png'
const logo = '/images//dashboard/logo.svg'
const downArrow = '/images//dashboard/sidebar/downArrow.svg'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="header-page">
      <header>
        <Link href="/">
          <img src={logo} className="header_logo" />
        </Link>
        <form 
        // autocomplete="on"
         id="search" method="POST">
          <input
            id="search-input"
            // minlength="3"
            name="query"
            placeholder="Search for anything"
            role="search"
            type="search"
          />
          <button aria-label="submit" type="submit">
          </button>
        </form>
        <div className="profile-detatils">
          <span className="profile-docs">
            <a href="" className="">
              Docs
            </a>
          </span>
          <div className="profile-img">
            <img src={profilePix} className="" alt="profile" />
          </div>
          <div className="profile-name">
            <span className="">Adedeji</span>
            <img src={downArrow} className="profile-icon" alt="" />
          </div>
        </div>
      </header>
    </div>
  )
}
