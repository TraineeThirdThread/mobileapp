import React from 'react';
import { Button, View } from 'react-native';
import { EColors } from '../../shared/ENUMS/colors';
import useUserStore from '../../shared/stores/useUserStore';
import { Text } from '@ui-kitten/components';
import useLoginStore from '../../app/stores/useLoginStore';

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
