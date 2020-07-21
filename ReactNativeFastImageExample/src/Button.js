import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({ text, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        margin: 15,
        height: 40,
        paddingLeft: 13,
        paddingRight: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    },
})

export default Button
