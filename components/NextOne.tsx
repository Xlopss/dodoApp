import {View, Text} from "react-native";
import {events} from "../datas/fixtures";

export default function NextOne() {

const nextEvent = events.filter(event => event.dodoleft >= 0).reduce((prev, curr) => {
    return new Date(prev.date) < new Date(curr.date) ? prev : curr;
});

    return (
        <View className={'mocha bg-ctp-base'} style={{flex: 1, padding: 16, width: '100%'}}>
            <View style={{margin: 8}}>
                <Text className={'text-ctp-lavender text-xl'}>Bientôt :</Text>
            </View>

            <View style={{borderWidth: 1, borderColor: '#b4befe', padding: 20, borderRadius: 8,}}>
                <Text className={'text-ctp-lavender text-4xl'}>{nextEvent.title}</Text>
                <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text className={'text-ctp-lavender text-l'}>DANS</Text>
                    <Text
                        className={'text-ctp-lavender text-4xl'}>{nextEvent.dodoleft} {nextEvent.dodoleft < 2 ? 'dodo' : 'dodos'}</Text>
                </View>

            </View>
        </View>
    );
}