/**
 * @format
 */
import Config from 'react-native-config';
import App from './src/App';

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
export { default } from './storybook';

AppRegistry.registerComponent(appName, () => App);
