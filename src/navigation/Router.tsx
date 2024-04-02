import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import AuthContext from '../contexts/AuthContext';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import { loadUser } from '../services/AuthService';
const Stack = createNativeStackNavigator();

function Router() {
  const [user, setUser] = useState();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    async function runEffect() {
      try {
        const user = await loadUser();
        setUser?.(user);
      } catch (e) {
        console.log('Failed to load user', e);
      }
      setStatus('idle');
    }
    runEffect();
  }, []);
  if (status === 'loading') {
    return <SplashScreen />;
  }
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center', // Align titles to the center
          }}>
          {user ? (
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Home'}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{title: 'Login'}}
              />
              <Stack.Screen name="Create account" component={RegisterScreen} />
              <Stack.Screen
                name="Forgot password"
                component={ForgotPasswordScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default Router;

const styles = StyleSheet.create({});
