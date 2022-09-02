import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/pages/auth/Login'
import Sign from './src/pages/auth/Sign'
import Messages from './src/pages/Messages'
import Rooms from './src/pages/Rooms'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Toast from 'react-native-toast-message'
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const App = () => {

  const [userSession, setUserSession]=React.useState();

  React.useEffect(()=>{
    auth().onAuthStateChanged(user=>{
      setUserSession(!!user)
    })
  })

  const AuthStack=()=>{
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginPage' component={Login}/>
        <Stack.Screen name='SignPage' component={Sign}/>
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {!userSession?(
          <Stack.Screen name='AuthStack' component={AuthStack}/>
        ):(
          <Stack.Screen name='RoomsPage' component={Rooms}/>
        )}
        <Stack.Screen name='MessagesPage' component={Messages}/>
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  )
}

export default App