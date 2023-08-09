import React from "react";
import { Box, Select, CheckIcon } from "native-base";
import ToggleButton from "./ToggleButton";
import { COLORS } from "../../../constants";

const Filter = ({
  isPurchased,
  setIsPurchased,
  gameCategory,
  setGameCategory,
}) => {
  return (
    <Box
      mt={3}
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      alignContent="center"
    >
      <ToggleButton isOn={isPurchased} setIsOn={setIsPurchased} />

      <Select
        selectedValue={gameCategory}
        width="120px"
        height="30px"
        borderRadius={20}
        borderColor={COLORS.darkgray}
        opacity={0.8}
        accessibilityLabel="Choose Service"
        placeholder="Choose category"
        _selectedItem={{
          endIcon: <CheckIcon position="absolute" right="0" size="5" />,
        }}
        ml={1}
        onValueChange={(itemValue) => setGameCategory(itemValue)}
      >
        <Select.Item label="All" value="all" />
        <Select.Item label="Logic" value="logic" />
        <Select.Item label="Math" value="math" />
        <Select.Item label="Multiplayer" value="multi" />
      </Select>
    </Box>
  );
};

export default Filter;
