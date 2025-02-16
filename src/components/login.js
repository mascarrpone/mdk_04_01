"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ADMIN_LOGIN = "Admin";
const ADMIN_PASSWORD = "pswrd";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
            router.push("/mainPage"); // Перенаправляем на главную
        } else {
            alert("Неверные логин или пароль");
        }
    };

    return (
        <form
            className="bg-white shadow-2xl min-h-1/3 min-w-1/3 p-6 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="w-full">
                <label className="text-black mr-4">Логин:</label>
                <input
                    className="bg-gray-100 shadow-lg  w-full text-black
                    border rounded-lg p-1  transition
        hover:bg-gray-200 focus:bg-gray-200
        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200"
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>
            <div className="mt-6 w-full">
                <label className="text-black mr-4">Пароль:</label>
                <input
                    className="bg-gray-100 shadow-lg  w-full text-black
                    border rounded-lg p-1  transition
        hover:bg-gray-200 focus:bg-gray-200
        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="w-full mt-4">
                <button
                    className="  w-full bg-blue-500 border rounded-lg p-1 cursor-pointer transition
        hover:bg-blue-400 active:bg-blue-800
        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200"
                    type="submit"
                >
                    Войти
                </button>
            </div>
        </form>
    );
};

export default Login;
