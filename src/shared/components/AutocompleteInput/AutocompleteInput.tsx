import React, { useCallback } from 'react';
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import useUserStore from '../../stores/useUserStore';

const filter = (item: string, query: string): boolean => item.toLowerCase().includes(query.toLowerCase());

export function AutocompleteInput(props): React.ReactElement {
    const { inputData } = props;
    const { deliveryAddress, setDeliveryAddress } = useUserStore();
    const [data, setData] = React.useState(inputData);

    const onSelect = useCallback((index: number): void => {
        setDeliveryAddress(data[index].split(';'));
    }, [data]);

    const onChangeText = useCallback((query: string): void => {
        setDeliveryAddress(query);
        setData(inputData.filter(item => filter(item, query)));
    }, []);

    return (
        <Autocomplete
            label={'Delivery address'}
            placeholder="Place your delivery address"
            value={deliveryAddress.join(';')}
            onSelect={onSelect}
            onChangeText={onChangeText}
        >
            {inputData.map((item: string, index: number): React.ReactElement => (<AutocompleteItem
                key={index}
                title={item}
            />))}
        </Autocomplete>
    );
};