import React from 'react';
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
  return (
    <LottieView
      source={require('../assets/splash.json')}
      autoPlay
      loop={false}
      onAnimationFinish={() => {
        navigation.navigate('Home');
      }}
    />
  );
};

export default Splash;
