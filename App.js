import React, {useCallback, useEffect} from 'react';
import ScreensStacks from './src/interactive/screensStack';
import {NavigationContainer} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';

const App = () => {

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
            <ScreensStacks/>
        </NavigationContainer>
    );
}

export default App