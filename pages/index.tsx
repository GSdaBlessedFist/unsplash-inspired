import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import logo from "./../public/my_unsplash_logo.svg";

type PhotoInfoProps ={
    src: string,
    width: number,
    height: number,
    alt: string
  }

const datum1: PhotoInfoProps = {
  scr:"https:localhost:3000",
  width:"500px",
  height: 600 ,
  alt: "string"

}
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      photoData:datum1
    }
  };
};

export default function Home({photoData}:InferGetStaticPropsType<typeof getStaticProps>) {

  

  return (<>
    {/*<Head>
      <title>Unsplash-like site</title>
    </Head>*/}
    <div id="page-container" data-test="page-container" className="BLUE desktop:w-full desktop:h-screen desktop:px-[99px] desktop:pt-[32px]">
  {/*---BEGIN HEADER SECTION---*/}  
      <div id="interface-row" className=" grid grid-cols-[164px_300px_1fr_137px] grid-rows-[55px]">
        <div className="my-auto relative left-0">
          <Link id="logo-link" href="/" data-test="logo-link"> 
              <Image src={logo} width={384} height={26} alt="logo"/>
          </Link>
        </div>

        <div className="my-auto w-full h-full">
          <form id="search-bar-group" className="h-full flex items-center border-green-400 flex-row border border-zinc-400 rounded-xl pr-3">
            <div id="magnifying-glass" className="mx-[16px] w-[24px] h-[24px]">
              <div id="mg-ring" className="border-2 border-zinc-400 w-[15px] h-[15px] rounded-full"></div>
              <div id="mg-handle" className="w-[3.5px] h-[10px] origin-top-center -rotate-45 translate-x-[15px] -translate-y-[3px] bg-zinc-400"></div>
            </div>
            <input type="text" id="search-bar" data-test="search-bar" className="grow inline text-sm px-2 py-2" placeholder="Search by name  [Enter]"/>
          </form>          
        </div>

        <div className="flex items-center justify-center border dash text-gray-400/50"><em>add buttons for formatting</em></div>

        <div className="h-[55px] w-[137px]">
          <button id="add-photo-button" data-test="add-photo-button" className="w-full h-full flex justify-center items-center bg-[#3DB46D] rounded-r-xl rounded-l-xl px-0 noto text-white drop-shadow-md">Add a photo</button>
        </div>
      </div>
  {/*---END HEADER SECTION---*/}  
  {/*---BEGIN PHOTO DISPLAY AREA*/}
      <div id="photo-gallery-container" data-test="photo-gallery-container" className="SECTION  mt-10 h-5/6 flex justify-center items-center overflow-hidden">
        <div id="photo-area" className="bb  w-full h-full flex flex-row items-start flex-wrap gap-4">
          <div className="photo w-[350px] h-44">
            
          </div>
          
        </div>
            

      </div>
  {/*---BEGIN PHOTO DISPLAY AREA*/}
    </div>
  </>)
}


