import {Image, FlatList, View, Text, TouchableOpacity} from "react-native";
import {events} from "../datas/fixtures";

export default function NextEvents() {

    // @ts-ignore
    //TODO: Tej te TS-ignore
const sortedEvents = events.filter(event => event.dodoleft >= 0).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return (
        <View className={'mocha bg-ctp-base'} style={{flex: 1, padding: 16, width: '100%'}}>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 16,
                    marginRight: 5
                }}>
                <Text className={'font-bold text-ctp-lavender text-2xl'}>Événements à venir</Text>
                <TouchableOpacity onPress={() => alert('Calendrier touché !')}>
                    <Image
                        source={require('../assets/img/calendar.png')}
                        style={{width: 30, height: 30, tintColor: '#b4befe'}}/>
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
                        <Text className={'text-ctp-lavender text-xl'}>{item.title}</Text>
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