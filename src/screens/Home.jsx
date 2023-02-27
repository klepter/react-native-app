import {View, Text} from "react-native";
import {useContext} from "react";
import AuthContext from "../context/context";

export default function Home() {
    const { userType } = useContext(AuthContext);

    return (
        <View>
            <Text>Главная</Text>
            <Text>{userType}</Text>
        </View>
    );
}