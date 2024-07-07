import Header from "./Header"
import React, { useState } from "react"

const Login: React.FC = () => {

    const [isSignForm, setIsSignInForm] = useState<boolean>(true)

    const toggleSignInForm = () : void => {
        setIsSignInForm(!isSignForm);
    }
  return (
    <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/cc9ca4c0-cb83-4175-9a10-97d1a99a1e9a/PK-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4a0aded4-19f1-4fd7-b6ba-f65282911095_large.jpg" 
            alt="background-img"
            /> 
        </div>
        <form className="absolute bg-black w-3/12 my-36 mx-auto left-0 right-0 p-8 text-white bg-opacity-80 rounded-3xl">
            <h1 className="font-bold text-3xl py-4">
                {isSignForm ? "Sign In" : "Sign Up"}
            </h1>
          { !isSignForm &&  (<input
                type="text"
                placeholder="Full Name"
                className="my-2 p-4 w-full bg-gray-700 rounded-3xl"
            />)}
            <input
                type="text"
                placeholder="Email adress"
                className="my-2 p-4 w-full bg-gray-700 rounded-3xl"
            />
            <input
                type="password"
                placeholder="Password" 
                className="my-2 p-4 w-full bg-gray-700 rounded-3xl" 
            />
            <button className="p-4 my-6 bg-red-600 w-full rounded-3xl">
                {isSignForm ? "Sign in" : "Sign up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In"}
            </p>
        </form>
    </div>
  )
}

export default Login