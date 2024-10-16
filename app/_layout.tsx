import {Stack} from "expo-router";
import "../tailwind.css";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: 'dodoApp',
                headerShown: false
            }}/>
        </Stack>
    );
}
