import { Image, SafeAreaView, View, Text, TouchableOpacity, } from 'react-native';
import { styles } from './style';
import { Footer } from "../../components/Footer/index.js";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const logoPath = '../assets/logo_cena_branco_fundo_transp.png'

export function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.containerScreen}>
            <Image source={require(logoPath)} style={styles.logoHomeScreen} />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.textInButton}>CADASTRO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TitheOffertsScreen')}>
                    <Text style={styles.textInButton}>DÍZIMOS E OFERTAS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NoticesEventsScreen')}>
                    <Text style={styles.textInButton}>AVISOS E EVENTOS</Text>
                </TouchableOpacity>
            </View>
            <Footer></Footer>
        </SafeAreaView>
    );
}
