import { Stack } from "expo-router";
import "../tailwind.css";
import {Image, Text, View} from "react-native";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: () => (
                    <View style={{ flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Image source={require('../assets/img/logo.png')} style={{width: 24, height: 24, tintColor:'#b4befe', marginRight: 10}}/>
                        <Text style={{ color: '#cba6f7', fontSize: 25}}>dodoApp</Text>

                    </View>
                ),
                headerShown: true,
                headerTransparent: true,
                headerTintColor: '#cba6f7',
                navigationBarColor: '#1e1e2e',
                //TODO: Faire en sorte que la navbar change en fonction du thème
            }}/>
        </Stack>
    );
}