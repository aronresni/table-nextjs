import React from 'react'
import Link from "next/link"
const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
