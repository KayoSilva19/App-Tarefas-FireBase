import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import firebase from '../../Services/firebaseConnection';



export default function Login( { changeStatus } ) {
    const [type, setType] = useState('login');

    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

    function handleLogin() {
        if (type === 'login') {
            // Aqui fazemos o login
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.uid)
                })
                .catch((error) => {
                    console.log(error);
                    alert("Algo Deu Errado!")

                    return;
                })

        } else {
            // Cadastro de usuario
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.uid)
                })
                .catch((error) => {
                    console.log(error);
                    alert("Algo Deu Errado!")
                    return;
                })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder="Digite Seu Email"
                placeholderTextColor="#000"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Digite Sua Senha"
                placeholderTextColor="#000"
                style={styles.input}
                value={password}
                onChangeText={(texto) => setPassWord(texto)}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={[styles.handleLogin, { backgroundColor: type === "login" ? "#3EA6F2" : '#141414' }]}
                onPress={handleLogin}
            >
                <Text style={styles.loginText} >
                    {type === "login" ? "Acessar" : "Cadastrar"}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setType(type => type === "login" ? "Cadastrar" : "login")}
            >
                <Text style={{ textAlign: 'center' }}>
                    {type === "login" ? "Criar uma conta" : "Já possuo uma conta."}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#F2F6FC",
        paddingHorizontal: 10
    },
    input: {
        marginBottom: 10,
        backgroundColor: "#FFF",
        borderRadius: 4,
        padding: 10,
        borderWidth: 1,
        borderColor: "#141414"
    },
    handleLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        marginBottom: 10,

    },
    loginText: {
        color: "#FFF",
        fontSize: 17
    }
});