import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const Navbar = () => {
    return (
        <header className="sticky top-0 flex h-16 w-full items-center justify-center bg-navy text-gold">
            <nav className="container flex justify-between">
                <div className="text-xl">
                    <Link href="/">KodaSyok</Link>
                </div>
                <ul className="flex w-96 justify-between">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/teams">Teams</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
