import React from 'react'

export default function Button({text, onClick}) {
  return (
    <button onClick={onClick} className='bg-ValoRed w-fit font-Anton text-ValoWhite px-8 py-4 font-bold rounded-lg cursor-pointer transition hover:scale-105 hover:opacity-90'>
        {text}
    </button>
  )
}
