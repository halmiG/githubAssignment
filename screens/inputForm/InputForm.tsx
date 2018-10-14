import React from "react";
import { View, Button } from "react-native";
import InfoTextBox from "./components/InfoTextBox";
import DataSwitch from "./components/DataSwitch";

interface Props {
    navigation?: any
}

interface State {
    userName: string
    userToken: string
    inputSwitch: boolean
}

export default class InputForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userName: "",
            userToken: "",
            inputSwitch: false
        }
    }

    static navigationOptions = {
        title: "User"
    };

    onNavToInputPress = () => {
        const { userName, userToken, inputSwitch } = this.state;
        this.props.navigation.navigate("Info", {
            userName,
            userToken,
            inputSwitch
        });
    }

    onSwithcChange = (state: boolean) => {
        this.setState({ inputSwitch: state })
    }

    onUserNameType = (text: string) => {
        this.setState({ userName: text })
    }

    onTokenType = (text: string) => {
        this.setState({ userToken: text })
    }

    render() {
        const { userName, userToken, inputSwitch } = this.state;
        return (
            <View
                style={{ flex: 1, alignItems: "flex-start", backgroundColor: "white", justifyContent: "flex-start" }}
            >
                <InfoTextBox
                    title={"Username"}
                    onChange={this.onUserNameType}
                    value={userName}
                />
                <InfoTextBox
                    title={"User token"}
                    onChange={this.onTokenType}
                    value={userToken}
                />
                <DataSwitch
                    onChange={this.onSwithcChange}
                    value={inputSwitch}
                />
                <View style={{ margin: 10, borderWidth: 1, borderColor: "#489AF9", borderRadius: 5, backgroundColor: "#489AF9" }}>
                    <Button color="white" title="Search!" onPress={this.onNavToInputPress} />
                </View>
            </View>
        )
    }
}