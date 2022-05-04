import React from 'react';
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <LottieView
      source={require('../assets/splash.json')}
      autoPlay
      loop={false}
    />
  );
};

export default Splash;
