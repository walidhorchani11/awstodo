import React from 'react';
// NavigationCOntainer is a component which manages our navigation and contains the navigation state, must wrap all navigators structure
import {NavigationContainer} from '@react-navigation/native';

// fct return an object contains 2 properties Navigator, Screen, both of them are component used for configuring the navigator, the Navigator should contain Screens elements as its children to define the configuration for routes
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './screens/SplashScreen';
import App from '../App';
import {Text, View} from 'react-native';

const Todo = () => {
  return (
    <View>
      <Text>hello from Todo list component</Text>
    </View>
  );
};

const Main = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{title: 'walidos'}}>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Home" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
