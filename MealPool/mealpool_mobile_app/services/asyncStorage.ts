import AsyncStorage from '@react-native-async-storage/async-storage';

 const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async  () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      if (jsonValue !== null){
        // We have data!!
        return jsonValue; 
      }
      }
    catch(e) {
      console.log("ERROR")
    }
  }

   const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }  

const Async_Storage = {
    storeData,
    getData,
    removeData
};

export default Async_Storage;