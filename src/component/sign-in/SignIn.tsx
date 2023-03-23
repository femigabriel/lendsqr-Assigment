import Link from 'next/link'
import React, { useState } from 'react'
import SIgnInForm from './SIgnInForm'
const logo = '/images/home/logo.svg'
const pablo = '/images/home/pablo.svg'

export default function SignIn() {
  return (
    <div className="sign-in-page">
      <div className="sign-in">
        <div className="">
          <div className="logo">
            <img src={logo} className="" />
          </div>
          <div className="">
            <img src={pablo} className="signin_img" />
          </div>
        </div>
        <div className="signin_form_page">
          <div className="form_container">
            <div className="form-content ">
              <div className="form-head">
                <h1 className="">Welcome!</h1>
                <p>Enter details to login</p>
              </div>
              <SIgnInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
