import React from "react"
import { View, Text } from "react-native";

const ErrorSymbol = () => {
    return (
        <View style={{ alignContent: "center", width: 150, height: 100, borderWidth: 5, borderColor: "red", justifyContent: "center", position: "relative", borderRadius: 5, margin: 125 }}>
            <Text style={{ color: "red", fontSize: 25, position: "absolute", left: "20%" }}>ERROR</Text>
        </View>
    )
}

export default ErrorSymbol;