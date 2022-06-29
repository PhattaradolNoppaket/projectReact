import { View, TextInput ,Button} from "react-native";
import React from "react";

const Textinputexample = () => {
  return (
    <View style={{ padding: 50 }}>
      <view
        style={{
          flex: 1,
          flexDirection: "row",
          justityContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Course Goal"
          style={{
            width: "80%",
            boardColor: "black",
            boardWidth: 1,
            padding: 10,
          }}
        />
        <Button  title="ADD"/>
      </view>
    </View>
  );
};

export default Textinputexample;
