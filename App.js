import { View, Text } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import User from "./components/User";
// import UserNamePassword from "./components/UserNamePassword";
// import AlertComponent from "./components/AlertComponent"
// import ImageWithTextInput from "./components/ImageWithTextInput"
// import ButtonExample from "./components/ButtonExample";
// import Touchable_Example from "./components/Touchable_Example";

import TouchablePractice from "./components/TouchablePractice"
const App = () => {
  return (
    <View style={{flex:1}} >
      {/* <Logo /> */}
      {/* <User /> */}
      {/* <UserNamePassword> */}
      {/* <AlertComponent/> */}
      {/* <ButtonExample/> */}
      {/* <Touchable_Example/> */}
      <TouchablePractice/>
    </View>
  );
};

export default App;
