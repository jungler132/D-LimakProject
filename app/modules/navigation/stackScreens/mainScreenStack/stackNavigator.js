import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import MainScreen from '../../../../views/mainScreen/index'



const MainStack = createStackNavigator();


function MainScreenStack() {
    return (
        <MainStack.Navigator headerMode={false}>
            <MainStack.Screen name='MainStack' component={MainScreen}/>
        </MainStack.Navigator>
        
    )
}

export default MainScreenStack;