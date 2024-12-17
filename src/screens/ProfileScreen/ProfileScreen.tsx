import React, { useCallback } from 'react';
import { Button, View } from 'react-native';
import useLoginStore from '../../shared/stores/useLoginStore';
import { EColors } from '../../shared/ENUMS/colors';
import useUserStore from '../../shared/stores/useUserStore';
import { Text } from '@ui-kitten/components';

export function ProfileScreen() {
    const { setIsSignedIn } = useLoginStore();
    const { id, email, username, role, firstname, lastname, phoneNumber, photoUrl, deliveryAddress } = useUserStore();

    const handleSignOut = () => {
        setIsSignedIn(false);
    };

    return (
        <View>
            <Text category={'h1'}>{username}</Text>
            <Button color={EColors.red} title="Sign out" onPress={handleSignOut} />
        </View>

    );
}