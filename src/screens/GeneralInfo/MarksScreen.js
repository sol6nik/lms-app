import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { useTheme } from '../../hooks/use-theme';
import { useIsFocused } from '@react-navigation/native';
import React from 'react'


export default function MarksScreen() {
    const marksState = [
        {
            id: 1,
            subject: 'Математика',
            points: '88',
        },
        {
            id: 2,
            subject: 'Русский язык',
            points: '40',
        },
        {
            id: 3,
            subject: 'Физика',
            points: '20',
        },
        {
            id: 4,
            subject: 'Информатика',
            points: '98',
        }
    ]

    var changeColor = (props) => {
        if (props.points >= 80) {
            return '#4ECB71'
        } else if (props.points >= 30) {
            return '#CB8A4E'
        } else {
            return '#CB4E4E'
        }
    }



    const isFocused = useIsFocused()

    const [theme, setTheme] = useTheme(isFocused)

    return (
        <View style={[styles.container, theme == 'dark' ? stylesDark.container : {}]}>
            <ScrollView>
                {marksState.map((item) => (
                    <View key={item.id} style={[styles.card, theme == 'dark' ? stylesDark.block : {}]}>
                        <Text style={[styles.subjectTitle, theme == 'dark' ? stylesDark.color : {}]}>{item.subject}</Text>
                        <View style={styles.markContainer}>
                            <Text style={[styles.Mark, theme == 'dark' ? stylesDark.color : {}]}>Оценка</Text>
                            <Text style={{
                                fontSize: 17,
                                fontFamily: 'gilroy-semibold',
                                color: '#fff',
                                width: 70,
                                height: 35,
                                textAlign: 'center',
                                paddingTop: 5,
                                borderRadius: 20,
                                backgroundColor: changeColor(item),

                            }}>{item.points}</Text>
                        </View>

                        <TouchableOpacity style={styles.moreInfo} onPress={() => Alert.alert('Фигня на лапах!')}>
                            <Text style={[styles.text, theme == 'dark' ? stylesDark.text : {}]}>Подробнее</Text>
                        </TouchableOpacity>
                    </View>
                ))
                }
            </ScrollView >
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 350,
        backgroundColor: '#fff',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        height: 146,
        justifyContent: 'space-between',
    },
    subjectTitle: {
        fontSize: 17,
        fontFamily: 'gilroy-semibold'
    },
    moreInfo: {
        width: 320,
        height: 35,
        backgroundColor: '#90B3E7',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Mark: {
        fontSize: 17,
        color: '#999999',
        fontFamily: 'gilroy-semibold'
    },
    markContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        width: 140,
    },
    text: {
        fontFamily: 'gilroy-semibold'
    }
})

const stylesDark = StyleSheet.create({
    container: {
        backgroundColor: '#292929'
    },
    block: {
        backgroundColor: '#393A39'
    },
    color: {
        color: '#fff'
    },
    alert: {
        backgroundColor: '#292929'
    },
    text: {
        color: '#393A39'
    }
})