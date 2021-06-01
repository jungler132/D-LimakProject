import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeIcon from '../../../assets/home';
import SearchIcon from '../../../assets/search';
import ProfileIcon from '../../../assets/profile';
import { colors } from '../../../services/config/colors';
import { styles } from './styles';
import MainScreenStack from '../stackScreens/mainScreenStack/stackNavigator';
import ProfileScreenStack from '../stackScreens/profileScreenStack/stackNavigator';
import SearchScreenStack from '../stackScreens/searchScreenStack/stackNavigator';


const Tab = createBottomTabNavigator();

function BottomTabs (){
    return (
        <Tab.Navigator initialRouteName='Main' tabBarOptions={{labelStyle:styles.labelStyle,activeBackgroundColor:colors.racingGreen , inactiveBackgroundColor:colors.racingGreen , tabStyle:styles.tabStyleStyle , keyboardHidesTabBar:true}}>
            <Tab.Screen name='Main' component={MainScreenStack} options={{tabBarLabel:({ focused }) => (focused ? <HomeIcon color={colors.orange}/> : <HomeIcon color={colors.white}/>)}}/>
            <Tab.Screen name='Search' component={SearchScreenStack} options={{tabBarLabel:({ focused }) => (focused ? <SearchIcon color={colors.orange}/> : <SearchIcon color={colors.white}/>)}}/>
            <Tab.Screen name='Profile' component={ProfileScreenStack} options={{tabBarLabel:({ focused }) => (focused ? <ProfileIcon color={colors.orange}/> : <ProfileIcon color={colors.white}/>)}}/>
        </Tab.Navigator>
    )
}
export default BottomTabs;
