import React from 'react'
import Button from './Button/Button'
import jsPDF from 'jspdf';
import { UseSelector, useSelector } from 'react-redux';

const Receipt = () => {
  const cartItems = useSelector(state => state.products.addCartData)
  const calculateSubtotal = (cartItems) => {
    let subTotal = 0;
    for (let item of cartItems) {
      const price = item.price;
      const quantity = item.quantity;
      subTotal += price * quantity;
    }
    return subTotal;
  };

  const subtotal = calculateSubtotal(cartItems);
  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.text("Receipt", 10, 10);
    pdf.text(`Subtotal: $${subtotal}`, 10, 30);
    pdf.text("Shipping: Free", 10, 40);
    const total = subtotal;
    pdf.text(`Total: $${total}`, 10, 50);
    pdf.save("receipt.pdf");
  };
  return (
    <>
    <div className="w-96 border-2 border-gray-700 p-6 rounded ml-12 mt-32 mb-6">
          <h1 className="p-2 font-bold">Cart Total</h1>
          <div className=" text-md border-b p-3 grid grid-cols-2">
            Subtotal
            <span className="flex justify-end">$1750</span>
          </div>
          <div className="flex text-md border-b  p-3 grid grid-cols-2">
            Shiping
            <span className="flex justify-end">Free</span>
          </div>
          <div className="flex text-md  p-3 grid grid-cols-2">
            Total
            <span className="flex justify-end">$1750</span>
          </div>
          <div className="p-3 flex justify-center">
          <Button variant="danger" size="large" onClick={handleDownload} >
              Download Receipt
            </Button>
          </div>
        </div>
    </>
  )
}

export default Receipt