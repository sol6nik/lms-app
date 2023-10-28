import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function InputFields({ label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction }) {
    return (
        <View style={{
            flexDirection: 'row',
            marginBottom: 15,
            alignItems: 'center',
            justifyContent: 'center',
            width: 350,
            height: 50,
            paddingLeft: 15,
            borderRadius: 10,
            backgroundColor: '#FFFFFF'
        }}>
            {icon}
            {inputType == 'Password' ? (
                <TextInput
                    placeholder={label}
                    secureTextEntry={true}
                    style={{ flex: 1, paddingVertical: 0 }}
                />
            ) : (
                <TextInput
                    placeholder={label}
                    keyboardType={keyboardType}
                    style={{ flex: 1, paddingVertical: 0 }}
                    onChangeText={newText => inputFunction(newText)}
                />
            )}


            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{ color: '#B3B4BA', fontWeight: 'bold' }}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}