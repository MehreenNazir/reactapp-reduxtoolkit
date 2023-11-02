// import React from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { removeTofavourate, selectFavourateData } from "../../Store/AppSlice";
// import cartImage from "../../images/Cart1.png"
// import Button from '../../Component/Button/Button';

// const AddToCart = () => {
//     const dispatch = useDispatch()
//     const handleRemoveCart = (id) => {
//         dispatch(removeTofavourate(id))
//     }
//     const addToCartProducts = useSelector(selectFavourateData);
//     console.log(addToCartProducts)
//     return (
//         <>
//             <section style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(4, 1fr)",
//                 gap: "1rem",
//                 maxWidth: "1170px",
//                 margin: "0 auto 140px",
//             }}>
//                 {addToCartProducts.map((cart) => (
//                     <div key={cart.id} className=" w-[270px] h-[350px]">
//                         <div className="text-white absolute rounded pl-2 pr-2 pt-1 pb-1 bg-red-600 ml-[12px] mt-[12px] mb-[212px] mr-[203px]" alt="Discount">{cart.discount}</div>
//                         <div className="bg-gray-100 w-[270px] h-[250px]">
//                             <img
//                                 className="absolute pl-[9px] pr-[9px] pt-[14px] pb-[14px] m-[49px] object-fit"
//                                 src={cart.img}
//                                 alt="Product"
//                             />
//                         </div>
//                         <Button className="flex carts-center justify-center w-[270px] h-[41px] space-x-2" onClick={(id) => handleRemoveCart(id)}>
//                             <a><img className='w-[24px] h-[24px]' src={cartImage} /></a>
//                             <p className='text-white text-[12px] leading-[18px] font-normal'>Remove To Cart</p>
//                         </Button>
//                         <p className="text-black pt-2 text-[16px] font-medium leading-[24px]">{cart.text}</p>
//                         <div className="flex space-x-4">
//                             <div className="text-red-600 pt-2 text-[16px] font-medium leading-[24px]">{cart.price}</div>
//                             <div className="text-gray-600 line-through pt-2 text-[16px] font-medium leading-[24px]">{cart.oldprice}</div>
//                         </div>
//                     </div>
//                 ))}

//             </section>
//         </>

//     )
// }

// export default AddToCart