import React, { useCallback } from 'react';
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import { EPlaceholders } from 'shared/ENUMS/placeholders';
import useUserStore from 'shared/providers/StoreProviders/useUserStore';

const filter = (item: string, query: string): boolean => item.toLowerCase().includes(query.toLowerCase());

export function AutocompleteInput(props): React.ReactElement {
    const { inputData } = props;
    const { deliveryAddress, setDeliveryAddress } = useUserStore();
    const [data, setData] = React.useState(inputData);

    const onSelect = useCallback((index: number): void => {
        setDeliveryAddress(data[index]);
    }, [data]);

    const onChangeText = useCallback((query: string): void => {
        setDeliveryAddress(query);
        setData(inputData.filter(item => filter(item, query)));
    }, [inputData]);

    return (
        <Autocomplete
            label={'Delivery address'}
            placeholder={EPlaceholders.deliveryaddress}
            value={deliveryAddress}
            onSelect={onSelect}
            onChangeText={onChangeText}
        >
            {data.map((item: string, index: number): React.ReactElement => (<AutocompleteItem
                key={index}
                title={item}
            />))}
        </Autocomplete>
    );
};