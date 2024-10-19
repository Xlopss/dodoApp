import {Image, FlatList, View, Text, TouchableOpacity} from "react-native";
import {events} from "../datas/fixtures";

export default function NextEvents() {

    // @ts-ignore
    //TODO: Tej te TS-ignore
    const sortedEvents = events.filter(event => event.dodoleft >= 0).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const nextEvent = events.filter(event => event.dodoleft >= 0).reduce((prev, curr) => {
        return new Date(prev.date) < new Date(curr.date) ? prev : curr;
    });

    return (
        <View className={'mocha bg-ctp-base'} style={{flex: 1, padding: 16, width: '100%'}}>

            <View style={{margin: 8}}>
                <Text className={'text-ctp-lavender text-2xl'}>Bientôt :</Text>
            </View>

            <View style={{borderWidth: 1, borderColor: '#b4befe', padding: 20, borderRadius: 8, marginBottom: 50}}>
                <Text className={'text-ctp-lavender text-5xl'}>{nextEvent.title}</Text>
                <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text className={'text-ctp-lavender text-xl'}>DANS</Text>
                    <Text
                        className={'text-ctp-lavender text-5xl'}>{nextEvent.dodoleft} {nextEvent.dodoleft < 2 ? 'dodo' : 'dodos'}</Text>
                </View>

            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 16,
                    marginRight: 5
                }}>
                <Text className={'font-bold text-ctp-lavender text-3xl'}>Événements à venir</Text>
                <TouchableOpacity onPress={() => alert('Calendrier touché !')}>
                    <Image
                        source={require('../assets/img/calendar.png')}
                        style={{width: 35, height: 35, tintColor: '#b4befe'}}/>
                </TouchableOpacity>
            </View>

            <FlatList
                data={sortedEvents}
                keyExtractor={item => item.date}
                renderItem={({item}) => (
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 8,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ccc'
                    }}>
                        <Text
                            className={'text-ctp-lavender text-xl'}>{item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title}</Text>
                        <View style={{
                            padding: 5,
                            backgroundColor: '#b4befe',
                            borderRadius: 8
                        }}>
                            <Text
                                className={'text-ctp-base'}>{item.dodoleft} {item.dodoleft < 2 ? 'dodo' : 'dodos'}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}