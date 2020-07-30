import React from 'react';
import { View, Text } from 'react-native';
import TextoCentral from '../Components/textoCentral'

import PassoStack from '../Components/PassoStack'


export default props => (
    <PassoStack {...props} avancar="TelaC">
        <TextoCentral corFundo='#3b82c4'>
            Tela B
        </TextoCentral>
    </PassoStack>


)
