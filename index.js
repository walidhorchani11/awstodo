/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import Main from './src/Main';
Amplify.configure(awsconfig);

AppRegistry.registerComponent(appName, () => Main);
