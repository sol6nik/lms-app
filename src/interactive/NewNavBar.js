import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, Alert } from "react-native"
const Tab = createBottomTabNavigator();


import CoursesScreen from '../screens/GeneralInfo/CoursesScreen';
import MessagesScreen from "../screens/GeneralInfo/MessagesScreen";
import MarksScreen from "../screens/GeneralInfo/MarksScreen";
import ShedulesScreen from "../screens/GeneralInfo/ShedulesScreen";
import MainScreen from "../screens/GeneralInfo/MainScreen";

import Main_SVG from './../icons/tab-icons/main_icon.svg'
import Courses_SVG from './../icons/tab-icons/courses_icon.svg'
import Messages_SVG from './../icons/tab-icons/messages_icon.svg'
import Marks_SVG from './../icons/tab-icons/marks_icon.svg'
import Shedules_SVG from './../icons/tab-icons/timetable_icon.svg'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { useIsFocused } from '@react-navigation/native';
import { useTheme } from "../hooks/use-theme";


function LogoTitle() {
    const navigation = useNavigation();

    const isFocused = useIsFocused()

    const [theme, setTheme] = useTheme(isFocused)

    return (
        <SafeAreaView style={{ paddingVertical: 0, marginBottom: 21, marginTop: 10  }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="ios-person-circle-sharp" size={40} color={theme == 'dark' ? "#fff" : "#393A39"} />
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginRight: 20,
                    backgroundColor: theme == 'dark' ? '#292929' : '#F0F0F0',
                    borderRadius: 20, height: 40,
                }}>
                    <FontAwesome name="search" size={15} color={theme == 'dark' ? "#fff" : "#393A39"} style={{ margin: 10 }} />
                    <TextInput placeholder='Поиск...' placeholderTextColor={theme == 'dark' ? '#5F5F5F' : '#393A39'} style={{
                        borderColor: theme == 'dark' ? '#fff' : '#393A39',
                        paddingHorizontal: 0,
                        color: theme == 'dark' ? '#fff' : '#393A39',
                        width: 200,
                    }} />
                </View>

                <TouchableOpacity onPress={() => Alert.alert('NOTIFICATIONS')}>
                    <Ionicons name="notifications" size={35} color={theme == 'dark' ? "#fff" : "#393A39"} onPress={() => navigation.navigate('Noti')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const NewNavBar = () => {
    const isFocused = useIsFocused()

    const [theme, setTheme] = useTheme(isFocused)

    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#90B3E7',
                tabBarStyle: [styles.navBar, theme == 'dark' ? stylesDark.navBar : {}],
                headerBackgroundContainerStyle: { backgroundColor: theme == 'dark' ? '#292929' : '#F0F0F0' },
                tabBarInactiveTintColor: '#393A39',
                headerStyle: { backgroundColor: theme == 'dark' ? '#393A39' : '#fff', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 },
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
            }
            }>
            <Tab.Screen
                name="XXX"
                component={MainScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Main_SVG stroke={focused ? '#90B3E7' : '#999999'}/>
                            <Text style={{
                                fontSize: 11,
                                color: focused ? '#90B3E7' : '#999999',
                                fontFamily: 'gilroy-semibold'
                            }}>
                                Главная
                            </Text>
                        </View>
                    ),
                    headerTitle: (props) => <LogoTitle {...props} />,
                }}
            />
            <Tab.Screen name="ZZZ" component={CoursesScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Courses_SVG stroke={focused ? '#90B3E7' : '#999999'}/>
                        <Text style={{
                            fontSize: 11,
                            color: focused ? '#90B3E7' : '#999999',
                            fontFamily: 'gilroy-semibold'
                        }}>
                            Курсы
                        </Text>
                    </View>
                ),
                headerTitle: (props) => <LogoTitle {...props} />
            }} />
            <Tab.Screen name="YYY" component={MessagesScreen} options={{
                tabBarLabel: 'Сообщения',
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Messages_SVG stroke={focused ? '#90B3E7' : '#999999'}/>
                        <Text style={{
                            fontSize: 11,
                            color: focused ? '#90B3E7' : '#999999',
                            fontFamily: 'gilroy-semibold'
                        }}>
                            Сообщения
                        </Text>
                    </View>
                ),
                headerTitle: (props) => <LogoTitle {...props} />
            }} />
            <Tab.Screen name="WWW" component={MarksScreen} options={{
                tabBarLabel: 'Оценки',
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Marks_SVG stroke={focused ? '#90B3E7' : '#999999'}/>
                        <Text style={{
                            fontSize: 11,
                            color: focused ? '#90B3E7' : '#999999',
                            fontFamily: 'gilroy-semibold'
                        }}>
                            Оценки
                        </Text>
                    </View>
                ),
                headerTitle: (props) => <LogoTitle {...props} />
            }} />
            <Tab.Screen name="BBB" component={ShedulesScreen} options={{
                tabBarLabel: 'Расписание',
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Shedules_SVG stroke={focused ? '#90B3E7' : '#999999'}/>
                        <Text style={{
                            fontSize: 11,
                            color: focused ? '#90B3E7' : '#999999',
                            fontFamily: 'gilroy-semibold'
                        }}>
                            Расписание
                        </Text>
                    </View>
                ),
                headerTitle: (props) => <LogoTitle {...props} />
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    navBar: {
        height: 80,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        background: "#FFFFFF",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(20px)",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const stylesDark = StyleSheet.create({
    navBar: {
        backgroundColor: "#393A39",
        border: "1px solid rgba(255, 255, 255, 0.15)"
    }
})

export default NewNavBar