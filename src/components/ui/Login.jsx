import React from 'react'
import Input from './Input'
import { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function Login({handleLogin, onClose}) {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [errorUser, setErrorUser] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorValidation, setErrorValidation] = useState("")

    const handleSubmit = () => {
        setErrorUser("");
        setErrorPassword("");
        setErrorValidation("");

        let hasError = false;

        if (!username){
            setErrorUser("Introduce el usuario");
            hasError = true
        }

        if (!password){
            setErrorPassword("Introduce la contraseña");
            hasError = true
        }

        if (hasError) return;

        if (username !== "admin" || password !== "1234"){
            setErrorValidation("Usuario o contraseña incorrectos")
            return;
        }
        
        handleLogin();
        navigate("/agents")
    }

  return (
    <div
        onClick={onClose}
        className='absolute inset-0 z-50 flex items-center justify-center bg-black/55'>
        <div
        onClick={(e) => e.stopPropagation()}
        className='relative p-4 bg-ValoWhite w-90 h-120 rounded-lg'>
            <button 
                className='absolute bg-ValoRed top-4 right-4 w-10 h-10 text-2xl text-ValoWhite rounded-full'
                onClick={onClose}>
                x
            </button>
            <div className='flex flex-col h-full pt-8 justify-between items-center'>
                <div className='flex flex-col w-full gap-5'>
                    <Input
                        label="USERNAME"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={errorUser}
                    />
                    <Input
                        label="PASSWORD"
                        type="password"
                        placeholder="*****"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={errorPassword}
                    />
                </div>   
                {errorValidation && (
                    <p className='text-ValoRed text-sm mt-1'>{errorValidation}</p>
                )}
                <Button text={"ENTER"} onClick={handleSubmit} />
            </div>
        </div>
    </div>
  )
}
