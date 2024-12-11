/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BootSplash from 'react-native-bootsplash';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { RegisterScreen } from '../screens/RegisterScreen/RegisterScreen';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screens: {
    Login: {
      screen: LoginScreen,
      options: {
        headerShown: false,
      },
    },
    Register: {
      screen: RegisterScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {


  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigation
          onReady={() => {
            BootSplash.hide();
          }} />
      </ApplicationProvider>
    </>
  );
}

export default App;
