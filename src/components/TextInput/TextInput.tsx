// import {Text, View, TextInput, StyleSheet} from 'react-native';
// import {styles} from './TextInput.styles';

// type TextFieldProp= {
//   label: string | null;
//   errors:string[]| null;
//   // ...rest: string[]| null;
// }

// // export default function FormTextField({label, errors = [], ...rest}) {
// //   return (
// //     <View>
// //       {label && <Text style={styles.label}>{label}</Text>}
// //       <TextInput
// //         style={styles.textInput}
// //         autoCapitalize="none"
// //         {...rest} //rest of arguments
// //       />
// //       {errors.map(err => {
// //         return (
// //           <Text key={err} style={styles.error}>
// //             {err}
// //           </Text>
// //         );
// //       })}
// //     </View>
// //   );
// // }


// //////////////////////



// export default function FormTextField({props:TextFieldProp}) {
//   return (
//     <View>
//       {label && <Text style={styles.label}>{label}</Text>}
//       <TextInput
//         style={styles.textInput}
//         autoCapitalize="none"
//         {...rest} //rest of arguments
//       />
//       {errors.map(err => {
//         return (
//           <Text key={err} style={styles.error}>
//             {err}
//           </Text>
//         );
//       })}
//     </View>
//   );
// }
