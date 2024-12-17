import React from 'react';
import { Button, View } from 'react-native';
import { EColors } from '../../shared/ENUMS/colors';
import useLoginStore from '../../app/stores/useLoginStore';

export function HomeScreen() {
    const { setIsSignedIn } = useLoginStore();
    const handleSignOut = () => {
        setIsSignedIn(false);
    };
    return (
        <View>
            <Button color={EColors.red} title="Sign out" onPress={handleSignOut} />
        </View>

    );
}
