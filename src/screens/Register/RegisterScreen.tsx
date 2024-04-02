// import {useState, useContext} from 'react';

// import {SafeAreaView, View, StyleSheet, Button, Platform} from 'react-native';
// // import axios from "../utils/axios";

// import FormTextField from '../../components/TextInput/TextInput';
// import {register, loadUser} from '../../services/AuthService';
// import AuthContext from '../../contexts/AuthContext';

// export default function () {
//   const {setUser} = useContext(AuthContext);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState('');
//   const {errors, setErrors} = useState({});
//   async function handleRegister({navigation}) {
//     setErrors({}); //reset Errors
//     try {
//       await register(
//         {
//           name,
//           email,
//           password,
//           password_confirmation: passwordConfirmation,
//           device_name: `${Platform.OS} ${Platform.Version}`,
//         },
//         // { //Already set in axios file
//         //   headers: {
//         //     Accept: "application/json",
//         //   },
//         // }
//       );
//       const user = await loadUser();
//       setUser?.(user);
//       //TODO: try Using Verify Email or if Google try not to verify screen also do add in app.js if not verified then verify first
//       navigation.replace('Home');
//       // console.log(user);
//     } catch (e) {
//       if (e.response?.status === 422) {
//         setErrors(e.response.data.errors);
//       }
//     }
//     // console.log(email, password);
//   }
//   return (
//     <SafeAreaView style={styles.wrapper}>
//       <View style={styles.container}>
//         <FormTextField
//           label="Name:"
//           value={name}
//           onChangeText={(text:string) => setName(text)}
//           // keyboardType="email-address"
//           errors={errors.name}
//         />
//         <FormTextField
//           label="Email address:"
//           value={email}
//           onChangeText={(text:string) => setEmail(text)}
//           keyboardType="email-address"
//           errors={errors.email}
//         />
//         <FormTextField
//           label="Password:"
//           secureTextEntry={true}
//           value={password}
//           onChangeText={(text:string) => setPassword(text)}
//           errors={errors.password}
//         />
//         <FormTextField
//           label="Confirm Password:"
//           secureTextEntry={true}
//           value={passwordConfirmation}
//           onChangeText={(text:string) => setPasswordConfirmation(text)}
//           errors={errors.password_confirmation}
//         />
//         <Button title="Register Now" onPress={handleRegister} />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {backgroundColor: '#fff', flex: 1},
//   container: {padding: 20, rowGap: 16},
// });
