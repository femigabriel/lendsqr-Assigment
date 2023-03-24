import React, { useState } from 'react'
import { useQuery } from 'react-query'
const filterResults = '/images//dashboard/table/filterResults.svg'
import ApiServices from '@/services/ApiServices'
export const FIlterDropdwon = () => {
  const [dropdownOpen, setDropdownOpen] = useState({})
  const handleDopdownOpen = () => {
    setDropdownOpen(!dropdownOpen)
    console.log('hello')
  }

  const { isLoading, isError, data } = useQuery(
    'fetchUsers',
    ApiServices.fetchUserData,
  )
  if (isLoading) {
    return (
      <div className="isLoading">loading users' data, Please wait a bit...</div>
    )
  }

  if (isError) {
    return <div className="isError">Something went wrong...</div>
  }
  const user = data?.data
  console.log({ user })
  return (
    <div>
      <div className="table-icon_btn" onClick={handleDopdownOpen}>
        <img src={filterResults} className="table-icon" alt="filter" />
      </div>
      {dropdownOpen ? (
        ''
      ) : (
        <div className="filter-dropdown">
          <form className="">
            <div className="filter_input">
              <label>Organization</label>
              <select className="filter_select">
                {user?.map((item: any, key: any) => {
                  return (
                    <option key={key.id}>
                      {item?.orgName.substring(0, 10)}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="filter_input">
              <label>Username</label>
              <select className="filter_select">
                {user?.map((item: any, key: any) => {
                  return <option key={key.id}>{item?.userName}</option>
                })}
              </select>
            </div>
            <div className="filter_input">
              <label>Email</label>
              <select className="filter_select">
                {user?.map((item: any, key: any) => {
                  return <option key={key.id}>{item?.email}</option>
                })}
              </select>
            </div>
            <div className="filter_input">
              <label>Date</label>

              <select className="filter_select">
                {user?.map((item: any, key: any) => {
                  return (
                    <option key={key.id}>
                      {item?.createdAt.substring(0, 10)}{' '}
                      {item?.createdAt.substring(11, 16)} AM
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="filter_input">
              <label>Phone Number</label>
              <select className="filter_select">
                {user?.map((item: any, key: any) => {
                  return (
                    <option key={key.id}>
                      {item?.phoneNumber.substring(0, 15)}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="filter_input">
              <label>Status</label>
              <select className="filter_select">
                <option>Active</option>
                <option>Inactive</option>
                <option>Blacklisted</option>
                <option>Pending</option>
                <option>Active</option>
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
