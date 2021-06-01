import React from 'react';
import { View , Text} from 'react-native'
import { styles } from './styles';


const ProfileScreen = () => {
    return (
      <View style={styles.mainViewStyle}>
        <Text style={styles.textStyle}>
            ProfileScreen
        </Text>
      </View>
    )
}

export default ProfileScreen;