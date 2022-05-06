import { createContext, useContext } from "react"
import { EmptyObject } from "react-hook-form";
import { RegisterUser, userValue } from "./types/User";



export type GlobalContent = {
  user: Array<RegisterUser>
  setUser:(c: Array<RegisterUser>) => void
  isLoggedIn: Boolean
  setIsLoggedIn:(c : any) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    user: userValue, // set a default value
    setUser: () => {},
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})
export const useGlobalContext = () => useContext(MyGlobalContext)