import React from 'react';
import { Provider } from 'react-redux';
import {
   SafeAreaView,
   StatusBar,
   StyleSheet,
   useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

// @ts-ignore
import StorybookUIRoot from '../storybook';
import store from './redux/app/store';

interface Props {
   children: any;
   title: string;
}

const load_storybook = true;

const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
      <Provider store={store}>
         <SafeAreaView style={backgroundStyle}>
            <StatusBar
               barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
         </SafeAreaView>
      </Provider>
   );
};

const styles = StyleSheet.create({
   container: {
      // marginTop: 32,
      // paddingHorizontal: 24,
      height: '100%',
   },
});

export default load_storybook ? StorybookUIRoot : App;
