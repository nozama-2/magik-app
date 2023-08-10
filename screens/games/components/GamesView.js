import React, { useEffect, useState } from "react";
import { View, Image, Dimensions } from "react-native";
import { Text, Box, ScrollView } from "native-base";
import { t } from "react-native-tailwindcss";

import GameCard from "./GameCard";

import Filter from "./Filter";
import { useSelector } from "react-redux";

const GamesView = ({ navigation, route }) => {
  const games = useSelector((x) => x.games);
  const [filters, setFilters] = useState({
    isPurchased: true,
    gameCategory: "all",
  });
  const [displayedGames, setDisplayedGames] = useState(games);

  useEffect(() => {
    setDisplayedGames(
      games
        .filter((game) =>
          filters.isPurchased ? game.purchased : !game.purchased
        )
        .filter(
          (game) =>
            filters.gameCategory == "all" ||
            game.category == filters.gameCategory
        )
    );
  }, [filters, games]);

  const splitIntoTwo = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length - 1; i += 2) {
      newArray.push([array[i], array[i + 1]]);
    }

    return newArray;
  };

  return (
    <Box w="100%">
      <Filter
        isPurchased={filters.isPurchased}
        setIsPurchased={(x) => {
          setFilters({ ...filters, isPurchased: x });
        }}
        gameCategory={filters.gameCategory}
        setGameCategory={(x) => {
          setFilters({ ...filters, gameCategory: x });
        }}
      />

      <ScrollView w="100%" h={400} px={2} showsVerticalScrollIndicator={false}>
        {displayedGames.length == 0 && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="300px"
          >
            <Text>No games to show...</Text>
            <Image
              source={require("../../../assets/images/sadGif.gif")}
              style={{ width: 100, height: 100 }}
            />
          </Box>
        )}

        {splitIntoTwo(displayedGames).map((element) => (
          <View style={[t.flex1, t.flexRow, t.justifyBetween]}>
            <GameCard {...element[0]} route={route} navigation={navigation} />
            <GameCard {...element[1]} route={route} navigation={navigation} />
          </View>
        ))}
        {displayedGames.length % 2 ? (
          <View style={[t.flex1, t.flexRow, t.justifyBetween]}>
            <GameCard
              {...displayedGames[displayedGames.length - 1]}
              route={route}
              navigation={navigation}
            />
            <View
              style={{
                alignItems: "center",
                width: Dimensions.get("window").width / 2 - 50,
                margin: 10,
                marginTop: 30,
              }}
            ></View>
          </View>
        ) : (
          <View></View>
        )}
      </ScrollView>
    </Box>
  );
};

export default GamesView;
