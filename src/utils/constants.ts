export const LOGO_URL = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const ICON_URL = "https://occ-0-1190-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTfwM2ovA-4OPZZAq_9ayscE4Q7AOPp4fYmV5HRlvmkaZkCDVl_q-BZIp8lBcxUmxjaejy2xTVBIiw0FYjHJ2fEIfXWcO5E.png?r=61a" 
export const BACKGROUND_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/cc9ca4c0-cb83-4175-9a10-97d1a99a1e9a/PK-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4a0aded4-19f1-4fd7-b6ba-f65282911095_large.jpg"
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: `Bearer ${import.meta.env.REACT_APP_TMDB_KEY}`,
      Authorization: import.meta.env.VITE_TMBD_KEY
    }
  };

export const SUPPORTED_LANGUAGES = [{ identifier: "en", name: "English" }, { identifier: "spanish", name: "Spanish" }, { identifier: "urdu", name: "Urdu" }]
export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;