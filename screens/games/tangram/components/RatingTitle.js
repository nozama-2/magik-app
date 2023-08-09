import React from "react";
import { StyleSheet } from 'react-native';
import { Flex, Text } from "native-base";
import { COLORS } from "../../../../constants";

const RatingTitle = ({ rating }) => {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center" mb={5}>
      <Text color={COLORS.black} fontSize="15px" mb={-3}>
        Rating:
      </Text>
      <Text bold fontSize="50px" style={styles.ratingText} color={COLORS.black}>
        {rating}
      </Text>
    </Flex>
  );
};

const styles = StyleSheet.create({
  ratingText: {
    fontFamily: "Poppins-Bold"
  }
})
export default RatingTitle;
