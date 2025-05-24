"use client"
import  LoginCard  from "../components/loginCard/loginCard"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { API_CONFIG, getApiUrl } from "../config/api"

export default function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.AUTH), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    
                    "email": email,
                    "password": password

                })
                
            })
            if (!response.ok) {
                throw new Error('Email o contraseña incorrectos')
            }
            const user = await response.json()
            localStorage.setItem('adminToken', user.token)
            router.push('/admin/dashboard')
        } catch (error: Error | any) {
            alert(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-[100dvh] bg-[#bbdb93]">
            <LoginCard
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onLogin={handleLogin}
            />
        </div>
    )
}
