import React from 'react';
import TextoCentral from '../Components/textoCentral'
import PassoStack from '../Components/PassoStack'
import { View, Button } from 'react-native';


export default props => {
    return (
            <PassoStack {...props} avancar="TelaB">
                <TextoCentral corFundo='#e53935'>
                    Tela A
                </TextoCentral>
            </PassoStack>
    )
}


