import React from 'react';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/app/store';
// @ts-ignore
import StorybookUIRoot from './storybook';

import FirstStepsModal from './components/screens/FirstStepsModal';
import Main from './components/screens/Main';

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
interface Props {
  children: any;
  title: string;
}

const LOAD_STORYBOOK = true;
const RootStack = createStackNavigator();
const fSModalStack = createStackNavigator();

const FSModalStackScreen = (): React.ReactElement => (
  <fSModalStack.Navigator>
    <fSModalStack.Screen name="secondary" component={FirstStepsModal} />
  </fSModalStack.Navigator>
);

const App = (): React.ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        </SafeAreaView>
        <RootStack.Navigator>
          <RootStack.Group>
            <RootStack.Screen name="Home" component={Main} />
          </RootStack.Group>
          <RootStack.Group>
            <RootStack.Screen
              name="FirstSteps"
              component={FSModalStackScreen}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {
    // marginTop: 32,
    // paddingHorizontal: 24,
    height: '100%',
  },
});

export default LOAD_STORYBOOK ? StorybookUIRoot : App;
