import React from "react";
import { View, Text, TextInput } from "react-native";

interface Props {
    onChange: (text: string) => void
    value: string
    title: string
}

const textInputStyle = {
    height: 40,
    width: 200,
    backgroundColor: "white",
    borderRadius: 5,
    margin: 10,
    color: "#489AF9",
    borderWidth: 1,
    borderColor: "#489AF9"
}

const InfoTextBox = (props: Props) => (
    <View>
        <Text style={{ margin: 10, marginBottom: 0, fontSize: 20, color: "#1681FF" }}>{props.title}</Text>
        <TextInput
            style={textInputStyle}
            onChangeText={props.onChange}
            value={props.value}
            autoCapitalize={"none"}
        />
    </View>
);

export default InfoTextBox;