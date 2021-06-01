import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import SearchScreen from '../../../../views/searchScreen/index'



const SearchStack = createStackNavigator();


function SearchScreenStack() {
    return (
        <SearchStack.Navigator headerMode={false}>
            <SearchStack.Screen name='SearchStack' component={SearchScreen}/>
        </SearchStack.Navigator>
        
    )
}

export default SearchScreenStack;