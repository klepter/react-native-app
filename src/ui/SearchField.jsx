import React, {Text, StyleSheet, View, Image, TouchableHighlight} from "react-native";
import loupe from '../../assets/loupe.png';

export default function SearchField(props) {
    return (
        <TouchableHighlight underlayColor="white">
            <View style={styles.search}>
                <Text style={styles.text}>Какое мероприятие посетим сегодня?</Text>
                <Image source={loupe} style={styles.loupe}/>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    search: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    loupe: {
        width: 22,
        height: 22
    },
    text: {
        color: 'white'
    }
})