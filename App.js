import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Components/Login';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Item from './Components/ItemInfo';
import Cart from './Components/Cart/AddCart';


const Stack= createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerTintColor:'black',
        // headerStyle:{backgroundColor :'#1e90ff'}
      }}
      >
        {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false}}
        /> */}
          <Stack.Screen
        name="Home"
        component={Home}
        options={{
         headerShown:true,
         headerLeft:null
        }}
        
        />
         <Stack.Screen
        name="ItemInfo"
        component={Item}
        options={{
         headerShown:true,
        }}
        />
         <Stack.Screen
        name="AddCart"
        component={Cart}
        options={{
         headerShown:true,
        }}
        />
         {/* <Stack.Screen
        name="CartItems"
        component={Cart}
        options={{
         headerShown:true,
        }}
        /> */}
      

        <Stack.Screen
        name="Registration"
        component={Registration}
        headerMode="..."
        options={{headerShown:false}}
        />


      </Stack.Navigator>

    </NavigationContainer>
  )
}
