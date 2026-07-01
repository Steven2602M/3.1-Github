import React from 'react'
import Button from '../ui/Button'
import { useState } from 'react'
import Login from '../ui/Login'

export default function Home({handleLogin}) {
    const [openLogin, setOpenLogin] = useState(false)

    return (
    <div className='relative h-dvh bg-ValoBlack font-Anton'>
        <img 
        src="/BackgroundImage.png" 
        alt="Imagen de fondo" 
        className='absolute inset-0 h-full w-full object-cover' />
        
        {/* DIV CONTENEDOR */}
        <div className='absolute z-10 flex h-full justify-between px-[10%]'>
            {/* DIV IZQUIERDA IMG */}
            <div className='flex items-end'>
                <img 
                    src="/Dashboard-Hero.png" 
                    alt="Imagen heroes home" />
            </div>
            <p>Github3</p>

            {/* DIV DERECHA BOTON */}
            <div className='flex flex-col items-end justify-end mb-[10%]'>
                <img src="/V_Logotype_White.png" alt="Texto Valorant" />
                <Button onClick={() => setOpenLogin(true)} text={"PLAY NOW"} />
            </div>

            {openLogin && <Login handleLogin={handleLogin} onClose={() => setOpenLogin(false)} />}

        </div>
    </div>
  )
}
