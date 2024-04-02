// import {SafeAreaView, Text, Button} from 'react-native';
// import {useContext} from 'react';
// import AuthContext from '../../contexts/AuthContext';
// import {logout} from '../../services/AuthService';
// import {NavigationContainer, RouteProp} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// // Define the Home screen component
// interface HomeScreenProps {
//   navigation: RouteProp<RootStackParamsList, 'Home'>;
// }
// export default function () {
//   const {user, setUser} = useContext(AuthContext);
//   async function handleLogout() {
//     await logout();
//     setUser?.(null);
//   }
//   return (
//     <SafeAreaView>
//       <Text>Welcome Home,{user?.name}</Text>
//       <Button title="Logout" onPress={handleLogout} />
//     </SafeAreaView>
//   );
// }
