import React from 'react';
import image1 from "../../images/game.png";
import image2 from "../../images/keyboard.png";
import image3 from "../../images/monitor2.png";
import image4 from "../../images/chair.png";
import image5 from "../../images/purse.png";
import image6 from "../../images/speaker.png";
import image7 from "../../images/blackgame.png";
import image8 from "../../images/jacket.png";
import cart from "../../images/Cart1.png"
import Button from '../../Component/Button/Button';
import Header from '../../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { addAllProductsToCart, addtofavourate } from '../../Store/AppSlice';
const Product = () => {
    const cards = [
        {
            id: 1,
            img: image1,
            text: "HAVIT HV-G92 Gamepad",
            discount: "-40%",
            price: "$120",
            oldprice: "$160",
        },
        {
            id: 2,
            img: image2,
            text: "AK-900 Wired Keyboard",
            discount: "-35%",
            price: "$960",
            oldprice: "$1160",
        },
        {
            id: 3,
            img: image3,
            text: "IPS LCD Gaming Monitor",
            discount: "-30%",
            price: "$370",
            oldprice: "$400",
        },
        {
            id: 4,
            img: image4,
            text: "S-Series Comfort Chair",
            discount: "-25%",
            price: "$375",
            oldprice: "$400",
        },
        {
            id: 5,
            img: image5,
            text: "Gucci duffle bag",
            discount: "-25%",
            price: "$960",
            oldprice: "$1160",
        },
        {
            id: 6,
            img: image6,
            text: "RGB liquid CPU Cooler",
            discount: "-25%",
            price: "1960",
        },
        {
            id: 7,
            img: image7,
            text: "GP11 Shooter USB Gamepad",
            discount: "-25%",
            price: "$560",
        },
        {
            id: 8,
            img: image8,
            text: "Quilted Satin Jacket",
            discount: "-25%",
            price: "$750",
        },
    ];
    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        dispatch(addtofavourate(item))

    }
    const handleAllAddToCart = () => {
        dispatch(addAllProductsToCart(cards))
    }
    return (
        <>
            <Header />
            <div style={{
                maxWidth: "1170px",
                margin: "40px auto 40px",
            }} className='flex justify-between'>
                <p className='order-1 pt-2'>Total Products (8)</p>
                <Button size="large" className="order-last" variant='primary2' onClick={handleAllAddToCart}>Move All To Cart</Button>
            </div>
            <section style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                maxWidth: "1170px",
                margin: "0 auto 140px",
            }}>
                {cards.map((item) => (
                    <div key={item.id} className=" w-[270px] h-[350px]">
                        <div className="text-white absolute rounded pl-2 pr-2 pt-1 pb-1 bg-red-600 ml-[12px] mt-[12px] mb-[212px] mr-[203px]" alt="Discount">{item.discount}</div>
                        <div className="bg-gray-100 w-[270px] h-[250px]">
                            <img
                                className="absolute pl-[9px] pr-[9px] pt-[14px] pb-[14px] m-[49px] object-fit"
                                src={item.img}
                                alt={item.text} s
                            />

                        </div>
                        <Button onClick={() => handleAddToCart(item)} className="flex items-center justify-center w-[270px] h-[41px] space-x-2">
                            <a><img className='w-[24px] h-[24px]' src={cart} /></a>
                            <p className='text-white text-[12px] leading-[18px] font-normal'>Add To Cart</p>
                        </Button>
                        <p className="text-black pt-2 text-[16px] font-medium leading-[24px]">{item.text}</p>
                        <div className="flex space-x-4">
                            <div className="text-red-600 pt-2 text-[16px] font-medium leading-[24px]">{item.price}</div>
                            <div className="text-gray-600 line-through pt-2 text-[16px] font-medium leading-[24px]">{item.oldprice}</div>
                        </div>
                    </div>
                ))}

            </section>
        </>
    )
}

export default Product