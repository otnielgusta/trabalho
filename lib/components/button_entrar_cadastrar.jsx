import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function ButtonConfirm() {
    return (
        <View>
            <TouchableOpacity style={styles.botao}><Text style={styles.textoBotao}>Entrar</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    botao: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px',
        backgroundColor: "#FF9000",
        width: "340px",
        height: "56px",
        borderRadius: "10px"
    },
    textoBotao: {
        fontFamily: "RobotoSlab_500Medium",
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "21px",
        textAlign: "center",
        color: "#312E38"

    },
})