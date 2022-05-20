import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold } from "@expo-google-fonts/roboto-slab"
import ButtonConfirm from "../components/button_entrar_cadastrar";

export default function Cadastro({ navigation }) {
    let [roboto600, roboto500, roboto400] = useFonts({
        RobotoSlab_600SemiBold, RobotoSlab_500Medium, RobotoSlab_400Regular
    })
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/icons/Logo.png')}
                />
            </View>

            <View>
                <Text style={styles.title}>Crie sua conta</Text>
            </View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icons/Nome.png')}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                    />
                </View>

                <View style={{ height: '10px' }}>
                </View>

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
            <ButtonConfirm
                texto="Cadastrar" 
                onPress={() => {
                    navigation.navigate("ConfirmaCadastro");
                }} />
            
            <View style={styles.footer}>
                <View style={styles.containerFooter} >
                    <TouchableOpacity
                        style={styles.containerFooter}
                        onPress={() => {
                            navigation.pop();
                        }}

                    >

                        <Image
                            style={styles.criar}
                            source={require('../../assets/icons/Voltar.png')}
                        />
                        <View style={{ width: '20px' }}>

                        </View>
                        <Text style={styles.voltar}>
                            Voltar para o login
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

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

    containerLogo: {
        alignItems: 'center',
        marginBottom: "64px",
    },
    logo: {
        width: "206px",
        height: "120px"
    },
    footer: {
        width: '100%',
        height: '60px',
        position: 'fixed',
        bottom: 0,

    },
    containerFooter: {
        borderTopWidth: '1px',
        borderTopColor: "#232129",
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    criar: {
        width: '20px',
        height: '20px',

    },
    voltar: {
        fontFamily: 'RobotoSlab_400Regular',
        fontStyle: "normal",
        fontSize: '14px',
        lineHeight: '18px',
        textAlign: 'center',

        color: "#F4EDE8",
    }
});