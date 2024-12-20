import React from 'react';
import { Input, Text } from '@ui-kitten/components';
import { Button } from 'react-native';
import { StyledContainer, StyledRowContainer } from './loginScreen.styles';
import { CustomInput } from 'shared/components/CustomInput/CustomInput';
import { EColors } from 'shared/ENUMS/colors';
import { EPlaceholders } from 'shared/ENUMS/placeholders';
import { EScreens } from 'shared/ENUMS/screens';
import { useRootNavigation } from 'shared/hooks/useTypedNavigation';
import useUserStore from 'shared/providers/StoreProviders/useUserStore';
import { AppIcon } from 'shared/ui/icons';
import { loginHandler } from '../api/loginHandler';
import useLoginStore from '../module/useLoginStore';

export function LoginScreen() {
    const navigation = useRootNavigation();

    const { login, pass, setLogin, setPass } = useLoginStore();
    const { setId } = useUserStore();

    const handleSignUp = () => {
        navigation.navigate(EScreens.register);
    };

    const handleLogin = async () => {
        const data = await loginHandler(login, pass);
        setId(data.id);
        if (data.id) {
            navigation.popTo(EScreens.hometabs, { screen: EScreens.homescreen });
        }
    };


    return (
        <StyledContainer>
            <AppIcon />
            <Text category="h3">Sign in</Text>
            <Input
                placeholder={EPlaceholders.loginoremail}
                value={login}
                onChangeText={setLogin}
                label="Login or E-Mail"
            />
            <CustomInput
                placeholder={EPlaceholders.password}
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
