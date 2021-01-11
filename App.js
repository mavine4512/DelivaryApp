import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View,ActivityIndicator} from 'react-native';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Item from './Components/ItemInfo';
import Library from './Components/Cart/Library';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider as StoreProvider} from 'react-redux';
import store from './Components/Reducer/store';
import { LogBox } from 'react-native';
import AboutUs from './Components/AboutUs/AboutUs';
import Setting from './Components/AboutUs/Settings';



const Stack= createStackNavigator()


export default function App(){

  LogBox.ignoreLogs(['VirtualizedLists']);

  const initialLoginState ={
    isLoading:true,
    userName:null,
    email:null,
    userToken:null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          email:action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

useEffect(()=>{
   setTimeout(async()=>{
      //  setIsloading(false);
      let userToken;
      userToken=null
      try{
        await AsyncStorage.getItem('userToken')
      }catch(e){
        console.log(e);
      }
      dispatch({type:'REGISTER',token:userToken});
   },1000);
},[]);

 if(loginState.isLoading){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:'center',backgroundColor:'#5499D8'}}>
               <ActivityIndicator size="large" color= {['#5499D8','#01ab9d']}/>
        </View>
    )
 }

  return(
  
    <StoreProvider store = {store}>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor:'black',
      }}
      >

        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false}}
        />

          <Stack.Screen
        name="Home"
        component={Home}
        options={{
         headerShown:false,
         headerLeft:null,
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
        name="AboutUs"
        component={AboutUs}
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


        <Stack.Screen
        name="Registration"
        component={Registration}
        headerMode="..."
        options={{headerShown:false}}
        />

         <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
         headerShown:true,
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>  
   </StoreProvider>
  
  )
}
