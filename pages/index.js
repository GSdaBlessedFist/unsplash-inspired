import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import cookieCutter from 'cookie-cutter';
import LoginForm from '../components/login-form';
import Dashboard from './dashboard';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const updateLoginStatus = (e) => {
    setIsLoggedIn(e.target.value);
  };

  // useEffect(()=>{

  // },[])

  return (
    <>
      <Head>
        <title>Unsplash-inspired</title>
      </Head>
      <Script type="module" src="./sample-user-database.json" />
      <div
        id="page-container"
        data-test="page-container"
        className="text-orange-500 desktop:w-full desktop:h-screen desktop:px-[99px] desktop:pt-[32px]"
      >
        {!isLoggedIn ? (
          <LoginForm
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            onChange={updateLoginStatus}
          />
        ) : (
          <Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onChange={updateLoginStatus}/>
        )}
      </div>
      <div
        id="footer"
        className="w-full mb-0 py-4 desktop:text-2xl font-bold text-green-500 fixed bottom-0 text-center"
      >
        &#60; IMGS+ &#62; by Jason Zamora
      </div>
    </>
  );
}
