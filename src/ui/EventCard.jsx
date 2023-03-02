import {View, Text, Image, StyleSheet, TouchableHighlight} from "react-native";

export default function EventCard({event}) {
    return (
        <TouchableHighlight style={styles.eventCard}>
            <View>
                <Image source={require('../../assets/event-image.jpg')} style={styles.image}/>
                <Text style={styles.title}>{event.title}</Text>
                <View style={styles.cardInfo}>
                    <View>
                        <Text style={styles.fontSize}>{event.data}</Text>
                        <Text style={styles.fontSize}>{event.address}</Text>
                    </View>
                    <View style={styles.eventType}>
                        <Text style={[styles.fontSize, {paddingHorizontal: 5, paddingVertical: 2}]}>{event.type}</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    eventCard: {
        width: '47%',
        alignItems: "center",
        marginBottom: 15
    },
    image: {
        width: 170,
        height: 160,
        borderRadius: 15,
        marginBottom: 5
    },
    fontSize: {
        fontSize: 11
    },
    cardInfo: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    eventType: {
        borderWidth: 1, borderRadius: 15, borderColor: '#233DDF'
    },
    title: {
        fontSize: 14,
        marginBottom: 3,
        color: '#233DDF',
        fontWeight: "bold"
    }
});