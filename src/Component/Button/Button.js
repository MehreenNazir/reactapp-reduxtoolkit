import React from 'react'
const variants = {
    primary: "bg-black text-white border-b border-white",
    primary2:"bg-white text-black border border-black",
    naked: "bg-red text-white border border-red"

}
const sizes = {
    large:"px-4 py-2 text-base",
    small: "px-2 py-1 leading-1",
    smallest: "px-2 py-1 leading-1",


}
const Button = ({ className, variant = "primary", size = "small", ...props }) => {
    return (
        <button className={`${className} ${variants[variant]} ${sizes[size]}`} {...props} />
    )
}

export default Button