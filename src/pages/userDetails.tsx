import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import LeftSideBar from '@/component/layout/LeftSideBar'
import Header from '@/component/layout/Header'
import UserDetails from '../component/dashboard/UserDetails'
import GeneralDetails from '../component/dashboard/GeneralDetails'
const inter = Inter({ subsets: ['latin'] })

export default function userDetails() {
  return (
    <>
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Work Sans"
            rel="stylesheet"
          />
          <link
            href="https://fonts.cdnfonts.com/css/sf-compact-text"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <div className="dasboard">
          <LeftSideBar />
          <div className="userDashboard-page">
            <UserDetails />
            {/* <UserDetailsDashboard /> */}
            <GeneralDetails />
          </div>
        </div>
      </div>
    </>
  )
}
