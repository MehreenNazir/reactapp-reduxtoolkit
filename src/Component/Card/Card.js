import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import image1 from "../../images/game.png";
import image2 from "../../images/keyboard.png";
import image3 from "../../images/monitor2.png";
import image4 from "../../images/chair.png";
import image5 from "../../images/purse.png";
import image6 from "../../images/speaker.png";
import image7 from "../../images/blackgame.png";
import image8 from "../../images/jacket.png";
import heart from "../../images/Fill Heart (1).png";
import Button from '../Button/Button';
import {addtofavourate, handleDataToDisplay, selectShowAllData } from '../../Store/AppSlice';


const Card = () => {
    const initialFourProducts = [
        {    id:1,
            img: image1,
            text: "HAVIT HV-G92 Gamepad",
            discount: "-40%",
            price: "$120",
            oldprice: "$160",
        },
        {    id:2,
            img: image2,
            text: "AK-900 Wired Keyboard",
            discount: "-35%",
            price: "$960",
            oldprice: "$1160",
        },
        {
            id:3,
            img: image3,
            text: "IPS LCD Gaming Monitor",
            discount: "-30%",
            price: "$370",
            oldprice: "$400",
        },
        {
            id:4,
            img: image4,
            text: "S-Series Comfort Chair",
            discount: "-25%",
            price: "$375",
            oldprice: "$400",
        },
    ];

    const allProducts = [
        ...initialFourProducts,
        {
            id:5,
            img: image5,
            text: "Gucci duffle bag",
            discount: "-25%",
            price: "$960",
            oldprice: "$1160",
        },
        {
            id:6,
            img: image6,
            text: "RGB liquid CPU Cooler",
            discount: "-25%",
            price: "1960",
        },
        {
            id:7,
            img: image7,
            text: "GP11 Shooter USB Gamepad",
            discount: "-25%",
            price: "$560",
        },
        {
            id:7,
            img: image8,
            text: "Quilted Satin Jacket",
            discount: "-25%",
            price: "$750",
        },
    ];
    //For grid View
    const showAllData = useSelector(selectShowAllData)
    const dispatch = useDispatch()
    const productDisplay = showAllData ? allProducts : initialFourProducts
    const handleButtonClick = () => {
        dispatch(handleDataToDisplay())
    }
    //For Favourate items

    const handleToFavourate=(item)=>{
        dispatch(addtofavourate(item))
        console.log(item)
    }
    
    return (
        <>
            <section
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1rem",
                    maxWidth: "1170px",
                    margin: "0 auto 140px",
                }}
            >
                {productDisplay.map((item) => (
                    <div key={item.id}  className="w-[270px] h-[320px]">
                        <div className="text-white absolute rounded pl-2 pr-2 pt-1 pb-1 bg-red-600 ml-[12px] mt-[12px] mb-[212px] mr-[203px]" alt="Discount">
                            {item.discount}
                        </div>
                        <div className="absolute ml-[224px] mr-[12px] mt-[12px] mb-[204px]" alt="Discount">
                            
                                <img className='w-[32px] h-[32px]' src={heart} onClick={()=>handleToFavourate(item)}
                                />
                        </div>
                        <div className="bg-gray-100 w-[270px] h-[250px]">
                            <img
                                className="absolute pl-[9px] pr-[9px] pt-[14px] pb-[14px] m-[49px] object-fit"
                                src={item.img}
                                alt="Product"
                            />
                        </div>
                        <p className="text-black pt-2 text-[16px] font-medium leading-[24px]">
                            {item.text}
                        </p>
                        <div className="flex space-x-4">
                            <div className="text-red-600 pt-2 text-[16px] font-medium leading-[24px]">
                                {item.price}
                            </div>
                            <div className="text-gray-600 line-through pt-2 text-[16px] font-medium leading-[24px]">
                                {item.oldprice}
                            </div>
                        </div>
                    </div>

                ))}
            </section>
            <Button onClick={handleButtonClick} className="mr-[603px] ml-[603px] mb-[162px] text-white bg-red-600 w-[234px] h-[75px]">
                {showAllData ? 'Show Less Products' : 'View All Products'}
            </Button>
        </>
    );
};

export default Card;
