import React, { useState } from 'react'
const filterResults = '/images//dashboard/table/filterResults.svg'

export const FIlterDropdwon = () => {
  const [dropdownOpen, setDropdownOpen] = useState({})
  const handleDopdownOpen = () => {
    setDropdownOpen(!dropdownOpen)
    console.log('hello')
  }

  return (
    <div>
      <button className="table-icon_btn" onClick={handleDopdownOpen}>
        <img src={filterResults} className="table-icon" alt="filter" />
      </button>
      {dropdownOpen ? (
        ''
      ) : (
        <div className="filter-dropdown">
          <form className="">
            <div className="filter_input">
              <label>Organization</label>
              <select className="filter_select">
                <option>Select</option>
              </select>
            </div>
            <div className="filter_input">
              <label>Username</label>
              <select className="filter_select">
                <option>User</option>
              </select>
            </div>
            <div className="filter_input">
              <label>Email</label>
              <select className="filter_select">
                <option>Email</option>
              </select>
            </div>
            <div className="filter_input">
              <label>Date</label>
              <input type="date" placeholder="Date" className="filter_select" />
            </div>
            <div className="filter_input">
              <label>Phone Number</label>
              <select className="filter_select">
                <input
                  type="number"
                  placeholder="Phone NUmber"
                  className="filter_select"
                />
              </select>
            </div>
            <div className="filter_input">
              <label>Status</label>
              <select className="filter_select">
                <option>Status</option>
              </select>
            </div>
            <div className="filter-buttons">
              <button className="reset_btn">Reset</button>
              <button className="filter_btn">Filter</button>
            </div>
          </form>

        </div>
      )}
    </div>
  )
}
