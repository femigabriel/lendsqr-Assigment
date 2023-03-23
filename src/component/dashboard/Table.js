import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Link from "next/link";
const moreIcon = "/images//dashboard/table/moreIcon.svg";
const viewIcon = "/images//dashboard/dropdown/viewIcon.svg";
const deleteUser = "/images//dashboard/dropdown/deleteUser.svg";
const addUser = "/images//dashboard/dropdown/addUser.svg";

export default function Table() {
  const fetchData = () => {
    return axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
  };
  const { isLoading, isError, data } = useQuery("users", fetchData);
  console.log({ data });
  const [open, setOpen] = useState({});
  const [selectValue, setSelectValue] = useState(10);

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

  if (isError) {
    return <div className="isError">Something went wrong...</div>;
  }
  const handleChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setSelectValue(value);
  };
  return (
    <div>
      <tbody>
        {data?.data?.slice(0, selectValue).map((item, key) => {
          return (
            <tr key={key} onChange={handleChange}>
              <td className="userTable-item" data-th="organization">
                {item?.education?.sector}
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
                {item?.createdAt.substring(0, 10)}
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
    </div>
  );
}
