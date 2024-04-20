import { SafeAreaView, Image, Text, View } from "react-native";
import { styles } from './style';
import { Footer } from "../../components/Footer/index.js";
import React from "react";

export function NoticesEventsScreen() {
    return (
        <SafeAreaView style={styles.containerScreen}>
            <Image source={require('../assets/logo_cena_branco_fundo_transp.png')} style={styles.logoScreens} />
            <View>
                <Text style={styles.titleText}>AVISOS</Text>
                <Text style={styles.subTitleText}>Aviso um</Text>
                <Text style={styles.informationText}>O evento será às 00:00 horas na igreja.</Text>
                <Text style={styles.subTitleText}>Aviso dois</Text>
                <Text style={styles.informationText}>O evento será às 00:00 horas na igreja.</Text>
            </View>
            <View>
                <Text style={styles.titleText}>EVENTOS</Text>
                <Text style={styles.subTitleText}>Evento um</Text>
                <Text style={styles.informationText}>O evento será às 00:00 horas na igreja.</Text>
                <Text style={styles.subTitleText}>Evento dois</Text>
                <Text style={styles.informationText}>O evento será às 00:00 horas na igreja.</Text>
            </View>
            <Footer></Footer>
        </SafeAreaView>
    )
}