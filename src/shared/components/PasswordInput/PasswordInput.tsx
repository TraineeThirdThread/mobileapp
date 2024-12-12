import { Icon, Input } from '@ui-kitten/components';
import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';


export function PasswordInput(props) {
    const { placeholder, value, label, caption, status, onChangeText} = props;

const [secureTextEntry, setSecureTextEntry] = useState(true);

const renderIcon = (props): React.ReactElement => (
    <TouchableWithoutFeedback onPress={() => setSecureTextEntry(!secureTextEntry)}>
        <Icon
            {...props}
            name={secureTextEntry ? 'eye-off' : 'eye'}
        />
    </TouchableWithoutFeedback>
);
return (<Input
    placeholder={placeholder}
    value={value}
    label={label}
    caption={caption}
    status={status}
    accessoryRight={renderIcon}
    secureTextEntry={secureTextEntry}
    onChangeText={onChangeText} />
);
}
