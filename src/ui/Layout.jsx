import {ScrollView, View} from "react-native";

export default function Layout({children, isScrollView = true}) {
    return (
        <View>
            { isScrollView ? <ScrollView>{children}</ScrollView> : children }
        </View>
    );
};