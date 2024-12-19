import React, { useEffect } from 'react';
import { Button, FlatList, ScrollView, View } from 'react-native';
import { EColors } from '../../shared/ENUMS/colors';
import useUserStore from '../../shared/stores/useUserStore';
import { StyledProfileImage, StyledProfileText, StyledProfileView } from './profileScreen.styles';
import { Text } from '@ui-kitten/components/ui';
import { getUserData } from '../../shared/utils/getUserData';
import { useRootNavigation } from '../../shared/hooks/useTypedNavigation';
import { EScreens } from '../../shared/ENUMS/screens';
import { getAddresses } from '../../shared/utils/getAddresses';
import useAvailibleAddressesStore from '../../shared/stores/useAvailibleAddressesStore';

export function ProfileScreen() {
    const navigation = useRootNavigation();
    const { id, email, username, firstname, lastname, phoneNumber, photoUrl, deliveryAddress, setEmail, setUsername, setRole, setFirstname, setLastname, setPhoneNumber, setPhotoUrl, setDeliveryAddress } = useUserStore();
    const { setAvailibleAddresses } = useAvailibleAddressesStore();
    const { } = useUserStore();
    const deliveryAdresses = getAddresses();
    useEffect(() => {
        async function fetchData() {
            setAvailibleAddresses(await deliveryAdresses);
            const userData = await getUserData(id);
            setEmail(userData.email);
            setUsername(userData.username);
            setRole(userData.role);
            setFirstname(userData.firstname);
            setLastname(userData.lastname);
            setPhoneNumber(userData.phoneNumber);
            setPhotoUrl(userData.photoUrl);
            setDeliveryAddress(userData.deliveryAddress.split(';'));
        }
        fetchData();
    }, [id, firstname, lastname, phoneNumber, photoUrl, deliveryAddress]);

    const handleSignOut = () => {
        navigation.popTo(EScreens.login);
    };

    return (
        <ScrollView>
            <StyledProfileView>
                <StyledProfileImage src={photoUrl} source={require('../../shared/assets/user.png')} />
                <Text category={'h3'}>{username}</Text>
            </StyledProfileView>
            <StyledProfileText>Email: {email}</StyledProfileText>
            <StyledProfileText>Firstname: {firstname || 'Not specified'}</StyledProfileText>
            <StyledProfileText>Lastname: {lastname || 'Not specified'}</StyledProfileText>
            <StyledProfileText>Phone number: {phoneNumber || 'Not specified'}</StyledProfileText>
            <View style={{ flexDirection: 'row' }}><StyledProfileText>Delivery addresses: </StyledProfileText>
                <FlatList
                    scrollEnabled={false}
                    data={deliveryAddress}
                    renderItem={({ item }) => <StyledProfileText>{item}</StyledProfileText>} />
            </View>
            <Button color={EColors.black} title="Sign out" onPress={handleSignOut} />
        </ScrollView>

    );
}
