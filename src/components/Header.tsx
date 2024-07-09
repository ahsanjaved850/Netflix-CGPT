import React from "react"
import  {auth} from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore"

const Header: React.FC = () => {

  const navigate = useNavigate()
  const user = useSelector(( store : RootState ) => store.user)

  const handleSignOut = () : void => {
    signOut(auth).then(() => {
      navigate("/")
    })
    .catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className='absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
        <img
          className='w-44' 
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
            alt='logo'
         />
        { user && <div className="flex p-2 space-x-1">
          <img 
            className="w-14 h-14" 
            alt="usericon" 
            src="https://occ-0-1190-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTfwM2ovA-4OPZZAq_9ayscE4Q7AOPp4fYmV5HRlvmkaZkCDVl_q-BZIp8lBcxUmxjaejy2xTVBIiw0FYjHJ2fEIfXWcO5E.png?r=61a" 
            />
          <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
         </div>}
    </div>
  )
}

export default Header