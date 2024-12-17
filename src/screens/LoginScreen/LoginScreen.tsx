import React from 'react';
import { Input, Text } from '@ui-kitten/components';
import { Button } from 'react-native';
import { StyledContainer, StyledRowContainer } from './loginScreen.styles';
import { EColors } from '../../shared/ENUMS/colors';
import { EScreens } from '../../shared/ENUMS/screens';
import { AppIcon } from '../../shared/ui/icons';
import { useRootNavigation } from '../../shared/hooks/useTypedNavigation';
import { CustomInput } from '../../shared/components/CustomInput/CustomInput';
import { loginHandler } from '../../shared/utils/loginHandler';
import useUserStore from '../../shared/stores/useUserStore';
import useLoginStore from '../../app/stores/useLoginStore';

export function LoginScreen() {
    const navigation = useRootNavigation();

    const { login, pass, setLogin, setPass, setIsSignedIn } = useLoginStore();
    const { setId } = useUserStore();

    const handleSignUp = () => {
        navigation.navigate(EScreens.register);
    };

    const handleLogin = async () => {
        const data = await loginHandler(login, pass);
        setId(data.id);
        data.id ? setIsSignedIn(true) : null;
    };


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
            <CustomInput
                placeholder="Put your password"
                value={pass}
                label="Password"
                onChangeText={setPass}
                isPassword={true}
            />
            <Button color={EColors.red} title="Sign in" onPress={handleLogin} />
            <StyledRowContainer>
                <Text>Don’t have an account?  </Text>
                <Button color={EColors.red} title="Sign up" onPress={handleSignUp} />
            </StyledRowContainer>
        </StyledContainer>

    );
}
