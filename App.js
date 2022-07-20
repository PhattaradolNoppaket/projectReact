import { View, Text } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import User from "./components/User";
import UserNamePassword from "./components/UserNamePassword"

const App = () => {
  return (
    <View>
      {/* <Logo /> */}
      {/* <User /> */}
      <UserNamePassword></UserNamePassword>
    </View>
  );
};

export default App;
