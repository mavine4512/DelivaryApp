import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Item from './ItemInfo';
import Library from './Cart/Library';

// const HomeStack = createStackNavigator();
// const ItemStack = createStackNavigator();

const Stack= createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTab = () =>(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor='#fff'
      >
          <Tab.Screen
           name="Home"
           component={Home}
           options={{
               tabBarLabel:'Home',
               tabBarColor:'#009387',
               tabBarIcon:({color})=>(
                   <Icon name='ios-home' color={color} size={20}/>
               ),
           }}
           />
            <Tab.Screen
           name="Item"
           component={Item}
           options={{
               tabBarLabel:'Details',
               tabBarColor:'#1f65ff',
               tabBarIcon:({color})=>(
                   <Icon name='ios-notification' color={color} size={20}/>
               ),
           }}
           />
            <Tab.Screen
           name="Library"
           component={Library}
           options={{
               tabBarLabel:'Library',
               tabBarColor:'#009387',
               tabBarIcon:({color})=>(
                   <Icon name='ios-Windows' color={color} size={20}/>
               ),
           }}
           />
      </Tab.Navigator>

);

export default MainTab;

// const Home= ({navigation})=>(
//     <Stack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#009387',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//             fontWeight: 'bold'
//             }
//         }}>
//              <Home.Screen name="Home" component={Home} options={{
//         title:'Overview',
//         headerLeft: () => (
//             <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </Stack.Navigator>
// );

// const Item = ({navigation}) => (
//     <Stack.Navigator screenOptions={{
//             headerStyle: {
//             backgroundColor: '#1f65ff',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//             fontWeight: 'bold'
//             }
//         }}>
//             <Item.Screen name="Details" component={Item} options={{
//             headerLeft: () => (
//                 <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//             )
//             }} />
//     </Stack.Navigator>
//     );







 