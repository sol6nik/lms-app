import React, { useCallback, useEffect } from 'react';
import ScreensStacks from './src/interactive/screensStack';
import { NavigationContainer } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const App = () => {
  useEffect(() => {
    registerForPushNotification().then(token => console.log(token));
  }, [])
  async function registerForPushNotification() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status != 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }
    if (status !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token
  }

  const [fontsLoaded] = useFonts({
    'gilroy-medium': require('./assets/fonts/Gilroy-Medium.ttf'),
    'gilroy-regular': require('./assets/fonts/Gilroy-Regular.ttf'),
    'gilroy-semibold': require('./assets/fonts/Gilroy-Semibold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (

    <NavigationContainer onLayout={onLayoutRootView}>
      <ScreensStacks />
    </NavigationContainer>
  );
}

export default App