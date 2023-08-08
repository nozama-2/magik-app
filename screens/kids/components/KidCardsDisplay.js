import React from "react";
import { Dimensions } from "react-native";
import { Avatar, Center, Flex, ScrollView } from "native-base";
import { useSelector } from "react-redux";

import KidCard from "./KidCard";

let KidCardsDisplay = ({ navigation }) => {
  const ids = useSelector((e) => Object.keys(e.children));

  const height = Dimensions.get("window").height - 200;

  let splitIntoTwos = (ids) => {
    let finDisp = [];
    let nested = [];

    for (let i = 0; i < ids.length; i++) {
      if (i % 2 == 0) {
        nested = [{ isNormalCard: true, id: ids[i] }];
      } else {
        nested.push({ isNormalCard: true, id: ids[i] });
        finDisp.push(nested);
      }
    }

    if (ids.length % 2 == 1) {
      nested.push({ isNormalCard: false });
      finDisp.push(nested);
    } else {
      finDisp.push([{ isNormalCard: false }, { isPaddingCard: true }]);
    }
    return finDisp;
  };

  return (
    <ScrollView height={height}>
      <Center width="100%">
        {splitIntoTwos(ids).map((e) => (
          <Flex
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
          >
            {e.map((props) => (
              <KidCard {...props} navigation={navigation} />
            ))}
          </Flex>
        ))}
      </Center>
    </ScrollView>
  );
};

export default KidCardsDisplay;
