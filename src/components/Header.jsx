import React from 'react'
import Logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <>
   <div class="flex justify-between items-center">
    <div class="flex-shrink-0">
        <img src={Logo} className=' h-[39px] w-[191px]' alt="Logo" />
    </div>
    <div class="flex">
        <ul class="flex gap-10 h-12 flex items-center">
            <li class="mr-4 font-inter text-base font-normal leading-5">Home</li>
            <li class="mr-4 font-inter text-base font-normal leading-5">Flashcard</li>
            <li class="mr-4 font-inter text-base font-normal leading-5">Contact</li>
            <li class="font-inter text-base font-normal leading-5">FAQ</li>
            <li class="rounded-[32px] h-12 w-[128px] flex justify-center items-center font-inter text-base font-inter leading-5 text-white bg-[#06286E] ">Login</li>
        </ul>
    </div>
</div>


    </>
  )
}

export default Header