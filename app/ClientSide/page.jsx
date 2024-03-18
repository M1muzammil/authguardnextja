"use client"
import React, { useLayoutEffect , useState} from 'react'
import { sessionStatus } from '../utils/session'
import { Redirect, redirect } from 'next/navigation'



const Page = async () => {




useLayoutEffect(()=>{

    const session = sessionStatus

        if(!session){ 
            redirect("/")
        }
    },[]
)


  return (
    <div className='flex justify-center items-center w-[100vw] h-[100vh] bg-gray-500 text-white text-5xl'>
        
This is client side page 🙋‍♂️

    </div>
  )
}

export default Page
