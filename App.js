import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View,ActivityIndicator,Button} from 'react-native';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Item from './Components/ItemInfo';
import Library from './Components/Cart/Library';
// import { AuthContext} from './Components/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import DrawerContent from './Components/DrawerContent'
import AboutUs from './Components/AboutUs/AboutUs';

import {Provider as StoreProvider} from 'react-redux'
import store from './Components/Reducer/store'
import { LogBox } from 'react-native';



const Stack= createStackNavigator()


export default function App(){

  LogBox.ignoreLogs(['VirtualizedLists']);

  // const [isLoading,setIsloading]= React.useState(true);
  // const [userToken,setUserToken]= React.useState(null);


    // const [isLoading,setIsloading]= React.useState(true);
  // const [userToken,setUserToken]= React.useState(null);
//   const  dispatch = useDispatch()
//  const navigation=useNavigation()
//   useFocusEffect(()=>{
// getUser().then(user=>{
//   if(user!=null){
//     dispatch(saveuser(user))

//   // navigation.navigate("Home")
//   }
 
// }).catch(error=>{

// })
//   },[])


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
          // userName: action.id,
          email:action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

// const authContext =React.useMemo(()=>({
//     signIn:async(userName,password)=>{
//         // setUserToken('jshvajbk');
//         // setIsloading(false);
//         let userToken;
//         userToken=null;
//         if(userName=='user'&& password=='pass'){
//           try{
//             userToken='vjhbjk';
//             await AsyncStorage.setItem('userToken', userToken)
//           }catch(e){
//             console.log(e);
//           }
//         }
//         // console.log('user Token',userToken)
//         dispatch({type:'LOGIN',id:userName,token:userToken})
//     },
    // signOut:async()=>{
    //     // setUserToken(null);
    //     // setIsloading(false);
    //     try{
    //       await AsyncStorage.removeItem('userToken')
    //     }catch(e){
    //       console.log(e);
    //     }
    //     dispatch({type:'LOGOUT'})
    // },

  //   register: async (email,password)=>{
  //     try{
  //        await auth().createUserWithEmailAndPassword(email,password)
  //     }catch(e){
  //        console.log(e,'Appjs 2');
  //     }
  // }, 

    // signUp:()=>{
    //     setUserToken(null);
    //     setIsloading(false);
    // },

// }));

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
      // console.log('user Token',userToken)
      dispatch({type:'REGISTER',token:userToken});
   },1000);
},[]);

 if(loginState.isLoading){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
               <ActivityIndicator size="large" color= '#5499D8'/>
        </View>
    )
 }

  return(
  
    <StoreProvider store = {store}>
    <NavigationContainer>
      {/* <DrawerContent /> */}
      <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor:'black',
        // headerStyle:{backgroundColor :'#1e90ff'}
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

      </Stack.Navigator>
    </NavigationContainer>  
   </StoreProvider>
  
  )
}
