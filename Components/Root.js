import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import Registration from './Registration';

const RootStack= createStackNavigator();

const Root =({navigation})=>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='Login' component={Login}/>
        <RootStack.Screen name='Registration' component={Registration}/>
    </RootStack.Navigator>
);
export default Root;
