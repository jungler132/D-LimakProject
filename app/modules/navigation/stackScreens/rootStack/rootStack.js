import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LoginScreenStack from '../loginScreenStack/stackNavigator';
import MainScreenStack from '../mainScreenStack/stackNavigator';
import ProfileScreenStack from '../profileScreenStack/stackNavigator';
import BottomTabs from '../../bottomTabs/index'
import SearchScreenStack from '../searchScreenStack/stackNavigator';

const Stack = createStackNavigator();


function RootStack() {

    return (
        <Stack.Navigator headerMode={false} initialRouteName={'LoginScreenStack'}>
            <Stack.Screen name='LoginScreenStack' component={LoginScreenStack}/>
            <Stack.Screen name='BottomTabs' component={BottomTabs}/>
            <Stack.Screen name="MainScreenStack" component={MainScreenStack}/>
            <Stack.Screen name='SearchScreenStack' component={SearchScreenStack}/>
            <Stack.Screen name='ProfileScreenStack' component={ProfileScreenStack}/>
        </Stack.Navigator>
    )
}

export default RootStack;

