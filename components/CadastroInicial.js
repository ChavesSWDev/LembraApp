import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';



function CadastroInicial() {
    const [nomeEstabelecimento, setNomeEstabelecimento] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [logotipo, setLogotipo] = useState(null); // Para armazenar a imagem do logotipo
    const [ramo, setRamo] = useState('');
    const [selectedService, setSelectedService] = useState('');

    const navigation = useNavigation();

    const serviceOptions = [
        'Salão de Beleza',
        'Oficina Mecânica',
        'Barbeiro',
        // Add more options as needed
    ];

    const handleCadastro = () => {
        navigation.navigate('MainMenu')
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Nome do Estabelecimento:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do estabelecimento"
                    value={nomeEstabelecimento}
                    onChangeText={(text) => setNomeEstabelecimento(text)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>CNPJ:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o CNPJ"
                    value={cnpj}
                    onChangeText={(text) => setCnpj(text)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Serviços:</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedService}
                        onValueChange={(itemValue) => setSelectedService(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Selecione um serviço" value="" />
                        {serviceOptions.map((service, index) => (
                            <Picker.Item key={index} label={service} value={service} />
                        ))}
                    </Picker>
                </View>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Logotipo:</Text>
                <Button title="Selecionar Imagem" />
                {logotipo && <Image source={{ uri: logotipo }} style={styles.logoImage} />}
            </View>

            <View style={styles.formGroupCadastrar}>
                <Button title="Cadastrar" onPress={handleCadastro} style={styles.button} />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    formGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        fontSize: 16,
    },
    pickerContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        height: 55,
    },
    picker: {
        height: 40,
    },
    logoImage: {
        width: 100,
        height: 100,
        marginTop: 8,
    },
    formGroupCadastrar: {
        marginTop: 16,
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 8,
        textAlign: 'center',
    },
});

export default CadastroInicial;
