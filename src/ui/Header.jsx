import {StyleSheet, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Constants from "expo-constants/src/Constants";

export default function Header({children}) {
    return (
        <View style={styles.header}>
            <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 1, y: 1}}
                locations={[0, 0.89]}
                colors={["#233DFF", "#7C2AE8"]}
                style={styles.linearGradient}
            >
                {children}
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: Constants.statusBarHeight,
        height: 55,
    },
    linearGradient: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
});