import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native';
import MessagesItem from '../../customComponents/MessageItem';
import { getMessagesArray } from '../../js/getFunctions'
import { useTheme } from '../../hooks/use-theme';
import { vh } from 'react-native-expo-viewport-units'

export default function MessagesScreen() {
    const [messagesArray, setMessagesArray] = useState([])

    useEffect(() => {
        getMessagesArray(setMessagesArray);
    }, [])

    const isFocused = useIsFocused()

    const [theme, setTheme] = useTheme(isFocused)

    return (
        <View style={[styles.container, theme == 'dark' ? stylesDark.container : {}]}>
            <ScrollView style={[theme == 'dark' ? stylesDark.container : {}]}>
                {messagesArray !== undefined ?
                    messagesArray.map((item => (
                        <MessagesItem key={"key" + Math.random()} from={item.from} text={item.text} time={item.time} />)
                    ))
                    :
                    <Text style={theme == 'dark' ? stylesDark.text : {}}>There is no messages for you now</Text>
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginBottom: 80,
        minHeight: vh(100)
    },
    message: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    messageInfo: {
        flex: 1
    },
    name: {
        fontSize: 16,
        fontFamily: 'gilroy-semibold'
    },
    messageText: {
        fontSize: 14,
        color: '#666',
        fontFamily: 'gilroy-regular'
    },
    time: {
        fontSize: 12,
        color: '#999',
        fontFamily: 'gilroy-regular'
    }
})

const stylesDark = StyleSheet.create({
    container: {
        backgroundColor: '#292929'
    },
    info: {
        backgroundColor: '#393A39'
    },
    text: {
        color: '#FFF'
    }
})