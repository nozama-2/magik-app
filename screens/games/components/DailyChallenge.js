import React from "react";

import { Box, Text, Progress } from "native-base";
import { COLORS } from "../../../constants";

const DailyChallenge = ({ challengesCompleted, totalChallenges }) => {
  return (
    <Box

      bg={{
        linearGradient: {
          colors: [COLORS.tomatoGradientLeft, COLORS.tomatoGradientRight],
          start: [0, 1],
          end: [1, 0],
        },
      }}


      width="100%"
      height="120px"
      backgroundColor={COLORS.white}
      borderRadius={20}
      shadow="1"
      mt={3}
      px={5}
      py={2}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      {/* Header */}
      <Text fontSize={25} bold color={COLORS.white} mb={1}>
        Daily Challenges
      </Text>

      {/* Progress bar */}
      <Progress
        value={(challengesCompleted / totalChallenges) * 100}
        _filledTrack={{ bg: COLORS.white }}
        backgroundColor={COLORS.gray}
      />

      {/* Fraction of games */}
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize={18} mx={0.5} style={{color: COLORS.white, fontFamily: "Poppins-Bold"}}>
          {challengesCompleted}
        </Text>
        <Text fontSize={18} mx={0.5} style={{color: COLORS.white, fontFamily: "Poppins-Bold"}}>
          /
        </Text>
        <Text fontSize={18} style={{color: COLORS.white, fontFamily: "Poppins-Bold"}}>{totalChallenges} Games</Text>
      </Box>
    </Box>
  );
};

export default DailyChallenge;
