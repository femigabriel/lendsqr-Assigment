import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function GeneralDashbard() {
  const searchParams = useSearchParams()
  const user = JSON.parse(searchParams.get('search') || '')

  return (
    <div className="userDetailsDashboard">
      <div className="userDetailsDashboard-box">
        <div className="userDetailsDashboard-content">
          <div className="userInfo-content">
            <div className="title">
              <h3>Personal Information</h3>
            </div>
            <div className="personal-info">
              <div>
                <h4>full Name</h4>
                <p>
                  {user.profile.firstName} {''}
                  {user.profile.lastName}
                </p>
              </div>
              <div>
                <h4>phone number</h4>
                <p>{user.guarantor.phoneNumber.substring(0, 15)}</p>
              </div>
              <div>
                <h4>Email Address</h4>
                <p> {user.email}</p>
              </div>
              <div>
                <h4>Bvn</h4>
                <p> {user.profile.bvn}</p>
              </div>
              <div>
                <p> {user.profile.gender}</p>
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
                <p>{user.education.level}</p>
              </div>
              <div>
                <h4>employment status</h4>
                <p>{user.education.employmentStatus}</p>
              </div>
              <div>
                <h4>sector of employment</h4>
                <p>{user.education.sector}</p>
              </div>
              <div>
                <h4>Duration of employment</h4>
                <p>{user.education.duration}</p>
              </div>
              <div>
                <h4>Office email</h4>
                <p>{user.education.officeEmail}</p>
              </div>
              <div>
                <h4>Monthly income</h4>
                <p>
                  {user.education.monthlyIncome[0]} -{' '}
                  {user.education.monthlyIncome[1]}
                </p>
              </div>
              <div>
                <h4>loan repayment</h4>
                <p>{user.education.loanRepayment}</p>
              </div>
            </div>
            <div className="userInfo-content">
              <div className="title">
                <h3>Socials</h3>
              </div>
              <div className="status-info">
                <div>
                  <h4>Twitter</h4>
                  <p>{user.socials.twitter}</p>
                </div>
                <div>
                  <h4>facebook</h4>
                  <p>{user.socials.facebook}</p>
                </div>
                <div>
                  <h4>instagram</h4>
                  <p>{user.socials.instagram}</p>
                </div>
              </div>
            </div>
            <div className="userInfo-content">
              <div className="title">
                <h3>Guarantor</h3>
              </div>
              <div className="status-info">
                <div>
                  <h4>full Name</h4>
                  <p>{user.guarantor.firstName}</p>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>{user.guarantor.phoneNumber.substring(0, 13)}</p>
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>{user.guarantor.address}</p>
                </div>
                <div>
                  <h4>Relationship</h4>
                  <p>Father</p>
                </div>
                <div>
                  <h4>full Name</h4>
                  <p>{user.guarantor.firstName}</p>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>{user.guarantor.phoneNumber.substring(0, 14)}</p>
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>{user.guarantor.address}</p>
                </div>
                <div>
                  <h4>Relationship</h4>
                  <p>Father</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
