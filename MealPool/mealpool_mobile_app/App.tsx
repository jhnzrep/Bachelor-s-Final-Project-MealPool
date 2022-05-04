import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyGlobalContext } from './GlobalContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
const [meal, setMeals] = useState<string>('dasdas')

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <MyGlobalContext.Provider value= {{ meal, setMeals }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </MyGlobalContext.Provider>
      </SafeAreaProvider>
    );
  }
}
