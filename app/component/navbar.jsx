"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>


<div className='flex justify-around items-center bg-black text-white p-3 '>

<span><Link href="/"> Home</Link></span>
<span><Link href="/ClientSide"> Client Side </Link></span>
<span><Link href="/ClientSideHOC"> Client Side HOC</Link></span>
<span><Link href="/"> Server Side</Link></span>

</div>



    </div>
  )
}

export default Navbar
