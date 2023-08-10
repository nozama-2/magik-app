import React from "react";
import { Button } from "native-base";
import { COLORS } from "../../../constants";
import { TouchableOpacity } from "react-native";

const ToggleButton = ({ isOn, setIsOn }) => {
  return (
    <Button
      // w="100px"
      h="30px"
      borderRadius={20}
      py="3px"
      _text={{
        fontSize: "10px",
        margin: 0,
        color: COLORS.black,
        opacity: 1,
      }}
      borderWidth={1}
      borderColor={COLORS.darkgray}
      backgroundColor="transparent"
      opacity={0.8}
      onPress={() => {
        setIsOn(!isOn);
      }}
      _pressed={{ opacity: 0.5 }}
    >
      {isOn ? "Purchased" : "Not Purchased"}
    </Button>
  );
};

export default ToggleButton;
