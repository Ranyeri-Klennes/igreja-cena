import { SafeAreaView, Image, Text, View } from "react-native";
import { Footer } from "../../components/Footer";
import { Feather } from '@expo/vector-icons';
import React from "react";
import { styles } from './style';

export function TitheOffertsScreen() {
    return (
        <SafeAreaView style={styles.containerScreen}>
            <Image source={require('../../../assets/logo_cena_branco_fundo_transp.png')} style={styles.logoScreens} />
            <View style={styles.textsInfor}>
                <Text style={styles.titleText}>DÍZIMOS</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: "90%", justifyContent: 'space-between' }}>
                    <Text style={styles.informationText}>Chave Pix CNPJ: 00.000.000/0000-00</Text>
                    <Feather name="copy" size={24} color="#AAAAAA" />
                </View>
            </View>
            <View style={styles.textsInfor}>
                <Text style={styles.titleText}>OFERTAS</Text>
                <Text style={styles.subTitleText}>Casados para sempre:</Text>
                <Text style={styles.informationText}>Chave Pix CNPJ: 00.000.000/0000-00</Text>
                <Text style={styles.subTitleText}>Missionários:</Text>
                <Text style={styles.informationText}>Chave Pix CNPJ: 00.000.000/0000-00</Text>
            </View>
            <Footer></Footer>
        </SafeAreaView>
    )
}