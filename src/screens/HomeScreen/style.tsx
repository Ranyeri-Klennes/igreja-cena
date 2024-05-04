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
    logoHomeScreen: {
        width: "45%",
        height: "20%",
        marginTop: "30%",
        marginBottom: "5%",
    },
    button: {
        backgroundColor: '#EEEEEE',
        padding: "4%",
        width: "60%",
        margin: "5%",
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonsContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInButton: {
        color: '#4E4E4E',
        fontWeight: 'bold',
    },
})