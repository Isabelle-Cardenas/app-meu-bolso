import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { router } from 'expo-router';
import AppInput from '../src/components/AppInput';
import AppButton from '../src/components/AppButton';
import { COLORS } from "../src/constants/theme.js";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false);

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Text style={styles.title}> Meu bolso </Text>
                <Text style={styles.subtitle}>Controle suas finanças</Text>
                <AppInput label="E-mail"
                    placeholder="Digite seu e-mail"
                    //recusa letras maiusculas (autocapitalize)
                    autoCapitalize="none" keyboardType="email-address"
                    value={email} onChangeText={setEmail}
                />
                <AppInput label="Senha"
                    placeholder="Digite sua senha"
                    secureTextEntry
                    value={password} onChangeText={setPassword}
                />
                <AppButton
                    title="Entrar"
                    loading={loading}
                />
                <TouchableOpacity onPress={()=>router.push('/register')}>
                <Text style={styles.link}>Criar nova conta</Text>
                </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '900',
        color: '#2f3640',
        textAlign: 'center'
    },
    subtitle: {
        color: '#7f8c8d',
        textAlign: 'center',
        marginginTop: 8,
        marginBottom: 32
    },
    link: {
        color: '#008f22',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '700'
    },
});