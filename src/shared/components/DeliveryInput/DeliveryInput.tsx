import React from 'react';
import { Input } from '@ui-kitten/components';
import { Button, FlatList } from 'react-native';
import useUserStore from '../../providers/StoreProviders/useUserStore';
import { EPlaceholders } from '../../ENUMS/placeholders';


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

    return (<>
        <FlatList
            data={deliveryAddress}
            extraData={adr}
            scrollEnabled={false}
            renderItem={({ item, index }) => <Input
                label={'Delivery address'}
                placeholder={EPlaceholders.deliveryaddress}
                value={item}
                onChangeText={(nextitem) => handleChangeText(nextitem, index)}
            />}
        />
        <Button title="Add address" onPress={handleAddInput} />
    </>

    );
}
