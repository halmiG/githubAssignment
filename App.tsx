import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as network from "./network/network"
import { UserInfo } from "./network/network"

interface Props {

}

interface State {
  text: string
  userInfo: UserInfo
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: "",
      userInfo: {
        login: ""
      }
    }
  }

  componentDidMount() {
    const userInfo = network.getUserInfo()
    console.log("mount", userInfo)
    this.setState({ userInfo: userInfo })
  }

  onButtonPressed = () => {
    // network.getRoot();
    // network.getUserInfo()
    this.setState({ text: this.state.text === "" ? "Gomb!" : "" });
  }

  render() {
    const { userInfo } = this.state
    console.log("info", userInfo)
    return (
      <View style={styles.container}>
        <Text>Hello GVilág!</Text>
        <Text>{userInfo.name}</Text>
        <Text>{userInfo.login}</Text>
        <Text>{this.state.text}</Text>
        <Button title="NyomdMEG" onPress={this.onButtonPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
