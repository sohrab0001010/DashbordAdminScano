import React, { useState } from 'react'
import { Link } from 'react-router'

const Login = () => {

    const [number, setNumber] = useState(null)


    return (
        <div className="
            min-h-screen
            bg-blend-hard-light
            flex
            flex-col
            items-center
            justify-center
            gap-8
    ">
            <div className="
                circle1
                bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
                h-36
                w-36
                rounded-full
                absolute
                top-56
                left-136
                "></div>
            <div className="
                circle2
                bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
                h-36
                w-36
                rounded-full
                absolute
                top-128
                left-212
                "></div>
            <img src="/images/logo/logo.jpeg" alt="" />
            <div className="
            form
            relative
            bg-[rgba(0,114,244,0.2)]
            flex
            flex-col
            items-center
            justify-center
            gap-16
            py-4
            px-8
            rounded-lg
            h-80
            backdrop-blur-xl
            z-10
            ">
                <div
                    className="
                flex
                flex-col
                justify-center
                items-center
                gap-8
                ">
                    <span className='select-none'>وردود به حساب کاربری</span>
                    <div className="register select-none">
                        <span>هنوز ثبت نام نکرده اید؟</span>
                        <span>{<Link to={"/register"}>ثبت نام</Link>}</span>
                    </div>
                    <input
                        onChange={e => setNumber(e.target.value)}
                        value={number}
                        type="text"
                        placeholder='09123456789'
                        className="
                        text-[#0000]
                        bg-white
                        border-b
                        border-[404348]
                        outline-1
                        outline-[#0C2965]
                        rounded-lg
                        h-8
                        w-64
                        "
                    />
                </div>
            </div>
        </div>
    )
}

export default Login

// bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]