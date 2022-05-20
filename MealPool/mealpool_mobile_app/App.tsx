import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyGlobalContext } from './GlobalContext';
import { EmptyObject } from 'react-hook-form';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { RegisterUser, userValue } from './types/User';
import Async_Storage from './services/asyncStorage';
import UserService from './services/user_service';

export default function App() {
  const [user, setUser] = useState<Array<RegisterUser>>(userValue)
  // Value true is only for testing purpose! 
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    Async_Storage.getData()
    .then((response) => { 
      const data =  response
      /* if (data == "") {
         setIsLoggedIn(false)
      }
      else{
         setIsLoggedIn(true)
      } */
      UserService.getUserById("62745649a0293dc967bbe5b3").then(response=> {
        console.log("USER SERVICE", response)
        setUser([{
          fnameVal: response.firstName,
          lnameVal: response.lastName,
          emailVal: response.email,
          passwordVal: "",
          dobVal: new Date(),
          streetVal: "",
          cityVal: "",
          countryVal: "",
          postalCodeVal: "",
          phoneVal: "",
          reviewObj: []
        }])
      })  

     
    })
  
   
  }, [])
  

 

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <MyGlobalContext.Provider value= {{ user, setUser, isLoggedIn, setIsLoggedIn }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </MyGlobalContext.Provider>
      </SafeAreaProvider>
    );
  }
}
