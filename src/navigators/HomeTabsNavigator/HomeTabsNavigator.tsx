import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import { useRootNavigation } from '../../shared/hooks/useTypedNavigation';
import { EScreens } from '../../shared/ENUMS/screens';
import { EColors } from '../../shared/ENUMS/colors';
import { ProfileScreen } from '../../screens/ProfileScreen';
import { HomeScreen } from '../../screens/HomeScreen';

export function HomeTabsNavigator() {
    const Tab = createBottomTabNavigator();
    const navigation = useRootNavigation();
    const rightButton = () => {
        return (
            <Button color={EColors.red} title="Edit profile" onPress={() => navigation.popTo(EScreens.editprofile)} />
        );
    };
    return (
        <Tab.Navigator>
            <Tab.Screen name={EScreens.homescreen} component={HomeScreen} />
            <Tab.Screen
                name={EScreens.profile}
                component={ProfileScreen}
                options={{
                    headerRight: rightButton,
                }} />
        </Tab.Navigator>
    );
}
