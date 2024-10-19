import { Stack } from "expo-router";
import "../tailwind.css";
import {Header} from "../components/Header";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerTitle:()=><Header/>,
            headerShown: true,
            headerTransparent: true,
            headerTintColor: '#cba6f7',
            navigationBarColor: '#1e1e2e',}}
        //TODO: Faire en sorte que la navbar change en fonction du thème
        >
            <Stack.Screen name="index" options={{title: 'Home'}}/>
            <Stack.Screen name="calendar" options={{title:'Calendar'}}/>
        </Stack>
    );
}