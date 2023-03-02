import {useCallback, useContext, useEffect, useState} from "react";
import AuthContext from "../context/context";
import Layout from "../ui/Layout";
import Header from "../ui/Header";
import SearchField from "../ui/SearchField";
import {useHttp} from "../hooks/useHttp";
import {View, Text, StyleSheet} from "react-native";
import EventCard from "../ui/EventCard";

export default function Home() {
    const {userType} = useContext(AuthContext);
    const {loading, request} = useHttp();
    const [events, setEvents] = useState([
        {
            title: 'Мастер-класс по сплочению коллектива',
            address: 'ФЭИ',
            data: '10.02 14:00',
            type: 'Мастер-класс',
            description: '',
            organizer: '',
            photo: 'event-image.jpg'
        },
        {
            title: 'Мастер-класс по сплочению коллектива',
            address: 'ФЭИ',
            data: '10.02 14:00',
            type: 'Мастер-класс',
            description: '',
            organizer: '',
            photo: 'event-image.jpg'
        },
        {
            title: 'Мастер-класс по сплочению коллектива',
            address: 'ФЭИ',
            data: '10.02 14:00',
            type: 'Мастер-класс',
            description: '',
            organizer: '',
            photo: 'event-image.jpg'
        },
        {
            title: 'Мастер-класс по сплочению коллектива',
            address: 'ФЭИ',
            data: '10.02 14:00',
            type: 'Мастер-класс',
            description: '',
            organizer: '',
            photo: 'event-image.jpg'
        },
        {
            title: 'Мастер-класс по сплочению коллектива',
            address: 'ФЭИ',
            data: '10.02 14:00',
            type: 'Мастер-класс',
            description: '',
            organizer: '',
            photo: 'event-image.jpg'
        },
        {
            title: 'Мастер-класс по сплочению коллектива',
            address: 'ФЭИ',
            data: '10.02 14:00',
            type: 'Мастер-класс',
            description: '',
            organizer: '',
            photo: 'event-image.jpg'
        },
        {
            title: 'Мастер-класс по сплочению коллектива',
            address: 'ФЭИ',
            data: '10.02 14:00',
            type: 'Мастер-класс',
            description: '',
            organizer: '',
            photo: 'event-image.jpg'
        },
        {
            title: 'Мастер-класс по сплочению коллектива',
            address: 'ФЭИ',
            data: '10.02 14:00',
            type: 'Мастер-класс',
            description: '',
            organizer: '',
            photo: 'event-image.jpg'
        },
    ]);

    const fetchEvents = useCallback(async () => {
        try {
            const fetched = await request('/api/events', 'GET');
            setEvents(fetched);
        } catch (e) {
        }
    }, [request])

    // useEffect(() => {
    //     fetchEvents()
    // }, [fetchEvents])

    return (
        <>
            <Header>
                <SearchField/>
            </Header>
            <Layout style={{marginBottom: 80}}>
                {/*<View style={[styles.homeCard, styles.cardGap, styles.borderBottom]}>*/}
                {/*    <Text style={styles.cardTitle}>Важные мероприятия</Text>*/}
                {/*</View>*/}
                <View style={[styles.homeCard, styles.borderTop]}>
                    <Text style={styles.cardTitle}>Афиша мероприятий</Text>
                    <View style={styles.afisha}>
                        {
                            (events.length === 0) ?
                                <Text>На данный момент нет ни одного мероприятия</Text> :
                                events.map((event) => {
                                    return (
                                        <EventCard event={event} key={event.id}/>
                                    )
                                })
                        }
                    </View>
                </View>
            </Layout>
        </>

    );
}

const styles = StyleSheet.create({
    homeCard: {
        backgroundColor: 'white',
        padding: 15,
    },
    cardGap: {
        marginBottom: 10
    },
    borderBottom: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    borderTop: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    cardTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 14
    },
    afisha: {
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-between'
    },
    stickyHeader: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
    }
})