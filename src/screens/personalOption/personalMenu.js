import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { vw, vh } from 'react-native-expo-viewport-units'
import { useTheme } from '../../hooks/use-theme';
import { useIsFocused } from '@react-navigation/native';


import Chevron_SVG from '../../icons/personal-icons/chevron_icon.svg'
import Info_SVG from '../../icons/personal-icons/info_icon.svg'
import Logout_SVG from '../../icons/personal-icons/logout_icon.svg'
import Profile_SVG from '../../icons/personal-icons/profile_icon.svg'
import Settings_SVG from '../../icons/personal-icons/settings_icon.svg'
import authFunctions from '../../js/authFunctions';


export default function PersonalMenu({ navigation: { goBack, navigate } }) {
    const [modal, setModal] = useState(false)
    const isFocused = useIsFocused()

    const [theme, setTheme] = useTheme(isFocused)

    return (
        <SafeAreaView style={modal === true ? styles.modalFade : {}}>

            <Modal
                animationType={'easy'}
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(!modal)
                }}>
                <View style={theme === 'dark' ? styles.modalExitDark : styles.modalExit}>
                    <Text style={theme === 'dark' ? styles.modalExitTextDark : styles.modalExitText}>Вы действительно хотите выйти?</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 107,
                    }}>
                        <TouchableOpacity
                            onPress={async () => { await authFunctions.eraseData(); navigate('Authorization') }}>
                            <Text style={styles.textYes}>Да</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModal(!modal)}>
                            <Text style={theme === 'dark' ? styles.textNoDark : styles.textNo}>Нет</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={[styles.container, theme == 'dark' ? stylesDark.container : {}]}>
                <TouchableOpacity style={[styles.btnBack, theme == 'dark' ? stylesDark.btnBack : {}]}
                    onPress={() => goBack()}>
                    <Chevron_SVG style={theme == 'dark' ? stylesDark.chevronDark : {}} />
                </TouchableOpacity>

                <View style={styles.image_container}>
                    <Image source={require('../../images/AvatarPerson.png')} />
                </View>

                <View style={styles.text_container}>
                    <Text
                        style={[styles.user_fio, theme == 'dark' ? stylesDark.user_fio : {}, { fontFamily: 'gilroy-semibold' }]}>
                        Иван Иванов
                    </Text>
                </View>

                <View style={[styles.profileMenu, theme == 'dark' ? stylesDark.profileMenu : {}]}>
                    <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('Account')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Info_SVG />
                            <Text style={{
                                fontSize: 17,
                                paddingLeft: vw(3.84),
                                color: theme == 'dark' ? '#FFF' : '#000',
                                fontFamily: 'gilroy-semibold'
                            }}>О пользователе</Text>
                        </View>
                        <Chevron_SVG />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('Sdo')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Profile_SVG />
                            <Text style={{
                                paddingLeft: vw(3.84),
                                color: theme == 'dark' ? '#FFF' : '#000',
                                fontFamily: 'gilroy-semibold',
                                fontSize: 17
                            }}>Учетная запись</Text>
                        </View>
                        <Chevron_SVG />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('User')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Settings_SVG />
                            <Text style={{
                                paddingLeft: vw(3.84),
                                color: theme == 'dark' ? '#FFF' : '#000',
                                fontFamily: 'gilroy-semibold',
                                fontSize: 17
                            }}>Настройки СДО</Text>
                        </View>
                        <Chevron_SVG />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.componentsMenu, {
                    marginLeft: vw(5.12),
                    marginTop: 20,
                    width: vw(100 - 10.25),
                    height: vh(7),
                    backgroundColor: theme == 'dark' ? '#393A39' : '#fff',
                    borderRadius: 25,
                    paddingHorizontal: vw(3.84),
                    paddingVertical: vh(1.81)
                }]}
                    onPress={() => setModal(!modal)}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Logout_SVG />
                        <Text style={{
                            textAlign: 'center',
                            paddingLeft: vw(3.84),
                            color: theme == 'dark' ? '#FFF' : '#000',
                            fontFamily: 'gilroy-semibold',
                            fontSize: 17
                        }}>Выйти</Text>
                    </View>
                    <Chevron_SVG />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        minHeight: '100%'
    },
    btnBack: {
        width: vh(4.58),
        height: vh(4.58),
        position: 'absolute',
        marginLeft: vw(5.12),
        marginTop: vh(7.31),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        transform: [{ rotateY: '180deg' }]
    },
    image_container: {
        marginTop: vh(8.45),
        marginLeft: (vw(100) - vw(46.15)) / 2,
        width: vh(21.73),
        height: vh(21.73),
    },
    text_container: {
        paddingTop: vh(3.74),
    },
    user_fio: {
        fontSize: 26,
        lineHeight: 32,
        textAlign: 'center',
    },
    profileMenu: {
        marginTop: '3.62%',
        marginBottom: '1.81%',
        marginLeft: vw(5.12),
        width: vw(89.74),
        height: vh(17.39),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        borderRadius: 25,
        marginHorizontal: vw(3.84),
        marginVertical: vh(1.81)
    },
    componentsMenu: {
        width: vw(82.05),
        height: vh(3.38),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalExit: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -150 }, { translateY: -100 }],
        width: 300,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalExitText: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'gilroy-regular',
        textAlign: 'center',
        marginBottom: 20
    },
    modalExitDark: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -150 }, { translateY: -100 }],
        width: 300,
        height: 200,
        backgroundColor: '#393939',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalExitTextDark: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'gilroy-regular',
        textAlign: 'center',
        marginBottom: 20
    },
    modalFade: {
        backgroundColor: '#000',
        opacity: 0.3,
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 999,
    },
    textNo: {
        color: '#000',
        fontFamily: 'gilroy-semibold',
        fontSize: 18,
    },
    textNoDark: {
        color: '#fff',
        fontFamily: 'gilroy-semibold',
        fontSize: 18,
    },
    textYes: {
        color: '#CB4E4E',
        fontFamily: 'gilroy-semibold',
        fontSize: 18,
    },
})

const stylesDark = StyleSheet.create({
    container: {
        backgroundColor: '#292929'
    },
    btnBack: {
        backgroundColor: '#393A39',
    },
    profileMenu: {
        backgroundColor: '#393A39',
    },
    user_fio: {
        color: '#FFF'
    },
    chevronDark: {
        fill: '#90B3E7'
    }
})