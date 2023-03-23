import Head from 'next/head'
import SignIn from '@/component/sign-in/SignIn'


export default function Home() {
  return (
    <>
    <Head>
    <link href="https://fonts.cdnfonts.com/css/avenir-next-lt-pro" rel="stylesheet" />
    </Head>
     <div>
      <SignIn />
     </div>
    </>
  )
}
