/**
 * @format
 */
import Config from 'react-native-config';
import App from './src/App';
import StorybookUIRoot from './storybook';

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
export { default } from './storybook';

module.exports = Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;

AppRegistry.registerComponent(appName, () => App);
