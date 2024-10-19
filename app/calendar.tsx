import {View, Text} from "react-native";
import React from "react";

export default function Calendar() {
    return (
        <View className={'mocha bg-ctp-base'}
              style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 16,
                  paddingTop: 70
              }}
        >
            <Text style={{ fontSize: 24, color: '#cba6f7' }}>Calendar Page</Text>
        </View>
    );
}
