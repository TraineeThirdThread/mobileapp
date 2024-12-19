import React from 'react';
import { Button, ScrollView } from 'react-native';
import { Input } from '@ui-kitten/components';
import { useMainTabsNavigation } from '../../../shared/hooks/useTypedNavigation';
import useUserStore from '../../../shared/providers/StoreProviders/useUserStore';
import useAvailibleAddressesStore from '../../../shared/providers/StoreProviders/useAvailibleAddressesStore';
import { updateUserData } from '../../../shared/utils/updateUserData';
import { EScreens } from '../../../shared/ENUMS/screens';
import { EPlaceholders } from '../../../shared/ENUMS/placeholders';
import { CustomInput } from '../../../shared/components/CustomInput/CustomInput';
import { AutocompleteInput } from '../../../shared/components/AutocompleteInput/AutocompleteInput';
import { EColors } from '../../../shared/ENUMS/colors';

export function EditProfileScreen() {
    const navigation = useMainTabsNavigation();
    const { id, role, firstname, lastname, phoneNumber, photoUrl, deliveryAddress, setFirstname, setLastname, setPhoneNumber, setPhotoUrl } = useUserStore();
    const { availibleAddresses } = useAvailibleAddressesStore();

    const handleSaveChanges = () => {
        updateUserData({ id, firstname, lastname, phoneNumber, photoUrl, deliveryAddress: (Array.isArray(deliveryAddress)) ? deliveryAddress.join(';') : deliveryAddress });
        navigation.popTo(EScreens.hometabs, {screen: EScreens.profile});
    };
    return (
        <ScrollView>
            <Input
                placeholder={EPlaceholders.firstname}
                value={firstname}
                onChangeText={setFirstname}
                label="Firstname"
            />
            <Input
                placeholder={EPlaceholders.lastname}
                value={lastname}
                onChangeText={setLastname}
                label="Lastname"
            />
            <Input
                placeholder={EPlaceholders.phonenumber}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                label="Phone number"
            />
            <Input
                placeholder={EPlaceholders.photoUrl}
                value={photoUrl}
                onChangeText={setPhotoUrl}
                label="Photo url"
            />
            {(role === 'seller') ? <CustomInput isDeliveryAdresses={true} />
                : <AutocompleteInput
                    inputData={availibleAddresses}
                />}

            <Button color={EColors.red} title="Save changes" onPress={handleSaveChanges} />
        </ScrollView>

    );
}
