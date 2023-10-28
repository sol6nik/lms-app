import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { vh } from 'react-native-expo-viewport-units'
import { useTheme } from '../hooks/use-theme';

export default function MessagesItem({ from, text, time }) {
    const [theme, setTheme] = useTheme()

    return (
        <View>
            <TouchableOpacity style={styles.message}>
                <Image source={require('../images/avatar1.png')} style={styles.avatar} />
                <View style={styles.messageInfo}>
                    <Text style={[styles.name, theme == 'dark' ? stylesDark.text : {}]}>{from}</Text>
                    <Text style={[styles.messageText, theme == 'dark' ? stylesDark.text : {}]}>{text}</Text>
                </View>
                <Text style={styles.time}>{time}</Text>
            </TouchableOpacity>
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
        fontWeight: 'bold'
    },
    messageText: {
        fontSize: 14,
        color: '#666'
    },
    time: {
        fontSize: 12,
        color: '#999'
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