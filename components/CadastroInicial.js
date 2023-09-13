import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';

function CadastroInicial() {
    const [nomeEstabelecimento, setNomeEstabelecimento] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [logotipo, setLogotipo] = useState(null); // Para armazenar a imagem do logotipo
    const [ramo, setRamo] = useState('');

    const handleImagePicker = () => {
        const options = {
            title: 'Selecionar Imagem',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('Seleção de imagem cancelada');
            } else if (response.error) {
                console.error('Erro ao selecionar imagem:', response.error);
            } else {
                // A imagem foi selecionada com sucesso
                const uri = response.uri;
                setLogotipo(uri);
            }
        });
    };


    const handleCadastro = () => {
        
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
                <Text style={styles.label}>Ramo:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o ramo do estabelecimento"
                    value={ramo}
                    onChangeText={(text) => setRamo(text)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Logotipo:</Text>
                <Button title="Selecionar Imagem" onPress={handleImagePicker} />
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
    logoImage: {
        width: 100,
        height: 100,
        marginTop: 8,
    },
    formGroupCadastrar: {
        marginTop: 16,
    },
    button: {
        backgroundColor: 'blue', // Cor do botão
        color: 'white', // Cor do texto do botão
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 8,
        textAlign: 'center',
    },
});

export default CadastroInicial;
