import React from 'react';
import { Button, View } from 'react-native';
import useLoginStore from '../../shared/stores/useLoginStore';
import { EColors } from '../../shared/ENUMS/colors';
import { useMainTabsNavigation } from '../../shared/hooks/useTypedNavigation';

export function HomeScreen() {
    const navigation = useMainTabsNavigation()
    const { isSignedIn, setIsSignedIn } = useLoginStore();
    const handleSignOut = () => {
        setIsSignedIn(false);

    };
    return (
        <View>
            <Button color={EColors.red} title="Sign out" onPress={handleSignOut} />
        </View>

    );
}