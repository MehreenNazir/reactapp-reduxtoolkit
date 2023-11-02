import React from 'react'
import Header from '../../Component/Header/Header'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeTofavourate, selectCartData } from '../../Store/AppSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Cartitem = () => {
  const array = [
    { text: "Product" },
    { text: "Price" },
    { text: "Quantity" },
    { text: "Subtotal" },
  ]
  const dispatch = useDispatch()
  const favourates = useSelector((state) => state.products.favourates);
  console.log(favourates)
  const cartData = useSelector(selectCartData);
  const handleDelete = (id) => {
    dispatch(removeTofavourate(id))
  }
  return (
    <>
      <Header />
      <div style={{
        maxWidth: "1170px",
        margin: "40px auto 40px",
      }}>
        <div className='flex justify-between border border-gray-300'>
          <p className='order-1 pt-2'><span className='text-gray-400 leading-[21px] text-[14px]'>Home /</span>  <span className='font-normal leading-[21px] text-[14px]'>Cart</span></p>
        </div>
        <div className="bg-slate-100 py-6  px-4 mt-4 ">
          <ul className="flex justify-between">
            {array &&
              array.map((val) => (
                <li className="text-base text-black">{val.text}</li>
              ))}
          </ul>
        </div>
        {favourates && favourates.map((item) => (
          <div key={item.id}>
            <div className=" bg-slate-100">
              <div className="flex justify-bewteen m-5">
                <div className="relative flex  p-2 ">     {item.img ? (  // Check if 'img' property exists
                  <img src={item.img} className="h-[60px]  w-[60px] p-2" />
                ) : (
                  <span className="image-missing">Image not available</span>
                )}
                  <span className="absolute top-0  left-0 text-sm">

                    <FontAwesomeIcon icon={faXmark}
                      onClick={() => handleDelete(item.id)}
                    />

                  </span>{" "}
                  <p className="text-base">{item.title}</p>
                  {/* <span>{item.price}</span> */}
                </div>
                {/* <div> {item.price} </div> */}
                <div>
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "white",
                      padding: "10px",
                      color: "black",
                    }}
                  >
                    <span className="text-base">+</span>
                    {item.quantity}
                    <span className="text-base">-</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className=" flex justify-between  px-[10px]">
          <Link to={"/product"}>
            <Button
              variant="outlined"
              style={{
                backgroundColor: "white",
                padding: "10px",
                color: "black",
              }}
            >
              Return to Products
            </Button>{" "}
          </Link>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "white",
              padding: "10px",
              color: "black",
            }}
          // onClickCapture={handleRemoveAll}
          >
            Remove All
          </Button>
        </div>
        <div className="border 2px-black   w-60   m-7 p-10">
          <h2 className="font-bold text-base">Cart Total</h2>
          <span className="block pt-3">Subtotal :</span>
          <TextField variant="standard" />
          <span className="block pt-3">Shipping :</span>
          <TextField variant="standard" />
          <span className="block pt-3">Total :</span>
          <TextField variant="standard" />
        </div>

      </div>
    </>
  )
}

export default Cartitem