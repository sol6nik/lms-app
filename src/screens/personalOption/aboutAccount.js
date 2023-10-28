import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '../../hooks/use-theme';
import { vh } from 'react-native-expo-viewport-units'
import AccountItem from "../../customComponents/AccountItem";
import { getInfoObject } from '../../js/getFunctions';

export default function AboutAccount({ navigation: { goBack } }) {

    const userInfo = [
        {
            status: ['Статус', 'Учится'],
            gender: ['Пол', 'Мужской'],
            dateBrth: ['Дата рождения', '12.12.1999'],
            code: ['Код студента', '6566-5454'],
            facultet: ['Факультет', 'Информационных технологий'],
            course: ['Курс', '4'],
            group: ['Группа', 'ИТ-41'],
            speciality: ['Специальность', 'Информационные системы и технологии'],
            countYears: ['Количество лет обучения', '4'],
            formLearn: ['Форма обучения', 'Очная'],
            typeLearn: ['Тип обучения', 'Бюджет'],
            lvlLearn: ['Уровень обучения', 'Бакалавриат'],
            startYear: ['Год начала обучения', '2016'],
        },
    ]

    const [theme, setTheme] = useTheme()
    const [infoObject, setInfoObject] = useState({})

    useEffect(() => {
        getInfoObject(setInfoObject);
    }, [])


    return (

        <SafeAreaView>
            <ScrollView>
                <View style={theme == 'dark' ? styles.containerDark : styles.container}>
                    <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
                        <Ionicons name="chevron-back" size={20} color={theme == 'dark' ? "#90B3E7" : "#393A39"} />
                        <Text style={{ color: theme == 'dark' ? '#FAFAFA' : '#393A39' }}>Назад</Text>
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.imageProfile} source={require('../../images/AvatarPerson.png')} />
                        <Text style={theme === 'dark' ? styles.textNameDark : styles.textName}>Иван Иванов</Text>
                    </View>
                    <View style={theme === 'dark' ? styles.infoContainerDark : styles.infoContainer}>
                        {infoObject !== undefined ? Object.keys(infoObject).map((item, index) => (
                            <AccountItem key={index} label={item} value={infoObject[item]} />
                        )) :
                            <Text style={theme == 'dark' ? stylesDark.text : {}}>There is no messages for you now</Text>
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#F0F0F0',
        minHeight: '100%'
    },
    // containerDark: {
    //     backgroundColor: '#292929',
    //     padding: 10,
    //     height: '100%',
    // },
    btnBack: {
        marginTop: 30,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageProfile: {
        marginTop: 15,
        marginBottom: 30,
        width: 130,
        height: 130,
    },
    info: {
        marginBottom: 10,
        width: 350,
        height: 60,
        padding: 15,
        paddingVertical: 0,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 3
    }
})

const stylesDark = StyleSheet.create({

    info: {
        backgroundColor: '#393A39'
    },
    text: {
        color: '#FFF'
    }
})