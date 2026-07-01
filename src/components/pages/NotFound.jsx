import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()

  return (
    <main className='bg-ValoBlack min-h-screen text-white overflow-hidden font-Anton grid grid-cols-[1fr_2fr]'>
        <div className='flex flex-col items-end justify-center'>
            <h1 className='text-9xl font-bold flex flex-col items-end'>Error <span>404</span></h1>
            <button onClick={() => navigate("/")} className='bg-ValoRed px-6 py-4 rounded-lg w-fit cursor-pointer'>
                BACK TO HOME
            </button>
        </div>
        <div className='relative flex'>
            <img className='relative z-1' src="/404-Hero.png" alt="" />
            <img className='absolute' src="/V_Logotype_Simple.png" alt="" />
        </div>
        <p>github4</p>
    </main>
  )
}
