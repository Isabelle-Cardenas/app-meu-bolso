import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState('false');

    return (
        <View style={styles.container}>
            <Text> Meu bolso </Text>
            <Text>Controle suas finanças</Text>
            <AppInput label="E-mail"
                placeholder="Digite seu e-mail"
                //recusa letras maiusculas (autocapitalize)
                autoCapitalize="none" keyboardType="email-addres"
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
            <TouchableOpacity><Text>Criar nova conta</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});