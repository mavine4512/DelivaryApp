import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Item from './Components/ItemInfo';
import Library from './Components/Cart/Library';


const Stack= createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
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
        //  headerLeft:null,
         headerRight: () => (
          <Button
          onPress={()=>navigation.navigate('Library')}
            title="Library"
            color="#0B0B0B"
            borderRadius={30}
            marginRight='20'
          />
        ),
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
        name="Library"
        component={Library}
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
