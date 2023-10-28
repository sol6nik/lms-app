import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function TimetableItem({lesson_count,lesson_type,schedule_time,lesson_subject,teacher_fio,lesson_location}) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.numLess}>
                    <Text style={{ color: '#fff' }}>{lesson_count}</Text>
                </View>
                <Text style={{ marginRight: 100 }}>{lesson_type}</Text>
                <Text>{schedule_time}</Text>
            </View>

            <Text style={{ marginTop: 15, fontSize: 17, fontWeight: 'bold' }}>{lesson_subject}</Text>
            <Text style={{ marginTop: 5, fontSize: 14 }}>{teacher_fio}</Text>

            <Text style={{ marginTop: 10, fontSize: 15, color: '#999999' }}>{lesson_location}</Text>

            <TouchableOpacity style={styles.cardBtn} onPress={() => Alert.alert('Add task')}>
                <Text style={{ color: '#393A39', marginRight: 5, fontSize: 15 }}>Добавить задачу</Text>
                <Ionicons name="add-circle-sharp" size={20} color="#393A39" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        padding: 20,
        paddingVertical: 0,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        height: 35,
        padding: 15,
        paddingVertical: 0,
        backgroundColor: '#B0B7BD',
        borderRadius: 10
    },
    card: {
        marginTop: 20,
        width: 320,
        elevation: 3,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    numLess: {
        width: 30,
        height: 30,
        backgroundColor: '#E0843C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    cardBtn: {
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        height: 40,
        width: 280,
        backgroundColor: '#90B3E7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})