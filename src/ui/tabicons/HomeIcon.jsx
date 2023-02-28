import React, {Image} from "react-native";
import Icon from '../../../assets/homeicon.png';

export default function HomeIcon({props}) {
    return (
        <Image source={Icon} style={{ width: 30, height: 30 }} />
    )
}