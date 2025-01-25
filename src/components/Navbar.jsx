import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {
  return (
    <>

    <div className="navbar max-w-screen-xl mx-auto py-6 flex items-center justify-between p-2 border-b-1 border-zinc-600">
      <div className='flex items-center'>
      <img src="../public/logo.svg" alt="" />
        <div className="links flex items-center gap-10 ml-28">
          {["Home","Work","Culture","","News"].map((element,index)=>{return ( <Link className='flex items-center font-["Satoshi"] gap-1.5' key={index} to="/">
          {index === 1 && <span style={{boxShadow:"rgb(0, 255, 25) 0px 0px 7.7px 0px"}} className='inline-block w-2 h-2   bg-green-500 rounded-full'></span>}
         {element.length === 0 ? <span className='w-0.5 h-5 bg-zinc-600 cursor-none'></span>: element}
          </Link>)})}
           
        </div>
      </div>
        
        <Button/>

         
    </div>


    
    
    
    </>
  )
}

export default Navbar
