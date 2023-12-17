import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native'
import React from 'react'

import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {useTheme} from '../../hooks/use-theme';
import {vh} from 'react-native-expo-viewport-units'
import AccountItem from "../../customComponents/AccountItem";

export default function AboutAccount({navigation: {goBack}}) {

    const [theme, setTheme] = useTheme()

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[styles.container, theme == 'dark' ? stylesDark.container : {}]}>
                    <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
                        <Ionicons name="chevron-back" size={20} color={theme == 'dark' ? "#90B3E7" : "#393A39"}/>
                        <Text style={{
                            color: theme == 'dark' ? '#FAFAFA' : '#393A39',
                            fontFamily: 'gilroy-semibold'
                        }}>Назад</Text>
                    </TouchableOpacity>

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('../../images/AvatarPerson.png')} style={styles.imageProfile}/>
                    </View>

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: theme == 'dark' ? '#393A39' : '#fff',
                        borderRadius: 10,
                    }}>
                        <AccountItem/>
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
    container: {
        backgroundColor: '#292929'
    },
    info: {
        backgroundColor: '#393A39'
    },
    text: {
        color: '#FFF'
    }
})