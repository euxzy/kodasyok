import Navbar from '@/Components/Navbar'
import React from 'react'
// import { Link, Head } from '@inertiajs/inertia-react'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex h-screen w-full items-center justify-center">
                <h1 className="text-5xl">KodaSyok</h1>
            </div>
        </>
    )
}

export default Home
