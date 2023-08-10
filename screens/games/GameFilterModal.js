import React, { useState } from "react";
import { Flex, ScrollView, Text, Box, Button } from "native-base";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants";
import { useDispatch, useStore } from "react-redux";
import GameCard from "./components/GameCard";
import GameSelectCard from "./components/GameSelectCard";

const GameFilterModal = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const id = route.params.id;
  const childInfo = useStore().getState().children[id];
  const childGames = childInfo.filteredGames;
  const allGames = useStore()
    .getState()
    .games.filter((x) => x.purchased);

  const [chosenGames, setChosenGames] = useState(childGames);

  let splitIntoTwos = (games) => {
    let finDisp = [];
    let nested = [];

    for (let i = 0; i < games.length; i++) {
      if (i % 2 == 0) {
        nested = [games[i]];
      } else {
        nested.push(games[i]);
        finDisp.push(nested);
      }
    }

    if (games.length % 2 == 1) {
      nested.push({ isPaddingCard: true });
      finDisp.push(nested);
    }

    console.warn(finDisp);
    return finDisp;
  };

  const handleSave = () => {
    dispatch({ type: "editGames", child: id, games: chosenGames });
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        backgroundColor={COLORS.lightGray2}
        width="90%"
        height="80%"
        px={5}
        py={3}
        borderRadius={10}
      >
        <Text fontSize={20} textAlign="center" bold>
          {childInfo.name}'s Games
        </Text>

        <ScrollView>
          {splitIntoTwos(allGames).map((e) => (
            <Flex
              width="100%"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              {e.map((game) => (
                <GameSelectCard
                  {...game}
                  selected={
                    chosenGames.filter((cg) => cg == game.name).length > 0
                  }
                  setChosenGames={setChosenGames}
                  chosenGames={chosenGames}
                />
              ))}
            </Flex>
          ))}
        </ScrollView>

        <Box
          display="flex"
          flexDir="row"
          justifyContent="space-between"
          w="100%"
        >
          <Button
            w="40%"
            backgroundColor={COLORS.gray}
            _text={{ color: COLORS.black }}
            onPress={() => {
              navigation.goBack();
            }}
            _pressed={{
              opacity: 0.5,
            }}
          >
            Cancel
          </Button>
          <Button
            w="55%"
            backgroundColor={COLORS.secondary}
            onPress={handleSave}
            _pressed={{
              opacity: 0.5,
            }}
          >
            <Text bold color={COLORS.white}>
              Save settings
            </Text>
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default GameFilterModal;
