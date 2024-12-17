import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EScreens } from '../shared/ENUMS/screens';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen/RegisterScreen';
import { HomeTabsNavigator } from '../navigators/HomeTabsNavigator/HomeTabsNavigator';
import { EditProfileScreen } from '../screens/EditProfileScreen/EditProfileScreen';

const Stack = createNativeStackNavigator();

export function RootStack() {
    return (

        <Stack.Navigator>
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
            <Stack.Screen
                name={EScreens.hometabs}
                component={HomeTabsNavigator}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name={EScreens.editprofile}
                component={EditProfileScreen}
            />
        </Stack.Navigator>

    );
}
