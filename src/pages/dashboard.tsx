import Head from "next/head";
import { Inter } from "@next/font/google";
import LeftSideBar from "@/component/layout/LeftSideBar";
import Header from "@/component/layout/Header";
import UserDashboard from "../component/dashboard/UserDashboard";
import UserTable from "../component/dashboard/UserTable";


export default function dasboard() {
  return (
    <>
       <div>
      <Head>
      <link href="https://fonts.cdnfonts.com/css/work-sans" rel="stylesheet" />
      </Head>
      <Header />
      <div className="dasboard">
        <LeftSideBar />
        <div className="userDashboard-page">
          <UserDashboard />
          <UserTable />       
        </div>
      </div>
    </div>
    </>
  );
}
