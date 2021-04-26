import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key, value) => {
  try {
    // if object -- const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(`@rate-repository-app/${key}`, value);
  } catch (e) {
    console.error(e);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(`@rate-repository-app/${key}`);
    // if object -- return jsonValue != null ? JSON.parse(jsonValue) : null;
    if(value !== null) {
      return value;
    }
  } catch(e) {
    console.error(e);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(`@rate-repository-app/${key}`);
  } catch(e) {
    console.error(e);
  }
};

export default { storeData, getData, removeData };