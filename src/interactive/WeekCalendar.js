import { addDays, format, getDate, startOfWeek } from 'date-fns';
import ru from 'date-fns/locale/ru';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WeekCalendar = ({ picked_day, intialDate, onChange }) => {
    const [week, setWeek] = useState([]);

    useEffect(() => {
        const weekDays = getWeekDays(intialDate);
        setWeek(weekDays);
    }, [picked_day]);

    return (
        <View style={styles.container}>
            {week.map((weekDay) => {
                const textStyles = [styles.label];
                const touchable = [styles.touchable];
                if (weekDay.date.getDay() === picked_day) {
                    textStyles.push(styles.selectedLabel);
                    touchable.push(styles.selectedTouchable);
                }

                return (
                    <View style={styles.weekDayItem} key={weekDay.formatted}>
                        <Text style={[styles.weekDayText, { fontFamily: 'gilroy-medium' }]}>{weekDay.formatted}</Text>
                        <TouchableOpacity
                            onPress={() => { onChange(weekDay.date.getDay()) }}
                            style={touchable}>
                            <Text style={[textStyles, { fontFamily: 'gilroy-medium' }]}>{weekDay.day}</Text>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    weekDayText: {
        color: 'gray',
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    selectedLabel: {
        color: 'white',
    },
    touchable: {
        borderRadius: 20,
        padding: 7.5,
        height: 35,
        width: 35,
        backgroundColor: '#FFFFFF'
    },
    selectedTouchable: {
        backgroundColor: '#90B3E7',
    },
    weekDayItem: {
        alignItems: 'center',
    },
});



// get week days
export const getWeekDays = (date) => {
    const start = startOfWeek(date, { weekStartsOn: 1 });

    const final = [];

    for (let i = 0; i < 7; i++) {
        const date = addDays(start, i);
        final.push({
            formatted: format(date, 'EEEEEE', { locale: ru }),
            date,
            day: getDate(date),
        });
    }

    return final;
};

export default WeekCalendar;