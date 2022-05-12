import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold } from "@expo-google-fonts/roboto-slab"
export default function Login() {
    let [roboto600, roboto500, roboto400] = useFonts({
        RobotoSlab_600SemiBold, RobotoSlab_500Medium, RobotoSlab_400Regular
    })
    return (
        <View>
            <View>
                <Text style={styles.title}>Faça seu login</Text>
            </View>
            <View style={styles.inputs}>

                <View style={styles.inputContainer}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icons/E-mail.png')}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                    />
                </View>
                <View style={{ height: '10px' }}>
                </View>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icons/Senha.png')}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Senha"

                        style={styles.input}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.botao}><Text style={styles.textoBotao}>Entrar</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputs: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        paddingLeft: '18px',
        backgroundColor: "#232129",
        borderRadius: "10px",
        borderRadius: '5px',
        width: "340px",
        height: "56px",
    },
    input: {
        marginLeft: '15px',
        fontFamily: "RobotoSlab_500Medium",
        color: '#666360',
        fontSize: "16px",
        lineHeight: "21px"
    },
    title: {
        fontFamily: "RobotoSlab_500Medium",
        color: "#F4EDE8",
        fontSize: '24px',
        lineHeight: '32px',
        textAlign: 'center',
        marginBottom: '24px'

    },
    icon: {
        width: '20px',
        height: '18px'
    },
    botao: {
        display:'flex',
        justifyContent:'center',
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

    }
});