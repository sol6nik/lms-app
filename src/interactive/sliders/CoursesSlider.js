import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

import { useIsFocused } from '@react-navigation/native';
import { useTheme } from '../../hooks/use-theme';

// export default function CoursesSl() {
//     const courses = [
//         {
//             id: '1',
//             img: require('../../images/course_bg.png'),
//             from_date: '12.05.2022',
//             title: 'Управление стратегическими проектами',
//         },
//         {
//             id: '2',
//             img: require('../../images/course_bg.png'),
//             from_date: '15.05.2022',
//             title: 'Управление стратегическими проектами',
//         },
//         {
//             id: '3',
//             img: require('../../images/course_bg.png'),
//             from_date: '18.05.2022',
//             title: 'Управление стратегическими проектами',
//         },
//         {
//             id: '4',
//             img: require('../../images/course_bg.png'),
//             from_date: '21.05.2022',
//             title: 'Управление стратегическими проектами',
//         }
//     ]

//     const isFocused = useIsFocused()
//     const [theme, setTheme] = useTheme(isFocused)

//     const renderCourses = ({ item }) => (
//         <CoursesSlideComponent item={item} />
//     );

//     const CoursesSlideComponent = ({ item }) => (
//         <View style={theme === 'dark' ? styles.itemDark : styles.item}>

//             <View style={{
//                 alignItems: 'center',
//                 justifyContent: 'center'
//             }}>
//                 <Image source={item.img} style={styles.image} />
//             </View>

//             <View style={theme === 'dark' ? styles.timeBgDark : styles.timeBg}>
//                 <Text style={theme === 'dark' ? styles.timeTitleDark : styles.timeTitle}>{item.from_date}</Text>
//             </View>

//             <Text style={theme === 'dark' ? styles.titleDark : styles.title}>{item.title}</Text>

//             <View style={{
//                 alignItems: 'center'
//             }}>
//                 <TouchableOpacity style={styles.buttonComplete}>
//                     <Text style={{fontFamily: 'gilroy-medium', fontSize:17}}>Подробнее</Text>
//                 </TouchableOpacity>
//             </View>
//         </View >
//     );

//     return (
//         <FlatList
//             data={courses}
//             renderItem={renderCourses}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={item => item.id}
//         />
//     )
// }

export default function CoursesSl() {
    const courses = [
        {
            id: "1",
            img: require("../../images/course_bg.png"),
            from_date: "12.05.2022",
            title: "Управление стратегическими коммуникациями",
        },
        {
            id: "2",
            img: require("../../images/course_bg.png"),
            from_date: "15.05.2022",
            title: "Управление стратегическими коммуникациями",
        },
        {
            id: "3",
            img: require("../../images/course_bg.png"),
            from_date: "18.05.2022",
            title: "Управление стратегическими коммуникациями",
        },
        {
            id: "4",
            img: require("../../images/course_bg.png"),
            from_date: "21.05.2022",
            title: "Управление стратегическими коммуникациями",
        },
    ];

    const isFocused = useIsFocused();
    const [theme, setTheme] = useTheme(isFocused);

    return (
        <FlatList
            data={courses}
            renderItem={({ item }) => (
                <View style={[theme === "dark" ? styles.itemDark : styles.item, { borderRadius: 25 }]}>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <Image source={item.img} style={styles.image} />
                    </View>

                    <View
                        style={theme === "dark" ? styles.timeBgDark : styles.timeBg}>
                        <Text
                            style={theme === "dark" ? styles.timeTitleDark : styles.timeTitle}>
                            {item.from_date}
                        </Text>
                    </View>

                    <Text style={[theme === "dark" ? styles.titleDark : styles.title, { fontSize: 22, width: '100%', marginLeft: 5 }]}>
                        {item.title}
                    </Text>

                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={styles.buttonComplete} onPress={() => Alert.alert('Window in process...')}>
                            <Text style={{ fontFamily: "gilroy-medium", fontSize: 20 }}>
                                Домашняя работа
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id} />
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1000,
    },
    item: {
        width: vw(95),
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 20,
    },
    itemDark: {
        width: vw(95),
        padding: 15,
        backgroundColor: '#393A39',
        color: 'fff',
        borderRadius: 10,
        paddingVertical: 20,
    },
    title: {
        fontSize: 17,
        fontFamily: 'gilroy-semibold',
        marginTop: 10,
        marginBottom: 10,
        width: 250,
        color: '#000',
    },
    titleDark: {
        fontSize: 17,
        fontFamily: 'gilroy-semibold',
        marginTop: 10,
        marginBottom: 10,
        width: 250,
        color: '#fff',
    },
    buttonComplete: {
        backgroundColor: '#90B3E7',
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    timeBg: {
        width: 110,
        height: 34,
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeBgDark: {
        width: 110,
        height: 34,
        backgroundColor: '#292929',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeTitle: {
        color: '#000',
        fontFamily: 'gilroy-regular'
    },
    timeTitleDark: {
        color: '#fff',
        fontFamily: 'gilroy-regular'
    },
    image: {
        marginBottom: 16,
        resizeMode: 'cover',
        width: '100%',
        borderRadius: 25,
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#99A9FD',
        marginLeft: 5,
        marginRight: 5,
    }
});