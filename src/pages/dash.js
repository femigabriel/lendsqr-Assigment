import React from "react";
import Head from "next/head";
import Header from "@/component/layout/Header";
import LeftSideBar from "@/component/layout/LeftSideBar";
import UserDashboard from "../component/dashboard/UserDashboard";
import UserTable from "../component/dashboard/UserTable";

function dash() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Work Sans"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="dasboard">
        <LeftSideBar />
        <div className="UserDashboard-page">
          <UserDashboard />
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default dash;
