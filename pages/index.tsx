import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from "./../public/my_unsplash_logo.svg";


export default function Home() {
  return (
    <div className="BLUE desktop:w-full desktop:px-[99px] desktop:pt-[32px]">
      <div id="interface-row" className="grid grid-cols-[164px_300px_1fr_137px] grid-rows-[55px]">
        <div className="my-auto relative left-0">
          <Image src={logo} width={138} height={26} />
        </div>
        <div className="my-auto w-full h-full">
          <form id="search-bar-group" className="h-full flex items-center border-green-400 flex-row border border-zinc-400 rounded-xl">
            <div id="magnifying-glass" className="mx-[16px] w-[24px] h-[24px]">
              <div id="mg-ring" className="border-2 border-zinc-400 w-[15px] h-[15px] rounded-full"></div>
              <div id="mg-handle" className="w-[3.5px] h-[10px] origin-top-center -rotate-45 translate-x-[15px] -translate-y-[3px] bg-zinc-400"></div>
            </div>
            <input type="text" id="search-bar" data-test="search-bar" className="grow inline text-sm px-2 py-2" placeholder="Search by name"/>
          </form>          
        </div>
        <div></div>
        <div className="h-[55px] w-[137px]">
          <button id="add-photo-button" className="h-full flex justify-center items-center bg-[#3DB46D] rounded-r-xl rounded-l-xl px-6 noto text-white">Add a photo</button>
        </div>
          
      </div>
    </div>
  )
}

