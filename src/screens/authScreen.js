import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import CustomInput from "../customComponents/CustomInput";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { vh, vw } from 'react-native-expo-viewport-units'
import axios from 'axios'
import authScreenFunctions from '../js/authFunctions'
import authFunctions from "../js/authFunctions";

import Mospolytech_Logo_SVG from '../icons/auth-icons/mospolytech_logo_icon.svg'

export default function Login({ navigation }) {
    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [visiblePassword, setVisiblePassword] = useState(true)

    const login_attempt = async (data) => {
        let axios_cfg = {
            url: "http://themist.xyz:4444/api/user/login",
            method: "POST",
            data: { email: data.loginInput.toLowerCase(), password: data.passwordInput }
        }
        try {
            var anwser = await axios(axios_cfg);
            await authScreenFunctions.setData(anwser.data)
            navigation.navigate('MainScreen')
        } catch (err) {
            console.log('Some error appeared during request: ' + err.message)
        }
    }

    useEffect(() => {
        authScreenFunctions.eraseData()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Mospolytech_Logo_SVG style={styles.logo} />
                <Text style={styles.logoHeader}>МОСКОВСКИЙ ПОЛИТЕХ</Text>
            </View>

            <View style={styles.main_container}>
                <Text style={{ marginBottom: 25, fontSize: 25, fontFamily: "gilroy-semibold" }}>Вход</Text>

                <CustomInput
                    label={'Логин или адрес электронной почты'}
                    icon={
                        <Feather
                            name="mail"
                            size={20}
                            color="#B3B4BA"
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputFunction={login => setLoginInput(login)}
                    keyboardType="email-address"
                />

                <View>
                    <CustomInput
                        label={'Пароль'}
                        icon={
                            <Ionicons
                                name="ios-lock-closed-outline"
                                size={20}
                                color="#B3B4BA"
                                style={{ marginRight: 5 }}
                            />
                        }
                        isPassword={visiblePassword}
                        inputFunction={pass => setPasswordInput(pass)}
                        keyboardType="default"
                    />
                    <TouchableOpacity style={{ position: 'absolute', right: 15, top: 14, marginRight: 10 }}
                        onPress={() => setVisiblePassword(!visiblePassword)}>
                        <AntDesign
                            name="eye"
                            size={24}
                            color="#5F5F5F"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.enter_button}
                    onPress={() => login_attempt({ loginInput, passwordInput })}>
                    <Text style={{ color: '#000000', fontFamily: 'gilroy-regular', fontSize: 22 }}>Вход</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 27 }}>
                    <Text style={{ fontFamily: 'gilroy-regular', fontSize: 17, color: '#999999' }}>Забыли логин или пароль?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 12 }} onPress={
                    // async 
                    () => {
                        // await authFunctions.setGuestData();
                        navigation.navigate('MainScreen')
                    }}>
                    <Text style={{ fontFamily: 'gilroy-regular', fontSize: 17, color: '#999999' }}>Зайти гостем</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={{ marginTop: 20 }} onPress={() => { authFunctions.debugPrint()}}>
                    <Text style={{fontFamily: 'gilroy-regular'}}>Debug print</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0'
    },
    logo_container: {
        marginTop: vh(14.49),
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 10,
        width: vw(25.64),
        height: vw(25.64)
    },
    logoHeader: {
        width: 219,
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'gilroy-semibold',
        textTransform: 'uppercase'
    },
    main_container: {
        marginTop: vh(14.97),
        height: 500,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 35,
    },
    enter_button: {
        width: 350,
        height: 60,
        backgroundColor: '#90B3E7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    }
})