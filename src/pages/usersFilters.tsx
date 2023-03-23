import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import LeftSideBar from "@/component/layout/LeftSideBar";
import Header from "@/component/layout/Header";
import UserDashboard from "../component/dashboard/UserDashboard";
import UsersFilters from "../component/dashboard/UsersFilters";
const inter = Inter({ subsets: ["latin"] });

export default function usersFilters() {
  return (
    <>
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
        <div className="userDashboard-page">
          <UserDashboard />
          <UsersFilters />
        </div>
      </div>
    </div>
    </>
  );
}
