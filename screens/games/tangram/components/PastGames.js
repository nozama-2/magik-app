import React, { useState, useEffect } from "react";
import { Box, Text, ScrollView, Center } from "native-base";
import { t } from "react-native-tailwindcss";

import ButtonGame from "./ButtonGame";
import { COLORS } from "../../../../constants";

const PastPuzzles = ({}) => {
  return (
    <Box h="60%">
      <Text
        fontFamily="Poppins-SemiBold"
        mb="10px"
        mt="17px"
        color={COLORS.gray}
        mx="10px"
      >
        Past Games
      </Text>

      <ScrollView showsVerticalScrollIndicator={false} style={[t.hFull]}>
        {Array.from(Array(50).keys()).map((i) => (
          <Center
            w="100%"
            display="flex"
            flexDir="row"
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <ButtonGame
              text={`Game ${2 * i + 1}`}
              lastPlayed={new Date()}
              icon="extension-puzzle-outline"
              id={2 * i + 1}
              onPress={() => console.log("")}
            />
            <ButtonGame
              text={`Game ${2 * i + 2}`}
              lastPlayed={new Date()}
              icon="extension-puzzle-outline"
              id={2 * i + 2}
              onPress={() => console.log("")}
            />
          </Center>
        ))}
      </ScrollView>
    </Box>
  );
};

export default PastPuzzles;
