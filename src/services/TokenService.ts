// import AsyncStorage from '@react-native-async-storage/async-storage';


// let token: TToken = null;

// export async function setToken(newToken: TToken): Promise<void> {
//   token = newToken;
//   if (token !== null) {
//     await AsyncStorage.setItem('token', token);
//   } else {
//     await AsyncStorage.removeItem('token');
//   }
// }

// export async function getToken(): Promise<TToken> {
//   if (token !== null) {
//     return token;
//   }
//   token = await AsyncStorage.getItem('token');
//   return token;
// }



// // Storing data
// // const storeData = async (key:Tkey, value:string) => {
// //     try {
// //       await AsyncStorage.setItem(key, value);
// //     } catch (e) {
// //       // handle error
// //     }
// //   };
  
// //   // Retrieving data
// //   const getData = async (key:Tkey) => {
// //     try {
// //       const value = await AsyncStorage.getItem(key);
// //       if (value !== null) {
// //         return value;
// //       }
// //     } catch (e) {
// //       // handle error
// //     }
// //   };
  
// //   // Removing data
// //   const removeData = async (key:Tkey) => {
// //     try {
// //       await AsyncStorage.removeItem(key);
// //     } catch (e) {
// //       // handle error
// //     }
// //   };




// // // Storing data with generics
// // const storeData = async <TValue>(key: Tkey, value: TValue): Promise<void> => {
// //     try {
// //       const jsonValue = JSON.stringify(value);
// //       await AsyncStorage.setItem(key.toString(), jsonValue);
// //     } catch (error) {
// //       // Handle error
// //       console.error('Error storing data:', error);
// //       throw error;
// //     }
// //   };






















