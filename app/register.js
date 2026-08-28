import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { router } from expo - router;
import AppInput from '../src/components/AppInput';
import AppButton from '../src/components/AppButton';
import { COLORS } from "@/src/constants/theme";
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);

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
                title="Criar conta"
            loading={loading}
            />
            <TouchableOpacity
                onPress={() => router.push('/register')}>
                <Text style={styles.link}>Criar nova conta</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
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