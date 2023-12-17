import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CalendarDate from '../customComponents/Date'
import { DarkTheme } from '@react-navigation/native'

export default function MonthCalendar({ daysInCalendar, onItemPressed, theme, selectedDate, onSelectMonth }) {

    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

    const unselectedMonthStyle = theme == 'dark' ? stylesDark.unselectedMonth : styles.selectedMonth

    const renderMonths = ({ item }) => (
        <TouchableOpacity onPress={() => { onSelectMonth(item.id) }}>
            <View style={[styles.monthContainer, selectedDate.getMonth() == item.id ? styles.selectedMonth : unselectedMonthStyle]}>
                <Text style={[styles.monthText, theme == 'dark' ? stylesDark.monthText : {}]}>{item.string}</Text>
            </View>
        </TouchableOpacity>
    );

    const months = [
        { id: 0, string: 'Январь' },
        { id: 1, string: 'Февраль' },
        { id: 2, string: 'Март' },
        { id: 3, string: 'Апрель' },
        { id: 4, string: 'Май' },
        { id: 5, string: 'Июнь' },
        { id: 6, string: 'Июль' },
        { id: 7, string: 'Август' },
        { id: 8, string: 'Сентябрь' },
        { id: 9, string: 'Октябрь' },
        { id: 10, string: 'Ноябрь' },
        { id: 11, string: 'Декабрь' }
    ]

    return (
        <View>
            <FlatList
                data={months}
                renderItem={renderMonths}
                horizontal
                initialScrollIndex={selectedDate.getMonth()}
                keyExtractor={(item) => item.id}
                style={{ marginTop: 15 }}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 25 }} />}
            />
            <View style={styles.daysOfWeekContainer}>
                {daysOfWeek.map((item => (
                    <View key={"key" + Math.random()} style={styles.dayOfWeekContainer}>
                        <Text style={[styles.dayOfWeekText, theme == 'dark' ? stylesDark.text : {}]}>{item}</Text>
                    </View>
                )))}
            </View>

            <View style={styles.daysContainer}>

                <View style={styles.daysRow}>
                    {
                        daysInCalendar.slice(0, 7).map((item => (

                            <CalendarDate key={"key" + Math.random()} date={item} onItemPressed={onItemPressed} theme={theme} />
                        )))
                    }
                </View>
                <View style={styles.daysRow}>
                    {
                        daysInCalendar.slice(7, 14).map((item => (
                            <CalendarDate key={"key" + Math.random()} date={item} onItemPressed={onItemPressed} theme={theme} />
                        )))
                    }
                </View>
                <View style={styles.daysRow}>
                    {
                        daysInCalendar.slice(14, 21).map((item => (
                            <CalendarDate key={"key" + Math.random()} date={item} onItemPressed={onItemPressed} theme={theme} />
                        )))
                    }
                </View>
                <View style={styles.daysRow}>
                    {
                        daysInCalendar.slice(21, 28).map((item => (
                            <CalendarDate key={"key" + Math.random()} date={item} onItemPressed={onItemPressed} theme={theme} />
                        )))
                    }
                </View>
                <View style={styles.daysRow}>
                    {
                        daysInCalendar.slice(28, 35).map((item => (
                            <CalendarDate key={"key" + Math.random()} date={item} onItemPressed={onItemPressed} theme={theme} />
                        )))
                    }
                </View>
                <View style={styles.daysRow}>
                    {
                        daysInCalendar.slice(35, 42).map((item => (
                            <CalendarDate key={"key" + Math.random()} date={item} onItemPressed={onItemPressed} theme={theme} />
                        )))
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dayOfWeekText: {
        fontFamily: 'gilroy-regular',
        fontSize: 15
    },
    dayOfWeekContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
    },
    daysOfWeekContainer: {
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 10
    },
    daysContainer: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    daysRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 18
    },
    monthContainer: {
        height: 30,
        width: 100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    selectedMonth: {
        backgroundColor: '#90B3E7'
    },
    monthText: {
        color: '#292929',
        fontFamily: 'gilroy-semibold',
        fontSize: 20
    }
})

const stylesDark = StyleSheet.create({
    text: {
        color: '#fff'
    },
    unselectedMonth: {
        backgroundColor: '#393A39'
    },
    monthText: {
        color: '#fff'
    }
})