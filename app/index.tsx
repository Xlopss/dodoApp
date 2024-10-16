import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className={'mocha bg-ctp-base'}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className={'font-bold text-ctp-lavender bg-ctp-base'}>Pouet</Text>
    </View>
  );
}
