import React, { useState } from 'react';
import { Icon, Input, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback, Button, Switch } from 'react-native';
import { StyledContainer, StyledRowContainer } from './RegisterScreen.styles';
import { EColors } from '../../shared/ENUMS/colors';
import validator from 'validator';
import useRegisterStore from '../../app/stores/useRegisterStore';
import { AppIcon } from '../../shared/ui/AppIcon';
import { useRootNavigation } from '../../shared/hooks/useTypedNavigation';


export function RegisterScreen() {
    const navigation = useRootNavigation();

    const login = useRegisterStore((state) => state.login);
    const email = useRegisterStore((state) => state.email);
    const pass = useRegisterStore((state) => state.pass);
    const pass2 = useRegisterStore((state) => state.pass2);
    const secureTextEntry = useRegisterStore((state) => state.secureTextEntry);
    const setLogin = useRegisterStore((state) => state.setLogin);
    const setEmail = useRegisterStore((state) => state.setEmail);
    const setPass = useRegisterStore((state) => state.setPass);
    const setPass2 = useRegisterStore((state) => state.setPass2);
    const setSecureTextEntry = useRegisterStore((state) => state.setSecureTextEntry);

    const [loginStatus, setLoginStatus] = useState('basic');
    const [emailStatus, setEmailStatus] = useState('basic');
    const [passStatus, setPassStatus] = useState('basic');
    const [loginCaption, setLoginCaption] = useState('');
    const [emailCaption, setEmailCaption] = useState('');
    const [passCaption, setPassCaption] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const handleRegister = () => {
        //inputs validation
        if (!(validator.isEmail(email) && (pass === pass2) && (pass.length >= 6) && (login.length >= 4))) {
            if (!(login.length >= 4)) {
                setLoginStatus('warning');
                setLoginCaption('Login should contain at least 4 symbols');
            } else {
                setLoginStatus('basic');
                setLoginCaption('');
            }
            if (!validator.isEmail(email)) {
                setEmailStatus('warning');
                setEmailCaption('Email should be a valid');
            } else {
                setEmailStatus('basic');
                setEmailCaption('');
            }
            if (!(pass === pass2)) {
                setPassStatus('warning');
                setPassCaption('Passwords must match');
            } else {
                if (!(pass.length >= 6)) {
                    setPassStatus('warning');
                    setPassCaption('Password should contain at least 6 symbols');
                } else {
                    setPassStatus('basic');
                    setPassCaption('');
                }
            }
        } else {
            setLoginStatus('basic');
            setLoginCaption('');
            setEmailStatus('basic');
            setEmailCaption('');
            setPassStatus('basic');
            setPassCaption('');
            console.log({ login, email, pass, role: isEnabled ? 'seller' : 'buyer' });
        }
    };

    function handleSignIn() {
        navigation.goBack();
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
            <Text category="h3">Sign up</Text>
            <Input
                placeholder="Put your login"
                value={login}
                status={loginStatus}
                caption={loginCaption}
                onChangeText={setLogin}
                label="Login"
            />
            <Input
                placeholder="Put your E-Mail"
                value={email}
                status={emailStatus}
                caption={emailCaption}
                onChangeText={setEmail}
                label="E-Mail"
            />
            <Input
                placeholder="Put your password"
                value={pass}
                label="Password"
                caption={passCaption}
                status={passStatus}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={setPass}
            />
            <Input
                placeholder="Put your password again"
                value={pass2}
                label="Password"
                caption={passCaption}
                status={passStatus}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={setPass2}
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
