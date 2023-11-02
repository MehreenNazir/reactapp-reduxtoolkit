// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeTofavourate, selectFavourateData } from "../../Store/AppSlice";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// const AddToFav = () => {
//     const dispatch = useDispatch()
//     const handleRemoveFav = (id) => {
//         dispatch(removeTofavourate(id))
//     }
//     const favoritedProducts = useSelector(selectFavourateData);
//     console.log(favoritedProducts)
//     return (
//         <>
//             <h1>Your Collections</h1>
//             <section style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(4, 1fr)",
//                 gap: "1rem",
//                 maxWidth: "1170px",
//                 margin: "0 auto 140px",
//             }}>
//                 {favoritedProducts.map((product) => (
//                     <div className="w-[270px] h-[320px]">
//                         <div className="text-white absolute rounded pl-2 pr-2 pt-1 pb-1 bg-red-600 ml-[12px] mt-[12px] mb-[212px] mr-[203px]" alt="Discount">
//                             {product.discount}
//                         </div>
//                         <div className="absolute ml-[224px] mr-[12px] mt-[12px] mb-[204px]" onClick={(id)=>handleRemoveFav(id)}>
//                             <FontAwesomeIcon className='w-[32px] h-[32px]' icon={faXmark}/>
//                         </div>
//                         <div className="bg-gray-100 w-[270px] h-[250px]">
//                             <img
//                                 className="absolute pl-[9px] pr-[9px] pt-[14px] pb-[14px] m-[49px] object-fit"
//                                 src={product.img}
//                                 alt="Product"
//                             />
//                         </div>
//                         <p className="text-black pt-2 text-[16px] font-medium leading-[24px]">
//                             {product.text}
//                         </p>
//                         <div className="flex space-x-4">
//                             <div className="text-red-600 pt-2 text-[16px] font-medium leading-[24px]">
//                                 {product.price}
//                             </div>
//                             <div className="text-gray-600 line-through pt-2 text-[16px] font-medium leading-[24px]">
//                                 {product.oldprice}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </section>
//         </>

//     );
// };

// export default AddToFav;
