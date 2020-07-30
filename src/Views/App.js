import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import TelaA from './telaA'
import TelaB from './telaB'
import TelaC from './telaC'


export default props => (
    <SafeAreaView style={{ flex: 1 }}>
            <TelaA/>
            <TelaB/>
            <TelaC/>

    </SafeAreaView>

)

