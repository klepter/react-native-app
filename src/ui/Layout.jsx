import {ScrollView, View} from "react-native";

export default function Layout({children, isScrollView = true, style}) {
    return (
        <View style={style}>
            { isScrollView ? <ScrollView>{children}</ScrollView> : children }
        </View>
    );
};