import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default props => (
    <View style={{ flex: 1 }}>
        <View>
            {props.avancar
                ? <Button
                    title='Avançar'
                    onPress={() => {
                        props.navigation.navigate(
                            props.avancar
                        )
                    }}
                />
                : false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)