// import {useState, useContext} from 'react';

// import {SafeAreaView, View, StyleSheet, Button, Platform} from 'react-native';
// import axios from '../../utils/network/axios';

// import FormTextField from '../../components/TextInput/TextInput';
// import {login, loadUser} from '../../services/AuthService';
// import AuthContext from '../../contexts/AuthContext';
// export default function ({navigation}) {
//   const {setUser} = useContext(AuthContext);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const {errors, setErrors} = useState({});
//   async function handleLogin() {
//     setErrors({}); //reset Errors
//     try {
//       await login(
//         {
//           email,
//           password,
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
//           label="Email address:"
//           value={email}
//           onChangeText={(text: string) => setEmail(text)}
//           keyboardType="email-address"
//           errors={errors.email}
//         />
//         <FormTextField
//           label="Password:"
//           secureTextEntry={true}
//           value={password}
//           onChangeText={(text: string) => setPassword(text)}
//           errors={errors.password}
//         />
//         <Button title="Login" onPress={handleLogin} />
//         <Button
//           title="Create an account"
//           onPress={() => {
//             navigation.navigate('Create account');
//           }}
//         />
//         <Button
//           title="Forgot your password"
//           onPress={() => {
//             navigation.navigate('Forgot password');
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {backgroundColor: '#fff', flex: 1},
//   container: {padding: 20, rowGap: 16},
// });
