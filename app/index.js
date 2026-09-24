import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert
} from "react-native";

import { useRouter } from "expo-router";
import AppInput from "../src/components/AppInput";
import AppButton from "../src/components/AppButton";
import { signIn } from "../src/services/authService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Atenção", "Informe e-mail e senha");
            return;
        }

        try {
            setLoading(true);

            const { error } = await signIn(
                email.trim(),
                password.trim()
            );

            if (error) {
                Alert.alert("Erro", error.message);
                console.log("Erro", error.message);
                return;
            }

            router.replace("/(app)/home");

        } finally {
            setLoading(false);
        }
    }

    const router = useRouter();

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <Text style={styles.title}>Meu bolso</Text>

            <Text style={styles.subtitle}>
                Controle suas finanças
            </Text>

            <AppInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <AppInput
                label="Senha"
                placeholder="Digite sua senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <AppButton
                title="Entrar"
                loading={loading}
                onPress={handleLogin}
            />

            <TouchableOpacity
                onPress={() => router.push("/register")}
            >
                <Text style={styles.link}>
                    Criar nova conta
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
    },

    title: {
        fontSize: 34,
        fontWeight: "900",
        color: "#2f3640",
        textAlign: "center",
    },

    subtitle: {
        color: "#7f8c8d",
        textAlign: "center",
        marginTop: 8,
        marginBottom: 32,
    },

    link: {
        color: "#008f22",
        textAlign: "center",
        marginTop: 20,
        fontWeight: "700",
    },
});
