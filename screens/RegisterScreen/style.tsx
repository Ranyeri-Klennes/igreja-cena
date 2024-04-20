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
    containerScroll: {
        flex: 2,
        backgroundColor: '#993F3F',
        justifyContent: 'center', // Alinhamento vertical
        alignItems: 'center', // Alinhamento horizontal
        width: "100%",
        height: "100%",
    },
    logoScreens: {
        width: 150,
        height: 150,
        marginTop: "20%",
    },
    buttonsContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: '900',
    },
    textInput: {
        color: '#808080',
        backgroundColor: '#EEEEEE',
        padding: "3%",
        width: "80%",
        borderRadius: 10,
        margin: "5%",
    },
    textInButton: {
        color: '#4E4E4E',
        fontSize: 16,
        fontWeight: '500',
    },
    button: {
        backgroundColor: '#EEEEEE',
        padding: "4%",
        width: "60%",
        margin: "5%",
        alignItems: 'center',
        borderRadius: 10,
    },
})