import {contextProvider} from "./src/context/contextProvider";
import AuthContext from "./src/context/context";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/screens/Home";
import Followings from "./src/screens/user/Followings";
import UserEvents from "./src/screens/user/UserEvents";
import UserProfile from "./src/screens/user/UserProfile";
import CreateEvent from "./src/screens/organizer/CreateEvent";
import OrganizerEvents from "./src/screens/organizer/OrganizerEvents";
import OrganizerProfile from "./src/screens/organizer/OrganizerProfile";
import HomeIcon from "./src/ui/tabicons/HomeIcon";

export default function App() {
    const {user, accessToken, loading, login, logout, refresh, userType} = contextProvider();
    const TabNavigator = createBottomTabNavigator();

    return (
        <AuthContext.Provider value={
            {user, accessToken, loading, login, logout, refresh, userType}
        }>
            <NavigationContainer>
                <TabNavigator.Navigator screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        if(route.name === 'Главная') {
                            return <HomeIcon />
                        }
                    },
                    headerShown: false,
                    tabBarOptions: {
                        showIcon: true
                    }
                })
                }>
                    <TabNavigator.Screen name="Главная" component={Home}/>
                    {
                        (userType === 'user') ?
                            <>
                                <TabNavigator.Screen name="Подписки" component={Followings}/>
                                <TabNavigator.Screen name="Записи" component={UserEvents}/>
                                <TabNavigator.Screen name="Профиль" component={UserProfile}/>
                            </> :
                            <>
                                <TabNavigator.Screen name="Создать" component={CreateEvent}/>
                                <TabNavigator.Screen name="Ваши мероприятия" component={OrganizerEvents}/>
                                <TabNavigator.Screen name="Профиль" component={OrganizerProfile}/>
                            </>
                    }
                </TabNavigator.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
