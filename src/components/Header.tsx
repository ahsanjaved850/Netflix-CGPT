import React, { useEffect } from "react"
import  {auth} from "../utils/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore"
import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../utils/appStore";
import { ICON_URL, LOGO_URL } from "../utils/constants";

const Header: React.FC = () => {

  const navigate = useNavigate()
  const user = useSelector(( store : RootState ) => store.user)
  const dispatch = useDispatch<AppDispatch>();

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

  return (
    <div className='sticky top-0 z-10 w-full px-8 py-2 bg-black flex justify-between'>
        <img
          className='w-44' 
          src= {LOGO_URL} 
            alt='logo'
         />
        { user && <div className="flex p-2 space-x-1">
          <img 
            className="w-14 h-14" 
            alt="usericon" 
            src={ICON_URL}
            />
          <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
         </div>}
    </div>
  )
}

export default Header