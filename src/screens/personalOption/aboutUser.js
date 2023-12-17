import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert, Modal, Switch } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/use-theme';

export default function AboutUser({ navigation: { goBack } }) {

    const [theme, setTheme, isEnabled, setIsEnabled] = useTheme()

    const handleLightThemeClick = (schema) => {
        if (schema == 'Светлая') setTheme('light')
        if (schema == 'Темная') setTheme('dark')
    }

    const [modalVisible, setModalVisible] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [checked, setChecked] = useState(theme == 'dark');

    useLayoutEffect(() => {
        setChecked(theme == 'dark')
    }, [isEnabled])

    var themeSchema = ['Светлая', 'Темная']

    return (
        <SafeAreaView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, theme == 'dark' ? stylesDark.modalView : {}]}>
                        <Text>{isEnabled}</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <View style={[styles.btnCLoseModal, theme == 'dark' ? stylesDark.btnCLoseModal : {}]}>
                                <EvilIcons name="close" size={24} color="#90B3E7" />
                            </View>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 26,
                            marginTop: 30,
                            color: theme == 'dark' ? '#FFF' : '#000',
                            fontFamily: 'gilroy-semibold'
                        }}>Тема</Text>
                        <View style={styles.authoTheme}>
                            <Text style={{ color: theme == 'dark' ? '#FFF' : '#000', fontFamily: 'gilroy-semibold' }}>Использовать системную тему</Text>
                            <Switch
                                trackColor={{ false: "#000", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#c4c4c4" : "#c4c4c4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        {(isEnabled) ? false :
                            themeSchema.map((item, index) => {
                                return (
                                    <View key={item}>
                                        {checked == index ? (
                                            <TouchableOpacity>
                                                <View style={[styles.themeSchema, theme == 'dark' ? stylesDark.themeSchema : {}]}>
                                                    <Text style={{ color: theme == 'dark' ? '#FFF' : '#000', fontFamily: 'gilroy-semibold' }}>{item}</Text>
                                                    <Ionicons name="checkmark" size={24} color={theme == 'dark' ? '#f0f0f0' : "#81b0ff"} />
                                                </View>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => { setChecked(index); handleLightThemeClick(item) }}>
                                                <View style={[styles.themeSchema, theme == 'dark' ? stylesDark.themeSchema : {}]}>
                                                    <Text style={{ color: theme == 'dark' ? '#FFF' : '#000', fontFamily: 'gilroy-semibold' }}>{item}</Text>
                                                    <Ionicons name="checkmark" size={24} color={theme == 'dark' ? '#292929' : "#f0f0f0"} />
                                                </View>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                )
                            })}
                    </View>
                </View>
            </Modal>

            <View style={[styles.container, theme == 'dark' ? stylesDark.container : {}]}>
                <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
                    <Ionicons name="chevron-back" size={20} color={theme == 'dark' ? "#90B3E7" : "#393A39"} />
                    <Text style={{ color: theme == 'dark' ? '#FAFAFA' : '#393A39' }}>Назад</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 20, textAlign: 'center', color: theme == 'dark' ? '#FFF' : '#000', fontFamily: 'gilroy-semibold' }}>Настройки СДО</Text>

                <View style={{ alignItems: 'center' }}>
                    <View style={[styles.menuWrapper, theme == 'dark' ? stylesDark.menuWrapper : {}]}>
                        <TouchableOpacity style={styles.menuElement} onPress={() => Alert.alert('HERE WE CAN EDIT LANGUAGE')}>
                            <Ionicons name="language-outline" size={20} color={theme == 'dark' ? "#FFF" : "#393A39"} style={{ marginRight: 5, }} />
                            <Text style={[theme == 'dark' ? stylesDark.text : {}, { fontFamily: 'gilroy-semibold' }]}>Язык</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuElement} onPress={() => setModalVisible()}>
                            <Ionicons name="options-outline" size={20} color={theme == 'dark' ? "#FFF" : "#393A39"} style={{ marginRight: 7, }} />
                            <Text style={[theme == 'dark' ? stylesDark.text : {}, { fontFamily: 'gilroy-semibold' }]}>Внешний вид</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuElement} onPress={() => Alert.alert('HERE WE CAN EDIT INFORMATION ABOUT YOUR PASSWORD')}>
                            <Ionicons name="notifications-outline" size={20} color={theme == 'dark' ? "#FFF" : "#393A39"} style={{ marginRight: 7, }} />
                            <Text style={[theme == 'dark' ? stylesDark.text : {}, { fontFamily: 'gilroy-semibold' }]}>Уведомления</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#F0F0F0',
        minHeight: '100%'
    },
    btnBack: {
        marginRight: 250,
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
    authoTheme: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    themeSchema: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: '#f0f0f0',
        height: 54,
        width: '100%',
        borderRadius: 40,
        padding: 20,
        paddingVertical: 0,
    },
    textSchema: {
        fontSize: 17
    }
})

const stylesDark = StyleSheet.create({
    container: {
        backgroundColor: '#292929'
    },
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
    }
})