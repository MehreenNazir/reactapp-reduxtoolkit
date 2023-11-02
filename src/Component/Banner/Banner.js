import React from 'react'
import image1 from "../../images/apple.png"
import image2 from "../../images/banner.png"
import image3 from "../../images/arrow.png"
import Button from '../Button/Button'

const Banner = () => {
    return (
        <section style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "1170px",
            height: "344px",
            backgroundColor: "black",
            color: "white",
            flexShrink: "0",
            margin: "40px 135px 140px 135px"
        }} className=''>
            <div className='flex'>
            <div>
            <div className='flex space-x-[20px] w-[190px] h-[49px] absolute ml-[64px] mt-[58px]'>
                <img className=' w-[40px] h-[49px]' src={image1} />
                <p className=' w-[126px] h-[20px] leading-[24px] font-normal text-16px text-white pt-[16px]'>iPhone 14 Series</p>
            </div>
            <div className='flex space-x-[20px] w-[294px] h-[120px] absolute ml-[64px] mt-[127px]'>
                <p style={{
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "60px",
                    letterSpacing: "1.92px"
                }}>Up to 10% off Voucher</p>
            </div>
            <div className='flex absolute ml-[64px] mt-[269px]'><Button>Shop Now </Button><img className="w-[24px] h-[24px] mt-4" src={image3}/></div>
            </div>
            <div className='absolute ml-[396px]'><img src={image2}/></div>
            </div>
        </section>
    )
}

export default Banner