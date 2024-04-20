import { View, Linking } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { styles } from './style';
import React from 'react';

export function Footer() {
    return (
        <View style={styles.containerFooter}>
            <Entypo name="instagram" size={30} color="white" style={{ marginHorizontal: "5%" }} onPress={() => Linking.openURL('instagram://user?username=cenarecifee')} />
            <FontAwesome name="whatsapp" size={35} color="white" style={{ marginHorizontal: "5%" }} onPress={() => Linking.openURL('https://wa.me/554797591415?text=Olá pastor Jones, gostaria de conhecer mais da Cena Recife!')} />
        </View>
    );
}
