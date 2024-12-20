import React from 'react';
import { Input } from '@ui-kitten/components';
import { Button, FlatList } from 'react-native';
import { EPlaceholders } from 'shared/ENUMS/placeholders';
import useUserStore from 'shared/providers/StoreProviders/useUserStore';


export function DeliveryInput() {
    const { deliveryAddress, setDeliveryAddress } = useUserStore();
    const adr: string[] = [...deliveryAddress];
    const handleAddInput = () => {
        setDeliveryAddress([...deliveryAddress, '']);
    };

    const handleChangeText = (inputItem: string, index: number) => {
        adr[index] = inputItem;
        setDeliveryAddress([...adr]);
    };

    const renderItem = ({ item, index }) => <Input
        label={'Delivery address'}
        placeholder={EPlaceholders.deliveryaddress}
        value={item}
        onChangeText={(nextitem) => handleChangeText(nextitem, index)}
    />;

    return (<>
        <FlatList
            data={deliveryAddress}
            extraData={adr}
            scrollEnabled={false}
            renderItem={renderItem}
        />
        <Button title="Add address" onPress={handleAddInput} />
    </>

    );
}
