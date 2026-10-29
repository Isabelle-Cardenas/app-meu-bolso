import { Text, ScrollView, TouchableOpacity, View, StyleSheet } from "react-native";
import AppInput from '../../src/components/AppInput';
import AppButton from "../../src/components/AppButton";

export default function AddTransaction() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <AppInput label="Descrição" />
            <AppInput label="Valor" />
            <Text style={styles.label}></Text>
            <View style={styles.row}>{['receita', 'despesa'].map(x => <TouchableOpacity key={x} style={[styles.type, x === tipo && styles.selected]}>
                <Text>{x === 'receita' ? 'Receita' : 'Despesa'}</Text>
            </TouchableOpacity>)}</View>
            <AppInput label="Data" />
            <AppInput label="Observação" multiline />
            <AppButton title="Salvar transação" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f9fa'
    }
});