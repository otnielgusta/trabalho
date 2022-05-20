import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold } from "@expo-google-fonts/roboto-slab"

export default function ConfirmaCadastro({navigation}) {
    let [roboto600, roboto500, roboto400] = useFonts({
        RobotoSlab_600SemiBold, RobotoSlab_500Medium, RobotoSlab_400Regular
    })
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={require('../../assets/icons/Vector.png')}
            />
            <View style={{ height: '47px' }}>
            </View>
            <Text style={styles.title}>Cadastramento</Text>
            <Text style={styles.title}>Concluído</Text>
            <View style={{ height: '16px' }}>
            </View>
            <Text style={styles.subTitle}>Agora é só fazer seu login</Text>
            <TouchableOpacity 
                style={styles.botao}
                onPress={() => {
                    navigation.navigate("Login");
                }}
            ><Text style={styles.textoBotao}>Ok</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#312E38',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        width:"53px",
        height:"36px"
    },
    title:{
        fontFamily: "RobotoSlab_500Medium",
        color: "#F4EDE8",
        fontSize: '30px',
        lineHeight: '39px',
        textAlign: 'center',
    },
    subTitle:{
        fontFamily: "RobotoSlab_500Medium",
        color: "#999591",
        fontStyle:'normal',
        fontSize: '14px',
        textAlign: 'center',
        lineHeight:'24px'
    },
    botao: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
        backgroundColor: "#FF9000",
        width: "100px",
        height: "50px",
        borderRadius: "10px"
    },
    textoBotao: {
        fontFamily: "RobotoSlab_500Medium",
        fontStyle: "normal",
        fontSize: "16px",
        textAlign: "center",
        color: "#312E38"

    },
});