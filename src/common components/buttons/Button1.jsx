import React from 'react'

const Button1 = ({children, width}) => {
  return (
    <>
     <button className={`py-2 md:py-3 ${width? width : "px-5 md:px-7"} rounded-lg bg-primary text-secondary w-full border border-primary  hover:bg-secondary hover:text-primary transition-all duration-200`}>
     {children || "text"}
     </button>
    </>
  )
}

export default Button1