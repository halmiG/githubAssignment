import React from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import InputForm from "./screens/inputForm/InputForm";
import UserInfo from "./screens/userInfo/UserInfo";

const RootStack = createStackNavigator(
    {
        Input: InputForm,
        Info: UserInfo
    },
    {
        initialRouteName: "Input",
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#489AF9",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitle: null
        }
    }
);

const App = () => {
    return (
        <RootStack />
    )
}

export default App;