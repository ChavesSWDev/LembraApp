import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MainMenu = () => {
    const [isNameEditing, setNameEditing] = useState(false);
    const [name, setName] = useState('Estabelecimento X');
    const [isCnpjEditing, setCnpjEditing] = useState(false);
    const [cnpj, setCnpj] = useState('CNPJ Estabelecimento X');
    const [isRamoEditing, setRamoEditing] = useState(false);
    const [ramo, setRamo] = useState('Ramo X');
    const [originalName, setOriginalName] = useState(name);
    const [originalCnpj, setOriginalCnpj] = useState(cnpj);
    const [originalRamo, setOriginalRamo] = useState(ramo);


    const handleEditName = () => {
        setNameEditing(true);
        setOriginalName(name); // Armazena o valor original
    };

    const handleEditCnpj = () => {
        setCnpjEditing(true);
        setOriginalCnpj(cnpj); // Armazena o valor original
    };

    const handleEditRamo = () => {
        setRamoEditing(true);
        setOriginalRamo(ramo); // Armazena o valor original
    };

    const handleCancelName = () => {
        setNameEditing(false);
        setName(originalName); // Restaura o valor original
    };

    const handleCancelCnpj = () => {
        setCnpjEditing(false);
        setCnpj(originalCnpj); // Restaura o valor original
    };

    const handleCancelRamo = () => {
        setRamoEditing(false);
        setRamo(originalRamo); // Restaura o valor original
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('./../assets/Imagens/Logos/LogoPadrao.png')}
                style={styles.logo}
            />

            <Text style={styles.label}>Estabelecimento</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={text => setName(text)}
                    editable={isNameEditing}
                />
                {isNameEditing ? (
                    <TouchableOpacity onPress={() => setNameEditing(false)}>
                        <Text style={styles.editText}>Salvar</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleEditName}>
                        <Text style={styles.editText}>Editar</Text>
                    </TouchableOpacity>
                )}
                {isNameEditing && (
                    <TouchableOpacity onPress={() => handleCancelName(false)}>
                        <Text style={styles.removeText}>Cancelar</Text>
                    </TouchableOpacity>
                )}
            </View>


            <Text style={styles.label}>CNPJ</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={cnpj}
                    onChangeText={text => setCnpj(text)}
                    editable={isCnpjEditing}
                />
                {isCnpjEditing ? (
                    <TouchableOpacity onPress={() => handleEditCnpj(false)}>
                        <Text style={styles.editText}>Salvar</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleEditCnpj}>
                        <Text style={styles.editText}>Editar</Text>
                    </TouchableOpacity>
                )}
                {isCnpjEditing && (
                    <TouchableOpacity onPress={() => handleCancelCnpj(false)}>
                        <Text style={styles.removeText}>Cancelar</Text>
                    </TouchableOpacity>
                )}
            </View>

            <Text style={styles.label}>Atividade</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={ramo}
                    onChangeText={text => setRamo(text)}
                    editable={isRamoEditing}
                />
                {isRamoEditing ? (
                    <TouchableOpacity onPress={() => setRamoEditing(false)}>
                        <Text style={styles.editText}>Salvar</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleEditRamo}>
                        <Text style={styles.editText}>Editar</Text>
                    </TouchableOpacity>
                )}
                {isRamoEditing && (
                    <TouchableOpacity onPress={() => handleCancelRamo(false)}>
                        <Text style={styles.removeText}>Cancelar</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20,
        alignSelf: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 15,
    },
    input: {
        width: '60%',
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
        borderRadius: 8,
        elevation: 2,
        fontSize: 18,
    },
    editText: {
        color: 'blue',
        fontSize: 16,
        marginRight: 5
    },
    removeText: {
        color: 'red',
        fontSize: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 55
    },
});

export default MainMenu;