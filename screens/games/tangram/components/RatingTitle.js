import React from "react";
import { Flex, Text } from "native-base";
import { COLORS } from "../../../../constants";

const RatingTitle = ({ rating }) => {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center" mb={5}>
      <Text color={COLORS.primary} fontSize="15px" mb={-3}>
        Rating:
      </Text>
      <Text bold fontSize="50px" color={COLORS.primary}>
        {rating}
      </Text>
    </Flex>
  );
};

export default RatingTitle;
