import React from "react"
import { View, Text, Button, TextInput, Image } from "react-native";
import * as network from "../../network/network";
import ErrorSymbol from "./Error";

interface Props {
    navigation?: any
}

interface State {
    userInfos: network.UserInfo
    error: boolean
}

export default class UserInfo extends React.Component<Props, State> {

    static navigationOptions = {
        title: "Information",
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            userInfos: network.defaultUserInfo,
            error: false
        }
    }
    componentDidMount() {
        const inputSwitch = this.props.navigation.getParam("inputSwitch");
        const token = inputSwitch ? this.props.navigation.getParam("userToken", "") : null;
        const userName = inputSwitch ? null : this.props.navigation.getParam("userName", "");
        network.getUserInfo(token, userName, (error: string | null, resp: network.UserInfo) => {
            if (error) {
                this.setState({ error: true });
                console.log(error);
            } else {
                this.setState({ userInfos: resp, error: false });
            }
        });
    }

    renderInfos = () => {
        const { userInfos } = this.state;
        enum titles {
            name = "Name",
            login = "Username",
            company = "Company",
            email = "Email",
            html_url = "Url",
            bio = "Bio"
        }

        return (
            Object.keys(userInfos).map((info) => {
                if (info === "avatar_url") {
                    return (
                        <Image key={info} style={{ width: 200, height: 200, margin: 10 }} source={{ uri: userInfos[info] }} />)
                }
                return (
                    <View key={info} style={{ flexDirection: "column", margin: 10 }}>
                        <Text style={{ fontSize: 20, marginBottom: 5, color: "#1681FF" }}>{titles[info]}</Text>
                        <Text style={{ fontSize: 15, color: "#489AF9" }}>{userInfos[info]}</Text>
                    </View>
                )
            })
        )
    }

    render() {
        const { error } = this.state;
        return (
            <View style={{ backgroundColor: "white", height: "100%" }}>
                {error && <ErrorSymbol /> ||
                    this.renderInfos()}
            </View>
        )
    }
}