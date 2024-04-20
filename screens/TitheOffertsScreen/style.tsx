import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: '#0F0F0F',
        alignItems: 'center', // Alinhamento horizontal
        justifyContent: 'space-between', // Alinhamento vertical
    },
    logoScreens: {
        width: 150,
        height: 150,
        marginTop: "20%",
    },
    textsInfor: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: '900',
    },
    informationText: {
        color: '#AAAAAA',
        fontStyle: 'italic',
        fontSize: 16,
    },
    subTitleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        margin: "3%",
    },
})