import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold } from "@expo-google-fonts/roboto-slab"

export default function CardCabeleleiro(props){
    return(
        <View style={styles.cardCabeleleiro}>
                    <Image
                        style={styles.cardCabeleleiroFoto}
                        source={require('../../assets/icons/'+ props.cabeleleiro.foto +'.jpg')}
                    />
                    <View style={styles.cardInfos}>
                        <Text style={styles.cardNome}>{props.cabeleleiro.nome}</Text>
                        <View style={styles.cardDataHora}>

                            <View style={styles.cardInfosDataHorario}>
                                <Image
                                    style={styles.imageDados}
                                    source={require('../../assets/icons/Calendario.png')}
                                />
                                <View style={{ width: '12px' }}></View>
                                <Text style={styles.textHorarioData}>{props.cabeleleiro.datas}</Text>
                            </View>

                            <View style={{ height: '6px' }}></View>
                            
                            <View style={styles.cardInfosDataHorario}>
                                <Image
                                    style={styles.imageDados}
                                    source={require('../../assets/icons/Horario.png')}
                                />
                                <View style={{ width: '12px' }}></View>
                                <Text style={styles.textHorarioData}>{props.cabeleleiro.horarios}</Text>
                            </View>
                        </View>

                    </View>
                </View>
    );
}

const styles = StyleSheet.create({
    cardCabeleleiro: {
        width: '100%',
        height: '112px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#3E3B47',
        borderRadius: '10px',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:'16px',
        marginBottom: '16px',
    },
    cardCabeleleiroFoto:{
        width:'72px',
        height:'72px',
        borderRadius:'100px'

    },
    cardInfos: {
        marginLeft: '20px',

    },

    cardNome: {
        color: '#F4EDE8',
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontSize: '18px',
        lineHeight: '24px',
    },
    cardDataHora:{
        marginTop:'12px'
    },
    cardInfosDataHorario: {
        display: 'flex',
        flexDirection: 'row'
    },
    imageDados: {
        width: '14px',
        height: '14px',
    },
    textHorarioData: {
        fontFamily: 'RobotoSlab_400Regular',
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#999591'
    }
})