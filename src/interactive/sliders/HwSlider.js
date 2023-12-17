import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useTheme } from '../../hooks/use-theme';

/*
    homework_id: number;
    homework_subject: string,
    homework_deadline: string,
    homework_title: string,
    homework_text: string,
    homework_attachemnets: string,
*/

export default function HomeworkSl() {
    const navigation = useNavigation();

    const HOMEWORK = [
        {
            id: '1',
            date_to: 'До 12.05.2021',
            title_hw: 'Лабораторная работа №1',
            description_hw: 'В самостоятельной работе необходимо решить задачи по теме "Матрицы"',
        },
        {
            id: '2',
            date_to: 'До 12.05.2021',
            title_hw: 'Лабораторная работа №2',
            description_hw: 'В самостоятельной работе необходимо решить задачи по теме "Матрицы"',
        },
        {
            id: '3',
            date_to: 'До 12.05.2021',
            title_hw: 'Лабораторная работа №3',
            description_hw: 'В самостоятельной работе необходимо решить задачи по теме "Матрицы"',
        },
        {
            id: '4',
            date_to: 'До 12.05.2021',
            title_hw: 'Лабораторная работа №4',
            description_hw: 'В самостоятельной работе необходимо решить задачи по теме "Матрицы"',
        }
    ]

    const isFocused = useIsFocused()
    const [theme, setTheme] = useTheme(isFocused)

    const renderHomeWork = ({ item }) => (
        <HomeworkSlideComponent item={item} />
    );

    const HomeworkSlideComponent = ({ item }) => (
        <View style={theme === 'dark' ? styles.itemDark : styles.item}>
            <View>
                <View style={theme === 'dark' ? styles.timeBgDark : styles.timeBg}>
                    <Text style={[theme === 'dark' ? styles.titleTimeDark : styles.titleTime, { fontFamily: 'gilroy-regular' }]}>{item.date_to}</Text>
                </View>

                <Text style={[theme === 'dark' ? styles.titleDark : styles.title, { fontFamily: 'gilroy-semibold' }]}> {item.title_hw}</Text>
                <Text style={{
                    fontSize: 13,
                    color: '#999999',
                    marginBottom: 10,
                    fontFamily: 'gilroy-regular'
                }}>{item.description_hw}</Text>

                <TouchableOpacity style={styles.buttonComplete} onPress={() => navigation.navigate('AddHomework')}>
                    <Text style={{ fontFamily: 'gilroy-semibold' }}>Добавть задачу</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
    return (
        <FlatList
            data={HOMEWORK}
            renderItem={renderHomeWork}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1000,
    },
    item: {
        width: vw(95),
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 20
    },
    itemDark: {
        width: vw(95),
        padding: 20,
        backgroundColor: '#393A39',
        borderRadius: 10,
        paddingVertical: 20
    },
    title: {
        fontSize: 17,
        marginTop: 10,
        marginBottom: 10,
        color: '#000'
    },
    titleDark: {
        fontSize: 17,
        marginTop: 10,
        marginBottom: 10,
        color: '#fff'
    },
    buttonComplete: {
        backgroundColor: '#99A9FD',
        width: 319,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    timeBg: {
        width: 110,
        height: 34,
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    timeBgDark: {
        width: 110,
        height: 34,
        backgroundColor: '#292929',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    titleTime: {
        color: '#000',
    },
    titleTimeDark: {
        color: '#fff',
    }
});