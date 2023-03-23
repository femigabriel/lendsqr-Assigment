import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Link from "next/link";
const rightArrow = "/images//dashboard/table/rightArrow.svg";
const leftArrow = "/images//dashboard/table/leftArrow.svg";
const filterResults = "/images//dashboard/table/filterResults.svg";
const moreIcon = "/images//dashboard/table/moreIcon.svg";
const viewIcon = "/images//dashboard/dropdown/viewIcon.svg";
const deleteUser = "/images//dashboard/dropdown/deleteUser.svg";
const addUser = "/images//dashboard/dropdown/addUser.svg";
import { FIlterDropdwon } from "./FIlterDropdwon";
import ApiServices from "@/services/ApiServices";
const fetchData = () => {
  return axios.get(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
  );
};

export default function UserTable() {
  // const { isLoading, isError, data } = useQuery("users", fetchData);
  const fractionalCount = 10;
  const [selectValue, setSelectValue] = useState(fractionalCount);
  const [open, setOpen] = useState({});
  const [currentSlice, setCurrentSlice] = useState(0);

  const { isLoading, isError, data } = useQuery(
    "fetchUsers",
    ApiServices.fetchUserData
  );
  if (isLoading) {
    return (
      <div className="isLoading">
        loading users Information, Please wait a bit...
      </div>
    );
  }

  if (isError) {
    return <div className="isError">Something went wrong...</div>;
  }
  console.log({ data });

  const handleOpen = (item) => {
    if (open?.id) {
      setOpen({});
    } else {
      setOpen({});
      setOpen(item);
    }
  };
  if (isLoading) {
    return (
      <div className="isLoading">
        loading users Information, Please wait a bit...
      </div>
    );
  }

  // if (isError) {
  //   return <div className="isError">Something went wrong...</div>;
  // }

  const totalDataCount = data?.data?.length;

  const handleChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setSelectValue(value);
  };
  const handleClick = (e) => {
    e.preventDefault();
  };
  const paginateTableData = (f) => {
    setCurrentSlice(f - 1);
  };
  console.log("The button was clicked.", currentSlice);

  return (
    <div className="user-table">
      <table className="rwd-table">
        <thead>
          <tr>
            <th className="table-head">
              organization
              <button className="table-icon_btn">
                <FIlterDropdwon />
              </button>
            </th>
            <th className="table-head">
              Username
              <button className="table-icon_btn">
                <FIlterDropdwon />
              </button>
            </th>
            <th className="table-head">
              Email
              <button className="table-icon_btn">
                <FIlterDropdwon />
              </button>
            </th>
            <th className="table-head">
              Phone number
              <button className="table-icon_btn">
                <FIlterDropdwon />
              </button>
            </th>
            <th className="table-head">
              Date joined
              <button className="table-icon_btn">
                <FIlterDropdwon />
              </button>
            </th>
            <th className="table-head">
              Status
              <button className="table-icon_btn">
                <FIlterDropdwon />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.slice(currentSlice, selectValue).map((item, key) => {
            return (
              <tr key={key} onChange={handleChange}>
                <td className="userTable-item" data-th="organization">
                  {item?.orgName.substring(0, 10)}
                </td>
                <td className="userTable-item" data-th="Username">
                  {item?.userName}
                </td>
                <td className="userTable-item" data-th="Email">
                  {item?.email}
                </td>
                <td className="uuserTable-item" data-th="Phone number">
                  {item?.profile?.phoneNumber.substring(0, 13)}
                </td>
                <td className="userTable-item" data-th="Date joined">
                  {item?.createdAt.substring(0, 10)}{" "}
                  {item?.createdAt.substring(11, 16)} AM
                </td>
                <td data-th="Status" className="user-status">
                  <button className="btn-status">Inactive</button>
                </td>
                <td className="user-more" data-th="">
                  <button
                    onClick={() => handleOpen(item)}
                    className="tableIcon-btn"
                  >
                    <img src={moreIcon} className="table-icon" alt="" />
                  </button>
                  {open.id == item.id ? (
                    <ul className="dropdown-menu">
                      <li className="menu-item">
                        <Link className="menuItem-link" href="/userDetails">
                          <div className="dropdown-items">
                            <img
                              src={viewIcon}
                              className="dropdown-icon"
                              alt="dropdown-icon"
                            />
                            <span>View Details</span>
                          </div>
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link className="menuItem-link" href="/">
                          <div className="dropdown-items">
                            <img
                              src={deleteUser}
                              className="dropdown-icon"
                              alt="dropdown-icon"
                            />
                            <span>Blacklist User</span>
                          </div>
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link className="menuItem-link" href="/">
                          <div className="dropdown-items">
                            <img
                              src={addUser}
                              className="dropdown-icon"
                              alt="dropdown-icon"
                            />
                            <span>Activate User</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                  {open ? "" : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <div className="pagination_select">
          <span>Showing</span>
          <div className="select-numb">
            <select onChange={handleChange} className="">
              {Array.from(
                Array(totalDataCount / fractionalCount),
                (_, index) => index + 1
              ).map((item) => (
                <option value={item * fractionalCount}>
                  {item * fractionalCount}
                </option>
              ))}
            </select>
          </div>
          <span>out of {totalDataCount}</span>
        </div>
        <div className="page-numbering">
          <button onClick={handleClick} className="table-icon">
            <img src={leftArrow} className="left-icon" alt="" />
          </button>
          <div className="number">
            {Array.from(
              Array(totalDataCount / fractionalCount),
              (_, index) => index + 1
            ).map((item) => (
              <button
                onClick={() => paginateTableData(item)}
                className="page_numbers"
              >
                {item}
              </button>
            ))}
          </div>
          <button onClick={handleClick} className="table-icon">
            <img src={rightArrow} className="right-icon" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
