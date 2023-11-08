import React from 'react';
import cart from "../../images/Cart1.png"
import Button from '../../Component/Button/Button';
import Header from '../../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, moveToAllCart } from '../../Store/AppSlice';
import { data } from '../../Component/Data';
const Product = () => {
    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        dispatch(addtoCart(item));
    }
    const moveAll = () => {
        dispatch(moveToAllCart(data))
    }
    const searchProduct = useSelector(state => state.products.searchProduct)
    const searchProducts = data.filter(item => item.text.includes(searchProduct))
    return (
        <>
            <Header/>
            <div style={{
                maxWidth: "1170px",
                margin: "40px auto 40px",
            }} className='flex justify-between'>
                <p className='order-1 pt-2'>Total Products (8)</p>
                <Button size="large" className="order-last" variant='primary2' onClick={moveAll}>Move All To Cart</Button>
            </div>
            <section style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                maxWidth: "1170px",
                margin: "0 auto 140px",
            }}>
                {
                    searchProduct ? searchProducts.map((item) => (
                        <div key={item.id} className=" w-[270px] h-[350px]">
                            <div className="text-white absolute rounded pl-2 pr-2 pt-1 pb-1 bg-red-600 ml-[12px] mt-[12px] mb-[212px] mr-[203px]" alt="Discount">{item.discount}</div>
                            <div className="bg-gray-100 w-[270px] h-[250px]">
                                <img
                                    className="absolute pl-[9px] pr-[9px] pt-[14px] pb-[14px] m-[49px] object-fit"
                                    src={item.img}
                                    alt={item.text}
                                />
                            </div>
                            <Button
                                onClick={() => handleAddToCart(item)}
                                className="flex items-center justify-center w-[270px] h-[41px] space-x-2">
                                <a><img className='w-[24px] h-[24px]' src={cart} /></a>
                                <p className='text-white text-[12px] leading-[18px] font-normal'>Add To Cart</p>
                            </Button>
                            <p className="text-black pt-2 text-[16px] font-medium leading-[24px]">{item.text}</p>
                            <div className="flex space-x-4">
                                <div className="text-red-600 pt-2 text-[16px] font-medium leading-[24px]">${item.price}</div>
                                <div className="text-gray-600 line-through pt-2 text-[16px] font-medium leading-[24px]">${item.oldprice}</div>
                            </div>
                        </div>
                    )) :
                        data.map((item) => (
                            <div key={item.id} className=" w-[270px] h-[350px]">
                                <div className="text-white absolute rounded pl-2 pr-2 pt-1 pb-1 bg-red-600 ml-[12px] mt-[12px] mb-[212px] mr-[203px]" alt="Discount">{item.discount}</div>
                                <div className="bg-gray-100 w-[270px] h-[250px]">
                                    <img
                                        className="absolute pl-[9px] pr-[9px] pt-[14px] pb-[14px] m-[49px] object-fit"
                                        src={item.img}
                                        alt={item.text}
                                    />
                                </div>
                                <Button
                                    onClick={() => handleAddToCart(item)}
                                    className="flex items-center justify-center w-[270px] h-[41px] space-x-2">
                                    <a><img className='w-[24px] h-[24px]' src={cart} /></a>
                                    <p className='text-white text-[12px] leading-[18px] font-normal'>Add To Cart</p>
                                </Button>
                                <p className="text-black pt-2 text-[16px] font-medium leading-[24px]">{item.text}</p>
                                <div className="flex space-x-4">
                                    <div className="text-red-600 pt-2 text-[16px] font-medium leading-[24px]">${item.price}</div>
                                    <div className="text-gray-600 line-through pt-2 text-[16px] font-medium leading-[24px]">{item.oldprice}</div>
                                </div>
                            </div>
                        ))
                }

            </section>
        </>
    )
}

export default Product
 