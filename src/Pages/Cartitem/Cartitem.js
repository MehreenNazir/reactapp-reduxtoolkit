import React, { useState } from 'react'
import Header from '../../Component/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { deletAll, deleteCart} from '../../Store/AppSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Button from '../../Component/Button/Button';
import jsPDF from 'jspdf';


const Cartitem = () => {
  const array = [
    { text: "Product" },
    { text: "Price" },
    { text: "Quantity" },
    { text: "Subtotal" },
  ]
  const dispatch = useDispatch()
  const addCartData = useSelector((state) => state.products.addCartData);
  const [input, setInput] =  useState(addCartData.map(()=>1)) 
  console.log(addCartData) 
  const handleDelete = (id) => {
    dispatch(deleteCart(id))
  }
  const deletAllAddedCart = () => {
    dispatch(deletAll())
  }
const total=()=>{
  const value=addCartData.reduce((acc,item,index)=>{
    const subtotal=item.price* input[index];
    return acc+subtotal
  },0)
  return value;
}
const toatlValue=total();
  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.text("Receipt", 10, 10);
    pdf.text(`Subtotal: $${toatlValue}`, 10, 30);
    pdf.text("Shipping: Free", 10, 40);
    pdf.text(`Total: $${toatlValue}`, 10, 50);
    pdf.save("receipt.pdf");
  };
  console.log(input)
  return (
    <>
      <Header/>
      <div className='w-[1191px] ml-auto mr-auto'>
        <div className='flex justify-between mb-[80px] mt-[80px] w-[100px]'>
          <p className='order-1 pt-2'><span className='text-gray-400 leading-[21px] text-[14px]'><Link to={"/"}>Home</Link> /</span><span className='font-normal leading-[21px] text-[14px]'><Link to={"/Products"}>Cart</Link></span></p>
        </div>
        <div className='gapOfCart'>
          <div className="adjustment mb-[40px]">
            <div className="gapUl">
              {array &&
                array.map((val) => (
                  <div className="text-base text-black">{val.text}</div>
                ))}
            </div>
          </div>
          {addCartData &&
            addCartData.map((item,index) => (
              <div key={item.id}>
                <div className='width'>
                  <div className='gapUl'>
                    <div className='relative'>
                      <img src={item.img} className='w-[50px] h-[50px]' alt='' />
                      <FontAwesomeIcon className='icon-red absolute top-[-15px] left-0' icon={faCircleXmark} onClick={()=>handleDelete(item.id)} />
                      <p className='text-base'>{item.title}</p>
                    </div>
                    <div className='text-[16px] '>${item.price}</div>
                    <input min={0}  onChange={(e) => {
                          const newquantity =[...input];
                          newquantity[index]=parseInt(e.target.value);
                          setInput(newquantity)
                    }} id='input' type='number' className='border border-black w-10' value={input[index]}/>
                    <div>${item.price * input[index]}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className=" flex justify-between mt-[40px] px-[10px]">
          <Link to={"/Products"}>
            <Button
              variant='primary2'
              className="large"
            >
              Return to Products
            </Button>{" "}
          </Link>
          <Button
            variant='primary2'
            className="medium"
            onClick={deletAllAddedCart}>
            Remove All
          </Button>
        </div>
        <div className="w-96 border-2 border-gray-700 p-6 rounded ml-12 mt-32 mb-6">
          <h1 className="p-2 font-bold">Cart Total</h1>
          <div className=" text-md border-b p-3 grid grid-cols-2">
            Subtotal
            <span className="flex justify-end">${toatlValue}</span>
          </div>
          <div className="flex text-md border-b  p-3 grid grid-cols-2">
            Shiping
            <span className="flex justify-end">Free</span>
          </div>
          <div className="flex text-md  p-3 grid grid-cols-2">
            Total
            <span className="flex justify-end">${toatlValue}</span>
          </div>
          <div className="p-3 flex justify-center">
          <Button variant="danger" size="large" onClick={handleDownload} >
              Download Receipt
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cartitem