import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import ReactTable from "react-table"; 
const fetchData = () => {
  return axios.get(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
  );
};
function UserDetailsDashboard({
  
  index,
  email,
  firstName,
  lastName,
  gender,
  bvn,
}) {
  const { isLoading, isError, data } = useQuery("users", fetchData);
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
  console.log("data", data.data);
  const table = [{  
    name: 'Ayaan',  
    age: 26  
    },{  
     name: 'Ahana',  
     age: 22  
     },{  
     name: 'Peter',  
     age: 40      
     },{  
     name: 'Virat',  
     age: 30  
     },{  
     name: 'Rohit',  
     age: 32  
     },{  
     name: 'Dhoni',  
     age: 37  
     }]  
 const columns = [{  
   Header: 'Name',  
   accessor: 'name'  
   },{  
   Header: 'Age',  
   accessor: 'age'  
   }] 
  return (
    <div className="userDetailsDashboard">
      <div className="userDetailsDashboard-box">
        {/* {data?.data?.map((info, key) => ( */}
        <div key={key} className="userDetailsDashboard-content">
          <div className="userInfo-content">
            <div className="title">
              <h3>Personal Information</h3>
            </div>
            <div className="personal-info">
              <div>
                <h4>full Name</h4>
                <p>
                  {firstName}
                  {lastName}
                </p>
              </div>
              <div>
                <h4>phone number</h4>
                <p>{phoneNumber}</p>
              </div>
              <div>
                <h4>Email Address</h4>
                <p>{email}</p>
              </div>
              <div>
                <h4>Bvn</h4>
                <p>{bvn}</p>
              </div>
              <div>
                <p>{gender}</p>
              </div>
              <div>
                <h4>Marital status</h4>
                <p>Single</p>
              </div>
              <div>
                <h4>children</h4>
                <p>None</p>
              </div>
              <div>
                <h4>Type of residence</h4>
                <p>Parent’s Apartment</p>
              </div>
            </div>
          </div>
          <div className="userInfo-content">
            <div className="title">
              <h3>Education and Employment</h3>
            </div>
            <div className="employment-info">
              <div>
                <h4>level of education</h4>
                <p>B.Sc</p>
              </div>
              <div>
                <h4>employment status</h4>
                <p>Employed</p>
              </div>
              <div>
                <h4>sector of employment</h4>
                <p>FinTech</p>
              </div>
              <div>
                <h4>Duration of employment</h4>
                <p>2 years</p>
              </div>
              <div>
                <h4>Office email</h4>
                <p>grace@lendsqr.com</p>
              </div>
              <div>
                <h4>Monthly income</h4>
                <p>₦200,000.00- ₦400,000.00</p>
              </div>
              <div>
                <h4>loan repayment</h4>
                <p>40,000</p>
              </div>
            </div>
            <div className="userInfo-content">
              <div className="title">
                <h3>Socials</h3>
              </div>
              <div className="status-info">
                <div>
                  <h4>Twitter</h4>
                  <p>@grace_effiom</p>
                </div>
                <div>
                  <h4>facebook</h4>
                  <p>Grace Effiom</p>
                </div>
                <div>
                  <h4>instagram</h4>
                  <p>@grace_effiom</p>
                </div>
              </div>
            </div>
            <div className="userInfo-content">
              <div className="title">
                <h3>Guarantor</h3>
              </div>
              <div className="status-info">
                <div>
                  <h4>Twitter</h4>
                  <p>@grace_effiom</p>
                </div>
                <div>
                  <h4>facebook</h4>
                  <p>Grace Effiom</p>
                </div>
                <div>
                  <h4>instagram</h4>
                  <p>@grace_effiom</p>
                </div>
                <div>
                  <h4>instagram</h4>
                  <p>@grace_effiom</p>
                </div>
                <div>
                  <h4>instagram</h4>
                  <p>@grace_effiom</p>
                </div>
                <div>
                  <h4>instagram</h4>
                  <p>@grace_effiom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
//     <div>  
//     <ReactTable  
//         table={table}  
//         columns={columns}  
//         defaultPageSize = {2}  
//         pageSizeOptions = {[2,4, 6]}  
//     />  
// </div>
  );
}

export default UserDetailsDashboard;
