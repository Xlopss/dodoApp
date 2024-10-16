import { Stack } from "expo-router";
import "../tailwind.css";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: 'dodoApp',
                // headerShown: true,
                headerTransparent: true,
                headerTintColor: '#b4befe',
                navigationBarColor: '#1e1e2e',
                //TODO: Faire en sorte que ça change en fonction du thème
            }}/>
        </Stack>
    );
}