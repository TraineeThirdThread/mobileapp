import { Icon, Input } from '@ui-kitten/components';
import React, { useMemo, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

interface ICustomInputProps {
    placeholder?: string,
    value?: string, label: string,
    caption?: string,
    status?: string,
    onChangeText?: (arg0: string) => void,
    isPassword?: boolean,
}

export function CustomInput(customProps: ICustomInputProps) {
    const { placeholder, value, label, caption, status, onChangeText, isPassword } = customProps;

    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const onPress = () => {
        setSecureTextEntry(!secureTextEntry)
    }

    const iconComponent = (props): React.ReactElement => (
        <TouchableWithoutFeedback onPress={onPress}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    );
    const renderIcon = useMemo(() => iconComponent, [secureTextEntry]);

    return (isPassword ?
        (<Input
            placeholder={placeholder}
            value={value}
            label={label}
            caption={caption}
            status={status ? status : 'basic'}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText} />) :
        (<Input
            placeholder={placeholder}
            value={value}
            label={label}
            caption={caption}
            status={status}
            onChangeText={onChangeText} />)
    );
}
