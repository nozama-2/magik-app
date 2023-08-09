import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Pie from "./DonutChart";
import { COLORS } from "../../../../constants";

const Chart = ({ data }) => {
  const screenLimit = 100;
  const canvasSize = 150;

  const getInnerText = (index, dataAsset) =>
    index < 0
      ? {
          index: -1,
          text: `Screentime\n${screenLimit}min`,
        }
      : {
          index,
          text: `${dataAsset[index].name}\n${dataAsset[index].number}min`,
        };

  const [selectedPie, setSelectedPie] = useState(getInnerText(-1, data));

  const onPieItemSelected = (newIndex) => () =>
    setSelectedPie(
      getInnerText(newIndex === selectedPie.index ? -1 : newIndex, data)
    );

  return (
    <Pie
      pieSize={canvasSize * 0.9}
      onItemSelected={onPieItemSelected}
      size={canvasSize}
      data={data}
      value={selectedPie}
    />
  );
};

export default Chart;
