import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Date({ date, onItemPressed, theme }) {

    const styleForNotSelDate = theme == 'dark' ? styles.cardGrayDarkTheme : styles.cardGray

    if (!date.isSelectedMonth) {
        onItemPressed = () => { }
    }

    return (
        <TouchableOpacity onPress={() => onItemPressed(date.number)}>
            <View style={[styles.card, !date.isSelectedMonth ? styleForNotSelDate : {}, date.isToday ? styles.cardBlue : {}]}>
                <Text style={theme === 'dark' ? styles.numberDark : styles.number}>{date.number}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 40,
        height: 40,
        borderRadius: 10,
        // backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardBlue: {
        backgroundColor: '#90B3E7'
    },

    number: {
        fontFamily: 'gilroy-regular',
        fontSize: 15,
        color: '#000'
    },
    numberDark: {
        fontFamily: 'gilroy-regular',
        fontSize: 15,
        color: '#fff'
    }
})