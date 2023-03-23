import React from 'react'
import { FIlterDropdwon } from './FIlterDropdwon'

export default function TableHead() {
  return (
    <div>
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
    </div>
  )
}
