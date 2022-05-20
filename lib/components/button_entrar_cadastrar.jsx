import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold } from "@expo-google-fonts/roboto-slab"


export default function ButtonConfirm(props) {
    let [roboto600, roboto500, roboto400] = useFonts({
        RobotoSlab_600SemiBold, RobotoSlab_500Medium, RobotoSlab_400Regular
    })
    return (
        <View>
            <TouchableOpacity 
                style={styles.botao}
                onPress={props.onPress}
            ><Text style={styles.textoBotao}>{props.texto}</Text></TouchableOpacity>
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