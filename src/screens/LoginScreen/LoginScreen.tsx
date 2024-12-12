import React from 'react';
import validator from 'validator';
import { Icon, Input, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback, Button } from 'react-native';
import { StyledContainer, StyledRowContainer } from './loginScreen.styles';
import { EColors } from '../../shared/ENUMS/colors';
import { EScreens } from '../../shared/ENUMS/screens';
import useLoginStore from '../../app/stores/useLoginStore';
import { AppIcon } from '../../shared/ui/AppIcon';
import { useRootNavigation } from '../../shared/hooks/useTypedNavigation';

export function LoginScreen() {
    const navigation = useRootNavigation();

    const login = useLoginStore((state) => state.login);
    const pass = useLoginStore((state) => state.pass);
    const secureTextEntry = useLoginStore((state) => state.secureTextEntry);
    const setLogin = useLoginStore((state) => state.setLogin);
    const setPass = useLoginStore((state) => state.setPass);
    const setSecureTextEntry = useLoginStore((state) => state.setSecureTextEntry);

    function handleSignUp() {
        navigation.navigate(EScreens.register);
    }

    function handleLogin() {
        if (validator.isEmail(login)) {
            console.log({ email: login, pass });
        } else {
            console.log({ login, pass });
        }
    }

    const renderIcon = (props): React.ReactElement => (
        <TouchableWithoutFeedback onPress={setSecureTextEntry}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    );

    return (
        <StyledContainer>
            <AppIcon />
            <Text category="h3">Sign in</Text>
            <Input
                placeholder="Put your login or E-Mail"
                value={login}
                onChangeText={setLogin}
                label="Login or E-Mail"
            />
            <Input
                placeholder="Put your password"
                value={pass}
                label="Password"
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={setPass}
            />
            <Button color={EColors.red} title="Sign in" onPress={handleLogin} />
            <StyledRowContainer>
                <Text>Don’t have an account?  </Text>
                <Button color={EColors.red} title="Sign up" onPress={handleSignUp} />
            </StyledRowContainer>
        </StyledContainer>

    );
}
