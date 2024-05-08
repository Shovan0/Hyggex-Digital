import React from 'react'
import Home from '../assets/images/Home.png'
import Greater from '../assets/images/Greater.png'
import sound from '../assets/images/sound.png'
import light from '../assets/images/light.png'
import less from '../assets/images/less.png'
import great from '../assets/images/great.png'
import qr from '../assets/images/qr.png'
import refresh from '../assets/images/refresh.png'
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import plus from '../assets/images/plus.png'

const Content = () => {
  return (
    <>
        <div class="absolute top-[139px] left-[102px]">
            <ul class="flex justify-evenly items-center h-[30px] w-[487px]">
                <li><img src={Home} alt="" /></li>
                <li><img src={Greater} alt="" /></li>
                <li>Flashcard</li>
                <li><img src={Greater} alt="" /></li>
                <li>Mathematics</li>
                <li><img src={Greater} alt="" /></li>
                <li>Relation and Function</li>
            </ul>
        </div>
        <div>
            <div>
            <p class="absolute top-[233px] left-[105px]' text-blue-900 font-montserrat font-bold text-2xl leading-relaxed">Relation and Functions ( Mathematics )</p>
            </div>
            <div className='gap-[61px] absolute top-[328px] left-[340px] flex flex-col items-center justify-center'>
                <div>
                    <ul className='flex gap-[40px] '>
                    <li class="font-inter font-bold text-[#06286E] text-lg leading-[24.2px] border-b-2 border-[#06286E] w-82">Study</li>
                        <li>Quiz</li>
                        <li>Test</li>
                        <li>Game</li>
                        <li>Others</li>
                    </ul>
                </div>
                <div className=''>
                    <div className='rounded-[30px] bg-[#051A91] w-[712px] h-[393px]'>
                        <div className='relative flex justify-between top-[34px]'>
                            <img className='relative left-[34px]' src={light} alt="sound" />
                            <img className='relative right-[34px]' src={sound} alt="light" />
                        </div>
                        <div className='relative top-[150px] left-[10px]'>
                            <h2 class="text-white alignfont-lato font-bold text-3xl leading-[45.91px] tracking-wider">9 + 6 + 7x - 2x - 3</h2>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[20px]'>
                        <div><img src={refresh} alt="" /></div>
                        <div>
                            <ul className='flex gap-[43px] justify-center items-center'>
                                <li><img src={less} alt="" /></li>
                                <li class="font-inter font-bold text-base leading-[29.05px] text-[#202B37]">01 / 10</li>
                                <li><img src={great} alt="" /></li>
                            </ul>
                        </div>
                        <div><img src={qr} alt="" /></div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        <div>
            <div>
                <div className='flex absolute top-[955px] left-[106px]'>
                    <img className='h-[80px]' src={logo1} alt="" />
                    <img className='h-[60px]' src={logo2} alt="" />
                </div>
                <div className='flex absolute top-[965px] left-[1039px] justify-center items-center'>
                    <img className='h-[60px] w-[60px]' src={plus} alt="plus" />
                    <h1 class="font-inter font-semibold text-3xl leading-[30px] bg-gradient-to-r from-[#06286E] to-[#06286E] text-transparent bg-clip-text">Create Flashcard</h1>
                </div>
            </div>
            <div></div>
        </div>
    </>
  )
}

export default Content;