import React from "react";
import { Box, Button } from "native-base";
import { COLORS } from "../../../constants";
import { TouchableOpacity } from "react-native";

const ToggleButton = ({ isOn, setIsOn }) => {
  return (
    <Box display="flex" flexDir="row">
      <Button
        h="30px"
        borderRadius={20}
        py="3px"
        mr="1"
        _text={{
          fontSize: "10px",
          margin: 0,
          color: COLORS.black,
          opacity: 1,
        }}
        borderWidth={1}
        borderColor={isOn ? COLORS.green : COLORS.darkgray}
        backgroundColor={isOn ? COLORS.green : "transparent"}
        opacity={0.8}
        onPress={() => {
          setIsOn(true);
        }}
        _pressed={{ opacity: 0.5 }}
      >
        Purchased
      </Button>
      <Button
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
        borderColor={!isOn ? COLORS.green : COLORS.darkgray}
        backgroundColor={!isOn ? COLORS.green : "transparent"}
        opacity={0.8}
        onPress={() => {
          setIsOn(false);
        }}
        _pressed={{ opacity: 0.5 }}
      >
        Not Purchased
      </Button>
    </Box>
  );
};

export default ToggleButton;
