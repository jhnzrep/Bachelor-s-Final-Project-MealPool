import AsyncStorage from '@react-native-async-storage/async-storage';

 const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      console.log(value)
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
        console.log(e)
    }
  }

   const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@MyApp_key')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }


  
  

const Async_Storage = {
    storeData,
    getData
};

export default Async_Storage;