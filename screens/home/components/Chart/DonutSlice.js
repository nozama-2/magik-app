import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import { Path } from "react-native-svg"; // from "react-native-svg"
import { arc } from "d3-shape";

const isWeb = Platform.OS === "web";

const DONUT_SIZE = 120;

const activeArcLoader = arc()
  .innerRadius(40 - 2)
  .outerRadius(DONUT_SIZE / 2 + 2 * 2.5);

const arcLoader = arc()
  .outerRadius(DONUT_SIZE / 2)
  .innerRadius(40);

const PieSlice = ({ isActive, color, arcData, onSelected }) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(isActive ? activeArcLoader(arcData) : arcLoader(arcData));
  }, [isActive, arcData]);

  return (
    <Path
      d={path}
      stroke={color}
      fill={color}
      {...{ [isWeb ? "onClick" : "onPress"]: onSelected }}
      style={{ cursor: "pointer" }}
    />
  );
};

export default PieSlice;
