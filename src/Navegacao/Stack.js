import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TelaA from '../Views/telaA'
import TelaB from '../Views/telaB'
import TelaC from '../Views/telaC'
import Login from '../login'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login"
            options={{ title: 'Bem Vindo!' }}
            component={Login}  />

        <Stack.Screen name="TelaA"
            options={{ title: 'Informações Adicionais' }}
            component={TelaA}  />

        <Stack.Screen name="TelaB"
            options={{ title: 'Informações Adicionais' }}
            component={TelaB} />
        <Stack.Screen name="TelaC"
            options={{ title: 'Informações Adicionais' }}
            component={TelaC} />

    </Stack.Navigator>
)