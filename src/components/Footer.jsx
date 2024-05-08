import React from 'react'
import drop from '../assets/images/drop.png'

const Footer = () => {
  return (
    <div className='gap-[50px]'>
      <h1 class="absolute top-[1190px] left-[104px] font-inter font-bold text-6xl leading-[58.09px] tracking-[0.5%] bg-gradient-to-r from-[#06286E] to-[#164EC0] text-transparent bg-clip-text">FAQ</h1>
      <div className='absolute top-[1273px] left[104px] pb-[200px]'>
        <div className="m-8 flex items-center justify-between w-[600px] h-58 rounded-md border border-gray-300 py-2">
          <p>Can education flashcards be used for all age groups?</p>
          <img className='h-[12px] w-[15px]' src={drop} alt="" />
        </div>
        <div className="m-8 flex items-center justify-between w-[600px] h-58 rounded-md border border-gray-300 py-2">
          <p>How do education flashcards work?</p>
          <img className='h-[12px] w-[15px]' src={drop} alt="" />
        </div>
        <div className="m-8 flex items-center justify-between w-[600px] h-58 rounded-md border border-gray-300 py-2">
          <p>Can education flashcards be used for test preparation?</p>
          <img className='h-[12px] w-[15px]' src={drop} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer