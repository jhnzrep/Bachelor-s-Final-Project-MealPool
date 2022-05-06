import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyGlobalContext } from './GlobalContext';
import { EmptyObject } from 'react-hook-form';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { RegisterUser, userValue } from './types/User';

export default function App() {

  const [user, setUser] = useState<Array<RegisterUser>>(userValue)

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <MyGlobalContext.Provider value= {{ user, setUser }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </MyGlobalContext.Provider>
      </SafeAreaProvider>
    );
  }
}
