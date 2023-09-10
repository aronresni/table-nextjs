import React from 'react'
import Link from "next/link"
const Navigation = () => {
    return (
        <div className=' bg-gradient-to-r from-purple-400 to-purple-800 '>
            <nav className='h-24 flex items-center justify-center'>
                <ul className='flex space-x-16'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
