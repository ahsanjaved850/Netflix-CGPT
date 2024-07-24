import { checkValidData } from "../utils/validate"
import Header from "./Header"
import React, { useRef, useState } from "react"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import  {auth} from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/appStore";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_URL } from "../utils/constants";

const Login: React.FC = () => {

    const [isSignForm, setIsSignInForm] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const name = useRef<HTMLInputElement | null>(null);
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null)

    const dispatch = useDispatch<AppDispatch>();

    const handleButtonClick = (e : React.MouseEvent<HTMLButtonElement>) : void => {
        // Validate the form data
        e.preventDefault();

        const refName = name.current?.value || "";
        const refEmail = email.current?.value || "";
        const refPass = password.current?.value || "";

        if(isSignForm){
            const message = checkValidData(refEmail, refPass, "")
            setErrorMessage(message);
            if(message) return;
        }
        const message = checkValidData(refEmail, refPass, refName)
        setErrorMessage(message);
        if(message) return;
        
        // Sign In / Sign Up
        if(!isSignForm){
            // Signup logic
            createUserWithEmailAndPassword(auth, refEmail, refPass)
            .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                    displayName: name.current?.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    const {uid , email, displayName} = auth.currentUser!;
                    dispatch(addUser({ uid: uid, email: email, displayName: displayName}))
                   

                  }).catch((error) => {
                    setErrorMessage(error.message)
                  });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setErrorMessage(errorCode +"-"+ errorMessage)
            });
        } else {
            // SIgn in logic
            signInWithEmailAndPassword(auth, refEmail, refPass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-"+ errorMessage)
            });
        }
    }

    const toggleSignInForm = () : void => {
        setIsSignInForm(!isSignForm);
    }
  return (
    <div>
        <Header />
        <div className="absolute">
            <img className="h-[100vh] w-screen object-cover" src={BACKGROUND_URL} 
            alt="background-img"
            /> 
        </div>
        <form className="absolute bg-black w-[90%] my-20 md:w-3/12 md:my-36 mx-auto left-0 right-0 p-8 text-white bg-opacity-80 rounded-3xl">
            <h1 className="font-bold text-3xl py-4">
                {isSignForm ? "Sign In" : "Sign Up"}
            </h1>
          { !isSignForm &&  (<input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="my-2 p-4 w-full bg-gray-700 rounded-3xl"
            />)}
            <input
                ref={email}
                type="text"
                placeholder="Email adress"
                className="my-2 p-4 w-full bg-gray-700 rounded-3xl"
            />
            <input
                ref={password}
                type="password"
                placeholder="Password" 
                className="my-2 p-4 w-full bg-gray-700 rounded-3xl" 
            />
            { errorMessage && <p className="text-red-600 font-bold text-sm">{errorMessage}</p> }
            <button className="p-4 my-6 bg-red-600 w-full rounded-3xl" onClick={handleButtonClick}>
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