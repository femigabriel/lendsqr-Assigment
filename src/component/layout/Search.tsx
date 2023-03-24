import React from 'react'
import { Input } from '../sign-in/Input'
const searchIcon = '/images//dashboard/searchIcon.svg'

export default function Search() {
  return (
    <div>
      <form className="search_input" method="POST">
        {/* <input
          className="search-input"
          name="query"
          placeholder="Search for anything"
          role="search"
          type="search"
        /> */}
        <div className="Input">
          <Input
            className="form_input"
            value=""
            placeholder="Search for anything"
            handleChange={(event: any) => console.log('input working', event)}
          />
          <button className="search-btn" aria-label="submit" type="submit">
            <img src={searchIcon} className="search" />
          </button>
        </div>
      </form>
    </div>
  )
}
