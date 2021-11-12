import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function TaskList({ data, deleteItem, editItem }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => deleteItem(data.key)}
            >
                <Icon name="trash" color="#FFF" size={20}></Icon>
            </TouchableOpacity>

            <View style={{ paddingRight: 10 }}>
                <TouchableWithoutFeedback
                    onPress={() => editItem(data)}>
                    <Text style={{ color: "#FFF", paddingRight: 10 }}> {data.nome} </Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#121212",
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4
    }
})