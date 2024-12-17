import React from 'react';
import { Button, View } from 'react-native';
import { EColors } from '../../shared/ENUMS/colors';
import { useRootNavigation } from '../../shared/hooks/useTypedNavigation';
import { EScreens } from '../../shared/ENUMS/screens';

export function HomeScreen() {
    const navigation = useRootNavigation();

    const handleSignOut = () => {
        navigation.popTo(EScreens.login);
    };

    return (
        <View>
            <Button color={EColors.black} title="Sign out" onPress={handleSignOut} />
        </View>

    );
}
