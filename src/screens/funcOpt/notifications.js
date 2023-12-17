import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
        <View style={theme === 'dark' ? styles.containerDark : styles.container}>

            <TouchableOpacity style={theme == 'dark' ? styles.btnDackDark : styles.btnBack}
                onPress={() => navigation.navigate('MainScreen')}>
                <Chevron_SVG style={theme == 'dark' ? styles.chevronDark : {}} />
            </TouchableOpacity>

            <View style={theme === 'dark' ? styles.containerNotifyDark : styles.containerNotify}>
                <View>
                    <View style={[styles.notifycationAvatar]}>
                        <Image source={require('../../images/AvatarPerson.png')} style={styles.notifycationAvatarImage} />
                    </View>
                </View>


                <View>
                    <Text style={{
                        fontSize: 17,
                        marginBottom: 10,
                        color: theme == 'dark' ? '#FFF' : '#000',
                        fontFamily: 'gilroy-semibold'
                    }}>
                        Уведомление 1
                    </Text>

                    <Text style={{ color: theme == 'dark' ? '#FFF' : '#838383', fontFamily: 'gilroy-regular', maxWidth: 230, fontSize: 12 }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsa soluta commodi eligendi odio id ullam,
                        aut doloribus incidunt vitae facilis dolores eum distinctio neque. Aperiam libero voluptatibus assumenda facere
                        consequuntur voluptates voluptatum commodi sint dolor quisquam id rem laborum inventore, voluptas ducimus explicabo
                        quaerat vitae mollitia excepturi vel magnam quia, adipisci facilis numquam! Autem, obcaecati dolore? Exercitationem
                        itaque quaerat, magnam deserunt accusamus ratione corporis facere aperiam delectus fuga minima iste labore? Quasi
                        similique excepturi velit magni perspiciatis distinctio, optio sint ad expedita soluta dignissimos iure quae placeat
                        molestias atque ratione, corporis in maxime? Ratione modi aut minima est maxime.
                    </Text>
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        height: '100%',
        width: '100%',
        padding: 10,
    },
    containerDark: {
        height: '100%',
        width: '100%',
        backgroundColor: '#292929',
        padding: 10,
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
    containerNotify: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    containerNotifyDark: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        backgroundColor: '#838383',
        padding: 20,
        borderRadius: 10,
    },
    notifycationAvatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#c2c2c2',
        marginRight: 20
    },
    notifycationAvatarImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
})