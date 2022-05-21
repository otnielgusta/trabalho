import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold } from "@expo-google-fonts/roboto-slab"
import CardCabeleleiro from "../components/card_cabeleleiro";

export default function HomePage() {
    let [roboto600, roboto500, roboto400] = useFonts({
        RobotoSlab_600SemiBold, RobotoSlab_500Medium, RobotoSlab_400Regular
    })

    const cabeleleiros = [
        {
            nome:"Otniel Silva",
            foto:"Foto",
            datas: "Segunda à Sexta",
            horarios:"8h às 18:h"
        },{
            nome:"Otniel Silva",
            foto:"Foto",
            datas: "Segunda à Sexta",
            horarios:"8h às 18:h"
        },{
            nome:"Otniel Silva",
            foto:"Foto",
            datas: "Segunda à Sexta",
            horarios:"8h às 18:h"
        },
        {
            nome:"Otniel Silva",
            foto:"Foto",
            datas: "Segunda à Sexta",
            horarios:"8h às 18:h"
        },{
            nome:"Otniel Silva",
            foto:"Foto",
            datas: "Segunda à Sexta",
            horarios:"8h às 18:h"
        },{
            nome:"Otniel Silva",
            foto:"Foto",
            datas: "Segunda à Sexta",
            horarios:"8h às 18:h"
        },
        {
            nome:"Otniel Silva",
            foto:"Foto",
            datas: "Segunda à Sexta",
            horarios:"8h às 18:h"
        },{
            nome:"Otniel Silva",
            foto:"Foto",
            datas: "Segunda à Sexta",
            horarios:"8h às 18:h"
        },{
            nome:"Otniel Silva",
            foto:"Foto",
            datas: "Segunda à Sexta",
            horarios:"8h às 18:h"
        },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.headerBemVindo}>Bem vindo,</Text>
                    <Text style={styles.headerNome}>Tiago Luchtenberg</Text>
                </View>
                <View style={styles.headerRight}>
                    <Image
                        style={styles.headerFoto}
                        source={require('../../assets/icons/Foto.jpg')}
                    />
                </View>

            </View>
            <View style={styles.corpo}>
                <Text style={styles.title}>Cabeleleiros</Text>
                <View style={styles.corpoCabeleleiros}>

                {
                    cabeleleiros.map((cabeleleiro)=>{
                        return <CardCabeleleiro cabeleleiro={cabeleleiro} />
                    })
                }

                </View>

                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#312E38',
        width: '100%',
    },
    header: {
        height: "136px",
        backgroundColor: "#28262E",
        display: 'flex',
        paddingLeft: '24px',
        paddingRight: '24px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerBemVindo: {
        fontFamily: 'RobotoSlab_400Regular',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '28px',
        color: '#999591',
    },
    headerNome: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '28px',
        color: '#FF9000',
    },
    headerFoto: {
        width: '56px',
        height: '56px',
        borderRadius: '100px'
    },
    corpo: {
        flex: 1,
        paddingTop: '32px',
        paddingLeft: '24px',
        paddingRight: '24px',
    },
    title: {
        fontFamily: 'RobotoSlab_500Medium',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '25px',
        lineHeight: '33px',
        color: '#F4EDE8',
        marginBottom: '24px'
    },
    corpoCabeleleiros:{
        display:'flex',
        
    }
   

});