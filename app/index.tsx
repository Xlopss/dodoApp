import {View} from "react-native";
import NextEvents from "../components/NextEvents";

export default function Index() {
    return (
        <View className={'mocha bg-ctp-base'}
              style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 16,
                  paddingTop: 100
              }}
        >
            <NextEvents/>
        </View>
    );
}
