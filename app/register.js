import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { router } from "expo-router";
import AppInput from '../src/components/AppInput';
import AppButton from '../src/components/AppButton';
import { COLORS } from "@/src/constants/theme";
import { signUp } from "../src/services/authService";
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);

    //trim é uma função ou método usado para remover espaços em branco
    async function handleRegister() {
        if (!email.trim() || !password || !confirm)
            return Alert.alert('Atenção', 'Preencha todos os campos');
        if (password.length < 6)
            return Alert.alert('Atenção', 'A senha deve ter no mínimo 6 caracteres');
        if (password !== confirm)
            return Alert.alert('Atenção', 'As senhas não conferem');
        try {
            setLoading(true);
            const { data, error } = await signUp(email.trim(), password);
            if (error) {
                Alert.alert('Erro', error.message);
                console.log('Erro', error.message); return;}
                if (data.session) router.replace('/');
                else {
                    Alert.alert('Cadastro realizado', 'Confirme seu e-mail, se necessário.'); router.replace('/');
                }
            } finally {setLoading(false);}
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Text style={styles.title}> Criar conta </Text>
            <AppInput label="E-mail"
                //recusa letras maiusculas (autocapitalize) =>
                autoCapitalize="none" keyboardType="email-address"
                value={email} onChangeText={setEmail}
            />
            <AppInput label="Senha"
                secureTextEntry
                value={password} onChangeText={setPassword}
            />
            <AppInput label="Confirmar senha"
                secureTextEntry
                value={confirm} onChangeText={setConfirm}
            />
            <AppButton
                title="Criar conta" onPress={handleRegister}
                loading={loading}
            />

        </KeyboardAvoidingView>
    );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 24,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '900',
        color: '#2f3640',
        marginBottom: 28
    }
});