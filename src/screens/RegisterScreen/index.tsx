import { TouchableOpacity, TextInput, Text, Image, ScrollView, View, SafeAreaView } from "react-native";
import React, { useState } from 'react';
import { styles } from './style';
import { Footer } from "../../components/Footer";
// import { Picker } from '@react-native-picker/picker';

export function RegisterScreen() {
    const [selectedValue, setSelectedValue] = useState("Você é mebro ou visitante?");
    return (
        <SafeAreaView style={styles.containerScreen}>
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <Image
                    source={require('../../../assets/logo_cena_branco_fundo_transp.png')}
                    style={styles.logoScreens}
                />
                <Text style={styles.titleText}>CADASTRO</Text>
                <View style={styles.buttonsContainer}>
                    <TextInput style={styles.textInput} placeholder="Nome completo" />
                    <TextInput style={styles.textInput} placeholder="Endereço" />
                    <TextInput style={styles.textInput} placeholder="Telefone" />
                    {/* <Picker
                        selectedValue={selectedValue}
                        style={styles.textInput}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Membro" value="membro" />
                        <Picker.Item label="Visitante" value="visitante" />
                    </Picker> */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textInButton}>REGISTRAR</Text>
                    </TouchableOpacity>
                </View>
                <Footer></Footer>
            </ScrollView>
        </SafeAreaView>

    )
}