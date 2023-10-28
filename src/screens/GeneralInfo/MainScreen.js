import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { vh } from 'react-native-expo-viewport-units'
import { useIsFocused } from '@react-navigation/native';
import { useTheme } from '../../hooks/use-theme';
import React from 'react'

import HwSlider from '../../interactive/sliders/HwSlider';
import PairSlider from '../../interactive/sliders/PairSlider';
import CoursesSlider from '../../interactive/sliders/CoursesSlider';

export default function MainScreen() {

    const isFocused = useIsFocused()

    const [theme, setTheme] = useTheme(isFocused)

    return (
        <SafeAreaView backgroundColor={theme == 'dark' ? '#292929' : '#F0F0F0'}>
            <ScrollView>
                <View style={[styles.container, theme == 'dark' ? stylesDark.container : {}]}>

                    <View>
                        <Text style={{
                            marginBottom: 15,
                            fontSize: 25,
                            fontFamily: 'gilroy-semibold',
                            color: theme == 'dark' ? '#FFF' : '#000'
                        }}>
                            Следующая пара
                        </Text>
                        <PairSlider />
                    </View>

                    <View>
                        <Text style={{
                            marginTop: 20,
                            marginBottom: 15,
                            fontSize: 25,
                            fontFamily: 'gilroy-semibold',
                            color: theme == 'dark' ? '#FFF' : '#000'
                        }}>
                            Домашняя работа
                        </Text>
                        <HwSlider />
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={{
                            marginTop: 20,
                            marginBottom: 15,
                            fontSize: 25,
                            fontFamily: 'gilroy-semibold',
                            color: theme == 'dark' ? '#FFF' : '#000'
                        }}>
                            Курсы
                        </Text>
                        <CoursesSlider />
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginBottom: 80,
        minHeight: vh(100)
    },
    header: {
        padding: 20,
        paddingVertical: 0,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        height: 35,
        padding: 15,
        paddingVertical: 0,
        backgroundColor: '#B0B7BD',
        borderRadius: 10
    },
})

const stylesDark = StyleSheet.create({
    container: {
        backgroundColor: '#292929'
    },
    header: {
        padding: 20,
        paddingVertical: 0,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        height: 35,
        padding: 15,
        paddingVertical: 0,
        backgroundColor: '#B0B7BD',
        borderRadius: 10
    },
})