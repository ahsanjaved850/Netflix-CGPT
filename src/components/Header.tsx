import React, { useEffect } from "react"
import  {auth} from "../utils/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore"
import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../utils/appStore";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header: React.FC = () => {

  const navigate = useNavigate()
  const user = useSelector(( store : RootState ) => store.user)
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector((store : RootState) => store?.gpt?.showGptSearch)

  const handleSignOut = () : void => {
    signOut(auth).then(() => {})
    .catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user: User | null)=> {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName}))
          navigate("/browse")

        } else {
          dispatch(removeUser())
          navigate("/")
        
        }
      });
      // when component unmount the unsubscribed will be called
      return () => unsubscribe();
    }, [])

  const handleGptSearch = () : void => {
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e : React.ChangeEvent<HTMLSelectElement>) : void => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='sticky top-0 z-10 w-full px-8 py-2 bg-black flex flex-col justify-between md:bg-black md:py-0 md:flex-row'>
        <img
          className='w-44 mx-auto md:mx-0' 
          src= {LOGO_URL} 
            alt='logo'
         />
        { user && 
          <div className="flex p-2 justify-between">
            {
              value && <select  className="text-white pl-3 py-1 m-2 text-lg bg-red-600" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lan) => (
                  <option key={lan.identifier} value={lan.identifier}>
                    {lan.name}
                  </option>
                ))}
              </select>}
              <button 
                className="text-white px-2 py-1 m-1 font-semibold text-md bg-red-600 md:px-6 md:font-bold md:text-lg"
                onClick={handleGptSearch} 
              >
              {value ? "Home Page" : "GPT Search"} 
            </button>
           
            <button onClick={handleSignOut} className="font-semibold text-white md:font-bold">(Sign Out)</button>
          </div>
         }
    </div>
  )
}

export default Header