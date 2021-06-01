import React from 'react';
import { View , Text} from 'react-native'
import { styles } from './styles';


const MainScreen = () => {
    return (
      <View style={styles.mainViewStyle}>
        <Text style={styles.textStyle}>
            MainScreen
        </Text>
      </View>
    )
}

export default MainScreen;