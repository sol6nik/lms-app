import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';
import { useIsFocused } from '@react-navigation/native';

import { useTheme } from '../../hooks/use-theme';
import Chevron_SVG from '../../icons/personal-icons/chevron_icon.svg'


export default function ReadyHW({ navigation: { goBack } }) {
    const isFocused = useIsFocused()
    const [theme, setTheme] = useTheme(isFocused)

    return (
        <View>

            <TouchableOpacity style={theme == 'dark' ? styles.btnDackDark : styles.btnBack}
                onPress={() => goBack()}>
                <Chevron_SVG style={theme == 'dark' ? styles.chevronDark : {}} />
            </TouchableOpacity>

            <View style={{
                margin: 20,
            }}>
                <Text style={{
                    fontSize: 26,
                    fontFamily: 'gilroy-medium',
                    marginTop: 20,
                }}>Лабараторная работа №1</Text>
                <Text style={{
                    fontSize: 14,
                    marginTop: 20,
                }}>В этот элемент LMS необходимо загрузить отчеты по ЛР в формате pdf или word до 12.03.22 включительно.</Text>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 350,
                    height: 267,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                }}>
                    <Image source={require('../../images/uploadFile.png')} />
                    <Text style={{
                        marginTop: 20,
                    }}>Прикрепить файл</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 350,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: '#90B3E7',
                    marginTop: 30,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                    }}>Отправить</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        margin: 5,
        alignItems: 'center',
    },
    btnBack: {
        width: 30,
        height: 30,
        marginLeft: vw(5.12),
        marginTop: vh(7.31),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        transform: [{ rotateY: '180deg' }]
    },
    btnDackDark: {
        flex: 1,
        backgroundColor: '#393A39',
        width: vh(4.58),
        height: vh(4.58),
        marginLeft: vw(5.12),
        marginTop: vh(7.31),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        transform: [{ rotateY: '180deg' }]
    },
    chevronDark: {
        fill: '#90B3E7'
    }
});