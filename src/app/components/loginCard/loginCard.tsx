// loginCard.tsx
"use client";
import React, { Dispatch, SetStateAction, useState } from 'react';

interface LoginCardProps {
    onLogin: (email: string, password: string) => void;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
}


const LoginCard: React.FC<LoginCardProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogin(email, password);
    };

    return (


        < div className=" flex flex-col items-center justify-center w-full sm:w-[60%] h-screen mx-auto p-4 rounded-lg shadow-xl bg-white border border-gray-300" >

            <h2 className="text-5xl font-bold text-[#bbdb93] font-['weddingSecondaryFont'] mb-4 text-center">Bienvenido</h2>
            <img src="/media/images/sunflower-loading.png" alt="" className='w-24 h-24'/>
            <p className="text-lg text-gray-600 mb-6">Inicia sesión</p>


            <form onSubmit={handleLogin} className="flex flex-col justify-around sm:w-[60%] h-[40%] bg-white rounded-lg p-6">

                <div className="relative">

                    <span>Correo</span>

                    <input
                        placeholder="correo@example.com"
                        className="h-10 w-full border-b-2 border-gray-300 text-pink-600 bg-transparent 
                        placeholder-transparent focus:outline-none focus:border-orange-500"
                        required={true}
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                </div>


                <div className="relative">

                    <span>Contraseña</span>
                    <input
                        placeholder="**********"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-600 bg-transparent placeholder-transparent focus:outline-none focus:border-orange-500"
                        required={true}
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                </div>



                <button
                    className="w-[40%] sm:w-[35%] lg:w-[30%] self-center py-2 px-4 bg-orange-500 hover:bg-orange-700 rounded-md shadow-lg text-white font-semibold transition duration-200 bg-yellow-500 hover:bg-yellow-700"
                    type="submit"
                >
                    Entrar
                </button>


            </form>


        </div >



    );
};

export default LoginCard;