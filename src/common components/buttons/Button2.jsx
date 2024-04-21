import React from 'react'

const Button2 = ({children, width}) => {
  return (
    <>
<button className={`py-2 md:py-3 ${width? width : "px-5 md:px-17"} rounded-lg bg-secondary text-primary w-full border-primary border hover:bg-primary hover:text-secondary transition-all duration-200`}>
     {children || "text"}
     </button>
   </>
  )
}

export default Button2