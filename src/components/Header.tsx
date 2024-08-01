import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/appStore";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user.email);
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector((store: RootState) => store?.gpt?.showGptSearch);

  const handleSignOut = (): void => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        if (window.location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        if (window.location.pathname !== "/") {
          navigate("/");
        }
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearch = (): void => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleLogo = () => {
    if (value) {
      dispatch(toggleGptSearchView());
    }
    navigate("/browse");
  };

  return (
    <div className="fixed z-10 w-full px-8 bg-black flex flex-col justify-between md:bg-black md:py-0 md:flex-row">
      <img
        className="md:w-48 w-36 mx-auto md:mx-0 cursor-pointer"
        src={LOGO_URL}
        alt="logo"
        onClick={handleLogo}
      />
      {user && (
        <div className="flex md:p-2 justify-between">
          {value && (
            <select
              className="text-white pl-3 py-1 m-2 text-sm md:text-lg bg-inherit hover:font-semibold cursor-pointer hover:underline"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lan) => (
                <option
                  className="bg-black text-white bg-opacity-80"
                  key={lan.identifier}
                  value={lan.identifier}
                >
                  {lan.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white mx-2 font-normal text-sm md:text-lg md:mx-4 hover:font-semibold hover:underline"
            onClick={handleGptSearch}
          >
            {value ? "Home Page" : "GPT Search"}
          </button>
          <div className="relative group text-sm md:text-lg ">
            <button className="font-normal md:font-normal bg-black text-white cursor-pointer ml-0 pt-3 m-2 hover:underline hover:font-semibold">
              {"Profile"}
            </button>
            <ul className="absolute right-0 w-30 bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <li
                className="p-2 bg-opacity-80 text-sm hover:underline cursor-pointer"
                onClick={handleSignOut}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
