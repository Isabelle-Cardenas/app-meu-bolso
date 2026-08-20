import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import {router} from expo-router;
import AppInput from '../src/components/AppInput';
import AppButton from '../src/components/AppButton';
import { COLORS } from "@/src/constants/theme";
export default function Register() {
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View>
                <Text style={styles.title}> Meu bolso - estou no registro </Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

});