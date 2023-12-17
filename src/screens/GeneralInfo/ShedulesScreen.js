import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import { useTheme } from '../../hooks/use-theme';
import {getTimetableArray} from '../../js/getFunctions'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import localStorage from '@react-native-async-storage/async-storage'
import WeekCalendar from '../../interactive/WeekCalendar';
import TimetableItem from '../../customComponents/TimetableItem';
import Calendar_SVG from '../../icons/tab-icons/calendar.svg'
import MonthCalendar from '../../interactive/MonthCalendar';

export default function ShedulesScreen() {
    const [date, setDate] = useState(new Date().getDay());
    const [daysInCalendar, setDaysInCalendar] = useState([{}])
    const [lessonsArray, setLessonsArray] = useState([])
    const [timetableArray, setTimetableArray] = useState([])
    const [isCalendarMode, setCalendarMode] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())

    useEffect(() => {
        setLessonsArray(timetableArray[date])
    }, [date, timetableArray])

    useEffect(() => {
        getTimetableArray(setTimetableArray);
    }, [])

    useEffect(() => {
        setDate(selectedDate.getDay())
        calculateDaysInCalendar(selectedDate.getMonth(), selectedDate.getYear())
    }, [selectedDate])

    const calculateDaysInCalendar = (month, year) => {
        const d = new Date()
        const today = new Date(d.getYear(), d.getMonth(), d.getDate())
        var date = new Date(year, month, 1);
        var days = [];
        var dayOfWeek = date.getDay();
        date.setDate(date.getDate() - dayOfWeek - 1)
        while (date.getMonth() === month || days.length < 42) {
            var tuple = { number: date.getDate(), isSelectedMonth: date.getMonth() === month, isToday: today.getTime() == date.getTime() }
            days.push(tuple);
            date.setDate(date.getDate() + 1);
        }
        setDaysInCalendar(days)
    }

    const onItemPressed = (day) => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))
        setCalendarMode(false)
    }

    const onSelectMonth = (month) => {
        setSelectedDate(new Date(selectedDate.getFullYear(), month, 1))
        console.log(selectedDate)
    }

    const isFocused = useIsFocused()

    const [theme, setTheme] = useTheme(isFocused)

    return (
        <SafeAreaView >
            <ScrollView style={{minHeight: '100%', backgroundColor: theme == 'dark' ? '#292929' : '#F0F0F0'}}>
                {!isCalendarMode &&
                    <View style={[styles.container, theme == 'dark' ? stylesDark.container : {}, { fontFamily: 'gilroy-semibold' }]}>
                        <View style={styles.headerContainer}>
                            <Text style={[styles.screenHeader, theme == 'dark' ? stylesDark.screenHeader : {}]}>Расписание</Text>
                            <TouchableOpacity onPress={() => {
                                setCalendarMode(true)
                                calculateDaysInCalendar(new Date().getMonth(), new Date().getYear())
                            }}>
                                <Calendar_SVG />
                            </TouchableOpacity>
                        </View>

                        <WeekCalendar picked_day={date} intialDate={selectedDate} onChange={newDate => setDate(newDate)} />

                        <View style={styles.cardContainer}>
                            <View style={styles.cardContainer}>
                                {lessonsArray !== undefined ?
                                    lessonsArray.map((item => (
                                        <TimetableItem key={"key" + Math.random()} lesson_count={item.lesson_count} lesson_type={item.lesson_type} schedule_time={item.schedule_time} lesson_subject={item.lesson_subject} teacher_fio={item.teacher_fio} lesson_location={item.lesson_location} />)
                                    ))
                                    :
                                    <Text style={[theme == 'dark' ? stylesDark.text : {}, { fontFamily: 'gilroy-semibold' }]}>Sorry there is no timetable for your group now</Text>
                                }
                            </View>
                        </View>
                    </View>
                }
                {isCalendarMode &&
                    <View style={[styles.container, theme == 'dark' ? stylesDark.container : {}, { fontFamily: 'gilroy-semibold' }]}>
                        <View style={styles.headerContainer}>
                            <Text style={[styles.screenHeader, theme == 'dark' ? stylesDark.screenHeader : {}]}>Календарь</Text>
                            <TouchableOpacity onPress={() => {
                                setCalendarMode(false)
                                calculateDaysInCalendar(new Date().getMonth(), new Date().getYear())
                            }}>
                                <Calendar_SVG />
                            </TouchableOpacity>
                        </View>
                        <MonthCalendar daysInCalendar={daysInCalendar} onItemPressed={onItemPressed} theme={theme} selectedDate={selectedDate} onSelectMonth={onSelectMonth}/>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: '18%',
    },
    header: {
        padding: 20,
        paddingVertical: 0,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    card: {
        marginTop: 20,
        height: 206,
        width: 320,
        elevation: 3,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    numLess: {
        width: 30,
        height: 30,
        backgroundColor: '#E0843C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    cardBtn: {
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        height: 40,
        width: 280,
        backgroundColor: '#90B3E7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10
    },
    screenHeader: {
        fontFamily: 'gilroy-semibold',
        fontSize: 26,
    },
    dayOfWeekText: {
        fontFamily: 'gilroy-regular',
        fontSize: 15
    },
    dayOfWeekContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40
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
    }
})

const stylesDark = StyleSheet.create({
    container: {
        backgroundColor: '#292929'
    },
    block: {
        backgroundColor: '#393A39'
    },
    text: {
        color: '#fff'
    },
    circle: {
        backgroundColor: '#393A39'
    },
    screenHeader: {
        color: '#fff'
    }
})

