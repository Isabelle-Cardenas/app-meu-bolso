import { Text, ScrollView, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from 'react';
import AppInput from '../../src/components/AppInput';
import AppButton from "../../src/components/AppButton";
import { listCategories } from "../../src/services/categoryService";

export default function AddTransaction() {
    const [tipo, setTipo] = useState('');
    const [categoriaId, setCategoriaId] = useState(null)
    const [categorias, setCategorias]=useState([])

    useEffect(()=>{(async()=>{
        const {data,error}=await listCategories();
        if(error)Alert.alert('Erro', error.message);
        else setCategorias(data||[]);
    })();},[]);

    const filtered=categorias.filter(x=>x.tipo===tipo)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <AppInput label="Descrição" />
            <AppInput label="Valor" />

            <Text style={styles.label}>Tipo</Text>
            <View style={styles.row}>{['receita', 'despesa'].map(x => <TouchableOpacity key={x} style={[styles.type, x===tipo&&styles.selected]}>
                <Text>{x === 'receita' ? 'Receita' : 'Despesa'}</Text>
            </TouchableOpacity>)}</View>

            <Text style={styles.label}>Categoria</Text>
            <View style={styles.categories}>{filtered.map(x => <TouchableOpacity key={x} style={[styles.category, x.id===categoriaId&&styles.selected]}>
                <Text>{x.nome}</Text>
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
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 20
    },
    type: {
        flex: 1,
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#dcdde1',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    selected: {
        borderColor: '#00b894',
        backgroundColor: '#dff9f2'
    },
    label:{
    fontWeight:'700', 
    marginBottom: 8
    },
    categories:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8, 
        marginBottom: 20
    },
    category:{
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dcdde1',
        backgroundColor: '#fff'
    },
});