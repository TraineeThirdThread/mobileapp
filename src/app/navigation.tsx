import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EScreens } from '../shared/ENUMS/screens';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen/RegisterScreen';
import useLoginStore from '../shared/stores/useLoginStore';
import { HomeTabsNavigator } from '../navigators/HomeTabsNavigator/HomeTabsNavigator';

const Stack = createNativeStackNavigator();

export function RootStack() {
    const { isSignedIn } = useLoginStore();
    return (isSignedIn ?
        (
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeTabsNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        ) : (<Stack.Navigator >
            <Stack.Screen
                name={EScreens.login}
                component={LoginScreen}
                options={
                    { headerShown: false }
                } />
            <Stack.Screen
                name={EScreens.register}
                component={RegisterScreen}
                options={
                    { headerShown: false }
                } />
        </Stack.Navigator >)
    );
}
