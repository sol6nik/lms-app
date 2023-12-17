import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '../../hooks/use-theme';
import Chevron_SVG from '../../icons/personal-icons/chevron_icon.svg'


export default function Notifications() {
    const isFocused = useIsFocused()
    const [theme, setTheme] = useTheme(isFocused)
    const navigation = useNavigation();

    const Notifications = [
        {
            id: 1,
            image: require('../../images/AvatarPerson.png'),
            title: 'Новый заказ',
            text: 'Ваш заказ № 1234567890 принят в обработку',
        },
        {
            id: 2,
            image: require('../../images/AvatarPerson.png'),
            title: 'Новый заказ',
            text: 'Ваш заказ № 1234567890 принят в обработку',
        },
        {
            id: 3,
            image: require('../../images/AvatarPerson.png'),
            title: 'Новый заказ',
            text: 'Ваш заказ № 1234567890 принят в обработку',
        },
        {
            id: 4,
            image: require('../../images/AvatarPerson.png'),
            title: 'Новый заказ',
            text: 'Ваш заказ № 1234567890 принят в обработку',
        },
    ]

    return (
        <View style={styles.container}>
            <TouchableOpacity style={theme == 'dark' ? styles.btnDackDark : styles.btnBack}
                onPress={() => navigation.navigate('MainScreen')}>
                <Chevron_SVG style={theme == 'dark' ? styles.chevronDark : {}} />
            </TouchableOpacity>

            <Text>adawd</Text>

            {/* <View>
                {Notifications.map((item) => {
                    <View key={item.id} style={{ backgroundColor: '#fff', margin: 10, borderRadius: 10, padding: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={item.image} style={{ width: 30, height: 30, borderRadius: 50 }} />
                            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 14 }}>{item.text}</Text>
                    </View>
                })}
            </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        margin: 10,
    },
    btnBack: {
        width: 30,
        height: 30,
        marginTop: vh(7.31),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        transform: [{ rotateY: '180deg' }]
    },
    btnDackDark: {
        flex: 1,
        backgroundColor: '#393A39',
        width: vh(4.58),
        height: vh(4.58),
        marginLeft: vw(5.12),
        marginTop: vh(7.31),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        transform: [{ rotateY: '180deg' }]
    },
})