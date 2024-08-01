import { checkValidData } from "../utils/validate"
import Header from "./Header"
import React, { useRef, useState } from "react"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/appStore";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_URL } from "../utils/constants";

const Login: React.FC = () => {
  const [isSignForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const refName = name.current?.value || "";
    const refEmail = email.current?.value || "";
    const refPass = password.current?.value || "";

    if (isSignForm) {
      const message = checkValidData(refEmail, refPass, "");
      setErrorMessage(message);
      if (message) return;
    }
    const message = checkValidData(refEmail, refPass, refName);
    setErrorMessage(message);
    if (message) return;

    if (!isSignForm) {
      createUserWithEmailAndPassword(auth, refEmail, refPass)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser!;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, refEmail, refPass)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = (): void => {
    setIsSignInForm(!isSignForm);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={BACKGROUND_URL}
          alt="background-img"
        />
      </div>
      <form className="absolute inset-0 flex items-center justify-start px-4">
        <div className="bg-black bg-opacity-80 w-full max-w-md mx-auto p-10 rounded-md text-white">
          <h1 className="font-bold text-3xl py-8">
            {isSignForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="my-2 p-4 w-full bg-inherit bg-opacity-90 rounded-md border-2 border-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="my-2 p-4 w-full bg-inherit bg-opacity-90 rounded-md border-2 border-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-2 p-4 w-full bg-inherit bg-opacity-90 rounded-md border-2 border-gray-700"
          />
          {errorMessage && (
            <p className="text-red-600 font-normal text-sm">{errorMessage}</p>
          )}
          <button
            className="px-4 py-2 my-3 bg-red-600 font-medium w-full rounded-md"
            onClick={handleButtonClick}
          >
            {isSignForm ? "Sign in" : "Sign up"}
          </button>
          <p className="py-6 text-gray-600" onClick={toggleSignInForm}>
            {isSignForm ? "New to Netflix?" : "Already have an account?"}
            <span className="mx-1 py-6 text-white font-semibold cursor-pointer hover:underline">
              {isSignForm ? "Sign Up Now" : "Sign In"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
