// import {useState} from 'react';

// import {Text, SafeAreaView, View, StyleSheet, Button} from 'react-native';

// import FormTextField from '../../components/TextInput/TextInput';
// import {sendPasswordResetLink} from '../../services/AuthService';

// export default function () {
//   const [email, setEmail] = useState('');
//   const [resetStatus, setResetStatus] = useState('');
//   const {errors, setErrors} = useState({});
//   async function handleForgotPassword() {
//     setErrors({}); //reset Errors
//     setResetStatus('');

//     try {
//       const status = await sendPasswordResetLink(
//         email,

//         // { //Already set in axios file
//         //   headers: {
//         //     Accept: "application/json",
//         //   },
//         // }
//       );
//       setResetStatus(status);

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
//         {resetStatus && <Text style={styles.resetStatus}>{resetStatus}</Text>}
//         <FormTextField
//           label="Email address:"
//           value={email}
//           onChangeText={(text:string) => setEmail(text)}
//           keyboardType="email-address"
//           errors={errors.email}
//         />

//         <Button
//           title="E-mail Reset password link"
//           onPress={handleForgotPassword}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {backgroundColor: '#fff', flex: 1},
//   container: {padding: 20, rowGap: 16},
//   resetStatus: {
//     marginBottom: 10,
//     color: 'green',
//   },
// });
