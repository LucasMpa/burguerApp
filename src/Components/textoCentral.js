import React from 'react';
import { View, Text } from 'react-native';


export default props => (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.corFundo || '#000'
    }}>
        <Text style={{
            fontSize: 40,
            color: props.corFonte || '#FFF'
        }}>
            {props.children}
        </Text>
    </View>

)