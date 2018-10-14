import React from "react";
import { View, Text, Switch } from "react-native";

interface Props {
    onChange: (state: boolean) => void
    value: boolean
}

const DataSwitch = (props: Props) => (
    <View style={{ flexDirection: "row", margin: 10 }}>
        <Text style={{ margin: 5, color: "#1681FF" }} >Username</Text>
        <Switch
            onValueChange={props.onChange}
            value={props.value}
        />
        <Text style={{ margin: 5, color: "#1681FF" }} >User token</Text>
    </View>
);

export default DataSwitch;