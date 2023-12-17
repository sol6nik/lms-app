import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function InputFields({ icon, label, keyboardType, isPassword, inputFunction }) {
    //{ label, icon, keyboardType, fieldButtonLabel, fieldButtonFunction },
    return (
        <View style={{
            flexDirection: 'row',
            marginBottom: 15,
            alignItems: 'center',
            justifyContent: 'center',
            width: 350,
            height: 50,
            paddingLeft: 15,
            borderRadius: 25,
            backgroundColor: '#F0F0F0'
        }}>
            {icon}
            <TextInput
                placeholder={label}
                keyboardType={keyboardType}
                secureTextEntry={isPassword}
                style={{ flex: 1, paddingVertical: 0 }}
                onChangeText={newText => inputFunction(newText)}
            />
            <TouchableOpacity>
                <Text style={{ color: '#B3B4BA', fontWeight: 'bold' }}></Text>
            </TouchableOpacity>
        </View>
    )
}