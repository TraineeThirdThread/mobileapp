/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { RootStack } from './navigation';
import { NavigationContainer } from '@react-navigation/native';


function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <RootStack />
      </ApplicationProvider>
    </NavigationContainer>
  );
}

export default App;
