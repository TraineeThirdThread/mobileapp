import React from 'react';
import { HomeScreen } from '../../screens/HomeScreen/HomeScreen';
import { ProfileScreen } from '../../screens/ProfileScreen/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import { useRootNavigation } from '../../shared/hooks/useTypedNavigation';
import { EScreens } from '../../shared/ENUMS/screens';
import { EColors } from '../../shared/ENUMS/colors';

export function HomeTabsNavigator() {
    const Tab = createBottomTabNavigator();
    const navigation = useRootNavigation();
    return (
        <Tab.Navigator>
            <Tab.Screen name={EScreens.homescreen} component={HomeScreen} />
            <Tab.Screen
                name={EScreens.profile}
                component={ProfileScreen}
                options={{
                    headerRight: () => (
                        <Button color={EColors.red} title="Edit profile" onPress={() => navigation.popTo(EScreens.editprofile)} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
