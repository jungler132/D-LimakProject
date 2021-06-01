import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LoginScreen from '../../../../views/loginScreen/index'



const LoginStack = createStackNavigator();


function LoginScreenStack() {
    return (
        <LoginStack.Navigator headerMode={false}>
            <LoginStack.Screen name='LoginStack' component={LoginScreen}/>
        </LoginStack.Navigator>
        
    )
}

export default LoginScreenStack;