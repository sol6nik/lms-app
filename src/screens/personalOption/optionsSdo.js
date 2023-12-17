import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/use-theme';
import { vh } from 'react-native-expo-viewport-units';

export default function OptionsSdo({ navigation: { goBack } }) {

    const [modalPhone, setModalPhone] = useState(false)
    const [modalEmail, setModalEmail] = useState(false)
    const [modalPassword, setModalPassword] = useState(false)

    const [theme, setTheme] = useTheme()

    return (
        <SafeAreaView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalPhone}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, theme == 'dark' ? stylesDark.modalView : {}]}>
                        <TouchableOpacity onPress={() => setModalPhone(false)}>
                            <View style={[styles.btnCLoseModal, theme == 'dark' ? stylesDark.btnCLoseModal : {}]}>
                                <EvilIcons name="close" size={24} color="#90B3E7" />
                            </View>
                        </TouchableOpacity>
                        <Text style={[styles.phoneHeader, { fontFamily: 'gilroy-regular' }]}>Номер телефона</Text>
                        <View style={[styles.phoneBack, theme == 'dark' ? stylesDark.phoneBack : {}]}>
                            <Text style={{
                                fontSize: 12,
                                color: theme == 'dark' ? '#fff' : '#000',
                                fontFamily: 'gilroy-regular'
                            }}>{'+7 (777) 777 77 77'}</Text>
                        </View>

                        <TouchableOpacity>
                            <Text style={{
                                color: '#CB4E4E',
                                fontSize: 17,
                                fontFamily: 'gilroy-semibold'
                            }}>Удалить телефона</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEmail}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, theme == 'dark' ? stylesDark.modalView : {}]}>
                        <TouchableOpacity onPress={() => setModalEmail(false)}>
                            <View style={[styles.btnCLoseModal, theme == 'dark' ? stylesDark.btnCLoseModal : {}]}>
                                <EvilIcons name="close" size={24} color="#90B3E7" />
                            </View>
                        </TouchableOpacity>
                        <Text style={[styles.phoneHeader, , { fontFamily: 'gilroy-semibold' }]}>Введите новую почту</Text>

                        <View style={{
                            height: 120,
                            justifyContent: 'space-between',
                            marginBottom: 20,
                            marginTop: 20,
                        }}>
                            <TextInput
                                placeholder='Почта'
                                placeholderTextColor={'#999999'}
                                style={[styles.newPassInput, theme == 'dark' ? stylesDark.newPassInput : {}, { fontFamily: 'gilroy-semibold' }]} />
                        </View>

                        <TouchableOpacity style={[styles.btnUpdatePsw, theme == 'dark' ? stylesDark.btnUpdatePsw : {}, { fontFamily: 'gilroy-semibold' }]}>
                            <Text style={{
                                color: '#000',
                                fontSize: 15
                            }}>Обновить почту</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal edit password */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalPassword}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, theme == 'dark' ? stylesDark.modalView : {}]}>
                        <TouchableOpacity onPress={() => setModalPassword(false)}>
                            <View style={[styles.btnCLoseModal, theme == 'dark' ? stylesDark.btnCLoseModal : {}]}>
                                <EvilIcons name="close" size={24} color="#90B3E7" />
                            </View>
                        </TouchableOpacity>
                        <Text style={[styles.phoneHeader, , { fontFamily: 'gilroy-semibold' }]}>Придумайте новый пароль</Text>

                        <View style={{
                            height: 120,
                            justifyContent: 'space-between',
                            marginBottom: 20,
                            marginTop: 20,
                        }}>
                            <TextInput
                                placeholder='Пароль'
                                placeholderTextColor={'#999999'}
                                style={[styles.newPassInput, theme == 'dark' ? stylesDark.newPassInput : {}, { fontFamily: 'gilroy-semibold' }]} />
                            <TextInput placeholder='Повторите пароль'
                                placeholderTextColor={'#999999'}
                                style={[styles.newPassInput, theme == 'dark' ? stylesDark.newPassInput : {}, { fontFamily: 'gilroy-semibold' }]} />
                        </View>

                        <TouchableOpacity style={[styles.btnUpdatePsw, theme == 'dark' ? stylesDark.btnUpdatePsw : {}, { fontFamily: 'gilroy-semibold' }]}>
                            <Text style={{
                                color: '#000',
                                fontSize: 15
                            }}>Обновить пароль</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={theme == 'dark' ? styles.containerDark : styles.container}>
                <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
                    <Ionicons name="chevron-back" size={20} color={theme == 'dark' ? "#90B3E7" : "#393A39"} />
                    <Text style={{ color: theme == 'dark' ? '#FAFAFA' : '#393A39' }}>Назад</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 20, textAlign: 'center', color: theme == 'dark' ? '#FFF' : '#000', fontFamily: 'gilroy-semibold' }}>Учетная запись</Text>

                <View style={{ alignItems: 'center' }}>
                    <View style={[styles.menuWrapper, theme == 'dark' ? stylesDark.menuWrapper : {}]}>
                        <TouchableOpacity style={styles.menuElement} onPress={() => setModalPhone(true)}>
                            <FontAwesome5 name="edit" size={20} color={theme == 'dark' ? "#FFF" : "#393A39"} style={{ marginRight: 5, }} />
                            <Text style={[theme == 'dark' ? stylesDark.text : {}, { fontFamily: 'gilroy-semibold' }]}>Редактировать номер телефона</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuElement} onPress={() => setModalEmail(true)}>
                            <MaterialCommunityIcons name="email-edit-outline" size={20} color={theme == 'dark' ? "#FFF" : "#393A39"} style={{ marginRight: 9, }} />
                            <Text style={[theme == 'dark' ? stylesDark.text : {}, { fontFamily: 'gilroy-semibold' }]}>Изменить почту</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuElement} onPress={() => setModalPassword(true)}>
                            <MaterialCommunityIcons name="shield-edit-outline" size={20} color={theme == 'dark' ? "#FFF" : "#393A39"} style={{ marginRight: 9, }} />
                            <Text style={[theme == 'dark' ? stylesDark.text : {}, { fontFamily: 'gilroy-semibold' }]}>Изменить пароль</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#F0F0F0',
        height: '100%'
    },
    containerDark: {
        padding: 10,
        backgroundColor: '#292929',
        height: '100%'
    },
    btnBack: {
        marginTop: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuWrapper: {
        width: 350,
        height: 160,
        backgroundColor: '#fff',
        marginTop: 16,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 20
    },
    menuElement: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        width: '100%',
        height: '100%',
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    btnCLoseModal: {
        width: 38,
        height: 38,
        borderRadius: 50,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    phoneHeader: {
        fontSize: 15,
        color: '#999999',
        marginTop: 30,
        marginBottom: 10
    },
    phoneBack: {
        width: '100%',
        backgroundColor: '#F0F0F0',
        height: 55,
        justifyContent: 'center',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 30
    },
    newPassInput: {
        width: '100%',
        height: 55,
        borderRadius: 20,
        backgroundColor: '#F0F0F0',
        paddingLeft: 20,
    },
    btnUpdatePsw: {
        width: '100%',
        height: 50,
        backgroundColor: '#90B3E7',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const stylesDark = StyleSheet.create({
    menuWrapper: {
        backgroundColor: '#393A39'
    },
    text: {
        color: '#FFF'
    },
    modalView: {
        backgroundColor: '#393A39'
    },
    themeSchema: {
        backgroundColor: '#292929'
    },
    btnCLoseModal: {
        backgroundColor: '#292929'
    },
    phoneBack: {
        backgroundColor: '#313131'
    },
    btnUpdatePsw: {
        backgroundColor: '#fff'
    },
    newPassInput: {
        backgroundColor: '#313131'
    }
})