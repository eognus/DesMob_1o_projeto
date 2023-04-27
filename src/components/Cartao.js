import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function CartaoFilme({filme}){

    constUrl = '';
    const imgUrl = baseUrl + filme.poster.data.attributes;
    

    return(
        <View style={styles.viewCartao}>
            <Image style={styles.imgFilme} source={{ uri: imgUrl } }/>
            <Text style={styles.txtTitulo}>{filme.titulo}</Text>
            <Text sytle={styles.sinopse}>{filme.sinopse}</Text>
            <TouchableOpacity style={styles.btncomprar}>
                <Text>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}
