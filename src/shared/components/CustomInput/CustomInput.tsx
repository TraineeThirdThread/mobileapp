import { Icon, IconProps, Input, InputProps } from '@ui-kitten/components';
import React, { useMemo, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';


interface ICustomInputProps extends InputProps {
    isPassword?:boolean
}

export function CustomInput(customProps: ICustomInputProps) {
    const { isPassword, ...restProps } = customProps;

    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const onPress = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const iconComponent = (props: IconProps): React.ReactElement => (
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
            {...restProps}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            />) :
        (<Input
            {...restProps} />)
    );
}
