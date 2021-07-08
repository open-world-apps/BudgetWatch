import React from 'react';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import RemainingAmount from './components/molecules/RemainingAmount';
import store from './redux/app/store';

interface Props {
  children: any;
  title: string;
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      </SafeAreaView>
      <View style={styles.container}>
        <RemainingAmount cat="balance" />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
