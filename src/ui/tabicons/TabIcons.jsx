import React, {Image} from "react-native";
import HomeIcon1 from '../../../assets/homeIcon1.png';
import BellIcon1 from '../../../assets/bellIcon1.png';
import CalendarIcon1 from '../../../assets/calendarIcon1.png';
import ProfileIcon1 from '../../../assets/profileIcon1.png';
import HomeIcon2 from '../../../assets/homeIcon2.png';
import BellIcon2 from '../../../assets/bellIcon2.png';
import CalendarIcon2 from '../../../assets/calendarIcon2.png';
import ProfileIcon2 from '../../../assets/profileIcon2.png';

export default function TabIcons({name, focused}) {
    let Icon1;
    if (name === 'Главная') {
        Icon1 = (focused ? HomeIcon1 : HomeIcon2);
    }
    if (name === "Подписки") {
        Icon1 = (focused ? BellIcon1 : BellIcon2);
    }
    if (name === 'Записи') {
        Icon1 = (focused ? CalendarIcon1 : CalendarIcon2);
    }
    if (name === 'Профиль') {
        Icon1 = (focused ? ProfileIcon1 : ProfileIcon2);
    }
    return (
        <Image source={Icon1} style={{width: 30, height: 30}}/>
    )
}