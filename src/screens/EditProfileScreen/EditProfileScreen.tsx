import React from 'react';
import { Button, ScrollView } from 'react-native';
import { EColors } from '../../shared/ENUMS/colors';
import useUserStore from '../../shared/stores/useUserStore';
import { useMainTabsNavigation} from '../../shared/hooks/useTypedNavigation';
import { Input } from '@ui-kitten/components';
import { updateUserData } from '../../shared/utils/updateUserData';
import { CustomInput } from '../../shared/components/CustomInput/CustomInput';
import { AutocompleteInput } from '../../shared/components/AutocompleteInput/AutocompleteInput';
import useAvailibleAddressesStore from '../../shared/stores/useAvailibleAddressesStore';
import { EScreens } from '../../shared/ENUMS/screens';

export function EditProfileScreen() {
    const navigation = useMainTabsNavigation();
    const { id, role, firstname, lastname, phoneNumber, photoUrl, deliveryAddress, setFirstname, setLastname, setPhoneNumber, setPhotoUrl } = useUserStore();
    const { availibleAddresses } = useAvailibleAddressesStore();

    const handleSaveChanges = () => {
        updateUserData({ id, firstname, lastname, phoneNumber, photoUrl, deliveryAddress: deliveryAddress.join(';') });
        navigation.popTo(EScreens.hometabs, {screen: EScreens.profile});
    };
    return (
        <ScrollView>
            <Input
                placeholder="Firstname"
                value={firstname}
                onChangeText={setFirstname}
                label="Firstname"
            />
            <Input
                placeholder="Lastname"
                value={lastname}
                onChangeText={setLastname}
                label="Lastname"
            />
            <Input
                placeholder="Pnone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                label="Phone number"
            />
            <Input
                placeholder="Photo url"
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
