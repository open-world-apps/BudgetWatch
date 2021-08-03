/**
 * @format
 */
import { AppRegistry } from 'react-native';

import App from './src/App';
import { name as appName } from './app.json';

export { default } from './src/storybook';

AppRegistry.registerComponent(appName, () => App);
