import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, Modal } from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';
import { useIsFocused } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/use-theme';
import { AntDesign } from '@expo/vector-icons';
import Chevron_SVG from '../../icons/personal-icons/chevron_icon.svg'
import Upload_IMG from '../../images/uploadFile.png'


function ReadyHW({ navigation: { goBack } }) {
    const isFocused = useIsFocused()
    const [theme, setTheme] = useTheme(isFocused)
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={theme === 'dark' ? styles.containerDark : styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={theme === 'dark' ? styles.centeredViewDark : styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={theme === 'dark' ? styles.btnCloseBlack : styles.btnClose}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <AntDesign name="close" size={20} color="#90B3E7" />
                        </TouchableOpacity>

                        <Text style={theme === 'dark' ? styles.modalTextDark : styles.modalText}>Добавить файл</Text>
                    </View>

                    <View style={styles.lbHeader}>
                        <Text style={{
                            color: theme === 'dark' ? '#fff' : '#292929',
                            fontSize: 26,
                            fontFamily: 'gilroy-medium'
                        }}>Лабараторная работа №1</Text>
                        <Text style={{
                            color: '#999999',
                            fontSize: 17,
                            fontFamily: 'gilroy-medium'
                        }}>
                            В этот элемент LMS необходимо загрузить отчеты по ЛР в формате pdf или word до 12.03.22 включительно.
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.upload_files}>
                        <Image style={{
                            width: 129,
                            height: 129,
                        }}
                            source={require('../../images/uploadFile.png')} />
                        <Text style={{
                            color: '#999999',
                            marginTop: 28
                        }}>Прикрепить файл</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSave}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 16,
                            fontFamily: 'gilroy-regular'
                        }}>Сохранить</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <TouchableOpacity style={theme == 'dark' ? styles.btnDarkDark : styles.btnBack}
                onPress={() => goBack()}>
                <Chevron_SVG style={theme == 'dark' ? styles.chevronDark : {}} />
            </TouchableOpacity>
            <View style={{
                margin: 20,
            }}>
                <Text style={{
                    fontSize: 26,
                    fontFamily: 'gilroy-medium',
                    marginTop: 20,
                    color: theme === 'dark' ? '#FFF' : '#000',
                }}>Лабараторная работа №1</Text>
                <Text style={{
                    fontSize: 14,
                    marginTop: 15,
                    color: theme === 'dark' ? '#FFF' : '#000',
                    fontFamily: 'gilroy-medium',
                }}>В этот элемент LMS необходимо загрузить отчеты по ЛР в формате pdf или word до 12.03.22
                    включительно.</Text>
            </View>

            <View style={styles.hwc}>
                <View style={{
                    width: 349,
                    height: 129,
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 25,
                    backgroundColor: theme === 'dark' ? '#393939' : '#fff',
                    marginBottom: 10
                }}>
                    <Text style={{
                        color: theme === 'dark' ? '#fff' : '#000',
                        fontSize: 17,
                        textAlign: 'center',
                        fontFamily: 'gilroy-medium',
                        paddingBottom: 14
                    }}>Прикрепленные файлы</Text>
                    <TouchableOpacity style={{
                        height: 58,
                        width: 326,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: theme === 'dark' ? '#fff' : '#999999',
                        borderRadius: 25,
                    }}>
                        <Text style={{
                            color: theme === 'dark' ? '#fff' : '#999999'
                        }}>Нет прикрепленных файлов</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.brnWhite} onPress={() => Alert.alert('Action add in Process...')}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Ionicons name="add" size={18} color="black" style={{
                            marginRight: 5
                        }} />
                        <Text style={{
                            color: '#000',
                            fontSize: 16,
                            fontFamily: 'gilroy-medium'
                        }}>Добавить файл</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.brnWhite} onPress={() => Alert.alert('Action edit in Process...')}>
                    <Text style={{
                        color: '#000',
                        fontSize: 16,
                        fontFamily: 'gilroy-medium'
                    }}>Редактировать ответ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        fontFamily: 'gilroy-medium'
                    }}>Отправить на проверку</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ReadyHW;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 5,
        height: '100%'
    },
    containerDark: {
        backgroundColor: '#292929',
        padding: 5,
        height: '100%'
    },
    btnBack: {
        width: 30,
        height: 30,
        marginLeft: vw(5.12),
        marginTop: vh(7.31),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        transform: [{ rotateY: '180deg' }]
    },
    btnDarkDark: {
        backgroundColor: '#393939',
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
    chevronDark: {
        fill: '#90B3E7'
    },
    btnUpload: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 267,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    btnUploadDark: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 267,
        borderRadius: 10,
        backgroundColor: '#393939',
    },
    btnSend: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 50,
        borderRadius: 45,
        backgroundColor: '#90B3E7',
        marginTop: 10,
    },
    brnWhite: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 50,
        borderRadius: 45,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    hwc: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    centeredView: {
        width: '100%',
        height: 725,
        marginTop: 118,
        padding: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff'
    },
    centeredViewDark: {
        width: '100%',
        height: 725,
        marginTop: 118,
        padding: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#393A39'
    },
    modalView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnClose: {
        backgroundColor: '#F0F0F0',
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginRight: 19
    },
    btnCloseBlack: {
        backgroundColor: '#292929',
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginRight: 19
    },
    modalText: {
        fontSize: 26,
        fontFamily: 'gilroy-medium',
        color: '#000'
    },
    modalTextDark: {
        fontSize: 26,
        fontFamily: 'gilroy-medium',
        color: '#fff'
    },
    lbHeader: {
        marginTop: 44,
    },
    upload_files: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
        height: 267,
        borderRadius: 25,
        marginTop: 22
    },
    btnSave: {
        backgroundColor: '#90B3E7',
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    labHeader: {

    }
});