import { createContext, useContext } from "react"
export type GlobalContent = {
  meal: string
  setMeals:(c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
meal: 'Hello World', // set a default value
setMeals: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)