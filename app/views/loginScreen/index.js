import React from 'react';
import { View , Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native';



const LoginScreen = () => {

  const navigation = useNavigation()


    return (
      <View style={{flex:1 , backgroundColor:'silver'}}>
      <View style={{backgroundColor:'silver' , justifyContent:'center', alignItems:'center' , marginTop:'60%'}}>
          <View style={{width:'95%', height:150,  backgroundColor:'#232426' , borderRadius:10}}>
            <TextInput placeholderTextColor={'#232426'} placeholder={'LOGIN'} style={{width:'70%' , height: 50 , backgroundColor:'white' , marginStart:'15%' , borderRadius:8 , borderColor:'orange' , borderWidth:3 ,marginTop:15}}/>
            <TextInput secureTextEntry={true} placeholderTextColor={'#232426'} placeholder={'PASSWORD'} style={{width:'70%' , height: 50 , backgroundColor:'white' , marginStart:'15%' ,  borderRadius:8 , borderColor:'orange' , borderWidth:3 , marginTop:20}}/>
          </View>
      </View>
      <TouchableOpacity  onPress={() => {navigation.navigate('BottomTabs')}} style={{backgroundColor:'white' , width:'30%' , height:'5%' , marginStart:'35%' , marginTop:'50%' , borderRadius:8 , borderWidth:3 , borderColor:'orange' , justifyContent:'center' , alignItems:'center'}}>
        <Text style={{fontSize:20 , fontWeight:'bold' , color:'black'}}>
          GO IN
        </Text>
      </TouchableOpacity>
      </View>
    )
}

export default LoginScreen;


{/* <View style={styles.mainViewStyle}>
        <Text style={styles.textStyle}>
            LoginScreen
        </Text>
        <TouchableOpacity onPress={() => {navigation.navigate('MainScreenStack')}} >
          <View style={{width:100 , height : 100 , backgroundColor:'pink'}}>
            <Text>
              Press 
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}