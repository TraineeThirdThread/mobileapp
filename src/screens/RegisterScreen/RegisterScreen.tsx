import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon, Input, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback, Button, Switch } from 'react-native';
import { StyledContainer, StyledRowContainer } from './RegisterScreen.styles';
import { EColors } from '../../shared/ENUMS/colors';
import Svg, { Path } from 'react-native-svg';
import validator from 'validator';


export function RegisterScreen() {
    const navigation = useNavigation();
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');

    const [secureTextEntry, setSecureTextEntry] = useState(true);

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
            <Text category="h3">Sign up</Text>
            <Input
                placeholder="Put your login"
                value={login}
                status={loginStatus}
                caption={loginCaption}
                onChangeText={nextValue => setLogin(nextValue)}
                label="Login"
            />
            <Input
                placeholder="Put your E-Mail"
                value={email}
                status={emailStatus}
                caption={emailCaption}
                onChangeText={nextValue => setEmail(nextValue)}
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
                onChangeText={nextValue => setPass(nextValue)}
            />
            <Input
                placeholder="Put your password again"
                value={pass2}
                label="Password"
                caption={passCaption}
                status={passStatus}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={nextValue => setPass2(nextValue)}
            />
            <StyledRowContainer>
            <Text>Register as seller?  </Text>
            <Switch
                trackColor={{ false: EColors.greyCA, true: EColors.lightred }}
                thumbColor={isEnabled ? EColors.red : EColors.greyAA}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            /></StyledRowContainer>

            <Button color={EColors.red} title="Sign up" onPress={handleRegister} />
            <StyledRowContainer>
            <Text>Do you have an account?  </Text>
            <Button color={EColors.red} title="Sign in" onPress={() => navigation.goBack()} />
            </StyledRowContainer>
        </StyledContainer>

    );
}
