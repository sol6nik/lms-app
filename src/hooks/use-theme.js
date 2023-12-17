import { useLayoutEffect, useState, useEffect } from "react";
import { Appearance } from "react-native";
import 'localstorage-polyfill';

export const useTheme = (isFocused) => {

    const getLocalStorageUseDefault = () => {
        return localStorage.getItem('use-default') === 'true'
    }

    const [isEnabled, setIsEnabled] = useState(
        getLocalStorageUseDefault() || false
    );

    const themeUseStateGetter = () => {
        return (getLocalStorageUseDefault() == true ? Appearance.getColorScheme() : null) || localStorage.getItem('app-theme') || 'light'
    }

    const [theme, setTheme] = useState(
        /*localStorage.getItem('app-theme') || Appearance.getColorScheme()*/
        themeUseStateGetter()
    )

    useLayoutEffect(() => {
        localStorage.setItem('app-theme', theme)
    }, [theme, isEnabled])

    useLayoutEffect(() => {
        localStorage.setItem('use-default', isEnabled)
        setTheme(themeUseStateGetter())
    }, [isEnabled])

    useEffect(() => {
        setTheme(themeUseStateGetter())
    }, [isFocused])

    return [theme, setTheme, isEnabled, setIsEnabled]
}