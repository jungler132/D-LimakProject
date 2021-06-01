import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import ProfileScreen from '../../../../views/profileScreen/index'



const ProfileStack = createStackNavigator();


function ProfileScreenStack() {
    return (
        <ProfileStack.Navigator headerMode={false}>
            <ProfileStack.Screen name='ProfileStack' component={ProfileScreen}/>
        </ProfileStack.Navigator>
        
    )
}

export default ProfileScreenStack;