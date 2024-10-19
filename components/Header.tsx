import React from "react";
import {View, Image, Text} from "react-native";

export const Header: React.FC = () => {

    return (
        <View style={{ flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Image source={require('../assets/img/logo.png')} style={{width: 24, height: 24, tintColor:'#b4befe', marginRight: 10}}/>
            <Text style={{ color: '#cba6f7', fontSize: 25}}>dodoApp</Text>
        </View>
    )
}