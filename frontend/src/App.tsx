import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddWorkoutScreen from './screens/AddWorkoutScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WorkoutListScreen from './screens/WorkoutListScreen';
import { UserTokenProvider } from './context/UserTokenContext';
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'


SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'BlackOpsOne-Regular': require('../assets/fonts/BlackOpsOne-Regular.ttf'),
          'MerriweatherSans': require('../assets/fonts/MerriweatherSans-VariableFont_wght.ttf')
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
         <UserTokenProvider>
           <Stack.Navigator initialRouteName="LoginScreen">
             <Stack.Screen name="AddWorkoutScreen" component={AddWorkoutScreen} options={{ headerShown: false }}/>
             <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
             <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }}/>
             <Stack.Screen name="WorkoutListScreen" component={WorkoutListScreen} options={{ headerShown: false }}/>
           </Stack.Navigator>
         </UserTokenProvider>
       </NavigationContainer>
  );
}