import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import { useNavigation } from '@react-navigation/native';


import { useIsFocused } from '@react-navigation/native';
import { useTheme } from '../../hooks/use-theme';
import { set } from 'date-fns';

export default function PairsSl() {
    const navigation = useNavigation();

    const DATA_PAIRS = [
        {
            id: '1',
            title: 'Введение в проектную деятельность (Практика)',
            time: '9:00 - 10:30',
        },
        {
            id: '2',
            title: 'Теория вероятностей (Практика)',
            time: '10:40 - 12:10',
        },
        {
            id: '3',
            title: 'Дифференциальные уравнения (Практика)',
            time: '12:20 - 13:50',
        },
        {
            id: '4',
            title: 'Анализ данных (Практика)',
            time: '14:00 - 15:30',
        },

    ];

    const isFocused = useIsFocused();
    const [theme, setTheme] = useTheme(isFocused);


    const renderPairs = ({ item }) => (
        <PairSlideComponent item={item} />
    );

    const PairSlideComponent = ({ item }) => (
        <View style={theme === 'dark' ? styles.itemDark : styles.item}>
            <View>

                <View style={styles.timeBg}>
                    <Text style={{ fontFamily: 'gilroy-medium', color: '#fff', fontSize: 15 }}>{item.time}</Text>
                </View>
                <Text style={[theme === 'dark' ? styles.titleDark : styles.title, { fontFamily: 'gilroy-semibold', fontSize: 22 }]}>{item.title}</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.btnHw}>
                        <Text style={{ fontFamily: 'gilroy-semibold' }} onPress={() => Alert.alert('Home work')}>Домашняя работа</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={theme === 'dark' ? styles.btnAddDark : styles.btnAdd} onPress={() => Alert.alert('Add Task')
                    }>
                        <Text style={[theme === 'dark' ? styles.btnTitleDark : styles.btnTitle, { fontFamily: 'gilroy-semibold' }]}>Добавть задачу</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );

    return (
        <FlatList
            data={DATA_PAIRS}
            renderItem={renderPairs}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
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
        marginTop: 16,
        marginBottom: 27,
        color: '#000'
    },
    titleDark: {
        fontSize: 17,
        marginTop: 16,
        marginBottom: 27,
        color: '#fff'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    timeBg: {
        backgroundColor: '#3270B3',
        borderRadius: 100,
        width: 99,
        height: 27,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnHw: {
        backgroundColor: '#90B3E7',
        width: 162,
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    btnAdd: {
        backgroundColor: '#f0f0f0',
        width: 162,
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    btnAddDark: {
        backgroundColor: '#292929',
        width: 162,
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    btnTitle: {
        color: '#000'
    },
    btnTitleDark: {
        color: '#fff'
    }
});