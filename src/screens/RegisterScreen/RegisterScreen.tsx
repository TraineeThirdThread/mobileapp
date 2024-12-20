import React, { useState } from 'react';
import { Input, Text } from '@ui-kitten/components';
import { Button, Switch } from 'react-native';
import { StyledContainer, StyledRowContainer } from './RegisterScreen.styles';
import { EColors } from '../../shared/ENUMS/colors';
import { AppIcon } from '../../shared/ui/icons';
import { useRootNavigation } from '../../shared/hooks/useTypedNavigation';
import { CustomInput } from '../../shared/components/CustomInput/CustomInput';
import { registerFormValidation } from '../../shared/utils/registerFormValidation';
import { EScreens } from '../../shared/ENUMS/screens';
import { registerHandler } from './api/registerHandler';
import useRegisterStore from '../../app/stores/useRegisterStore';

export function RegisterScreen() {
    const navigation = useRootNavigation();

    const { login, email, pass, pass2, setLogin, setEmail, setPass, setPass2, status, setStatus } = useRegisterStore();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleRegister = async () => {
        //inputs validation
        setStatus(registerFormValidation(login, email, pass, pass2));
        if (status.formIsValid) {
            const data = await registerHandler({ email, username: login, password: pass, role: isEnabled ? 'seller' : 'buyer' });
            await data.id ? handleSignIn() : null;
        }

    };

    const handleSignIn = () => {
        navigation.popTo(EScreens.login);
    };

    return (
        <StyledContainer>
            <AppIcon />
            <Text category="h3">Sign up</Text>
            <Input
                placeholder="Put your login"
                value={login}
                status={status.loginStatus}
                caption={status.loginCaption}
                onChangeText={setLogin}
                label="Login"
            />
            <Input
                placeholder="Put your E-Mail"
                value={email}
                status={status.emailStatus}
                caption={status.emailCaption}
                onChangeText={setEmail}
                label="E-Mail"
            />
            <CustomInput
                placeholder="Put your password"
                value={pass}
                label="Password"
                caption={status.passCaption}
                status={status.passStatus}
                onChangeText={setPass}
                isPassword={true}
            />
            <CustomInput
                placeholder="Put your password again"
                value={pass2}
                label="Password"
                caption={status.passCaption}
                status={status.passStatus}
                onChangeText={setPass2}
                isPassword={true}
            />
            <StyledRowContainer>
                <Text>Register as seller?  </Text>
                <Switch
                    trackColor={{ false: EColors.greyCA, true: EColors.lightred }}
                    thumbColor={isEnabled ? EColors.red : EColors.greyAA}
                    ios_backgroundColor={EColors.grey3e}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                /></StyledRowContainer>

            <Button color={EColors.red} title="Sign up" onPress={handleRegister} />
            <StyledRowContainer>
                <Text>Do you have an account?  </Text>
                <Button color={EColors.red} title="Sign in" onPress={handleSignIn} />
            </StyledRowContainer>
        </StyledContainer>

    );
}
