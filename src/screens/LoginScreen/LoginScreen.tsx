import React from 'react';
import validator from 'validator';
import { useNavigation } from '@react-navigation/native';
import { Icon, Input, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback, Button } from 'react-native';
import { StyledContainer, StyledRowContainer } from './loginScreen.styles';
import { EColors } from '../../shared/ENUMS/colors';
import Svg, { Path } from 'react-native-svg';


export function LoginScreen() {
    const navigation = useNavigation();

    const [login, setLogin] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    function handleLogin() {
        if (validator.isEmail(login)) {
            console.log({ email: login, pass });
        } else {
            console.log({ login, pass });
        }
    }

    const renderIcon = (props): React.ReactElement => (
        <TouchableWithoutFeedback onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    );

    return (
        <StyledContainer>
            <Svg width="25%" height="20%" viewBox="0 0 24 24" fill="none" >
                <Path d="M3 6.29999V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.29999H3Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                <Path d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </Svg>
            <Text category="h3">Sign in</Text>

            <Input
                placeholder="Put your login or E-Mail"
                value={login}
                onChangeText={nextValue => setLogin(nextValue)}
                label="Login or E-Mail"
            />
            <Input
                placeholder="Put your password"
                value={pass}
                label="Password"
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={nextValue => setPass(nextValue)}
            />
            <Button color={EColors.red} title="Sign in" onPress={handleLogin} />
            <StyledRowContainer>
                <Text>Don’t have an account?  </Text>
                <Button color={EColors.red} title="Sign up" onPress={() => navigation.navigate('Register')} />
            </StyledRowContainer>
        </StyledContainer>

    );
}
