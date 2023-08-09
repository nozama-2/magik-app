import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Svg, G } from "react-native-svg"; // from "react-native-svg"
import { pie } from "d3-shape";
import { COLORS } from '../../../../constants'
import PieSlice from "./DonutSlice";

const Pie = ({ value, data, size, pieSize, onItemSelected }) => {
  const [arcs, setArcs] = useState(null);

  useEffect(() => {
    const calculatedArcs = pie().value((item) => item.number)(data);
    setArcs(calculatedArcs);
  }, [data, pieSize]);

  return (
    arcs && (
      <View style={{ margin: 0 }}>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <G transform={`translate(${size / 2}, ${size / 2})`}>
            {data.map(({ color }, index) => (
              <PieSlice
                key={`pie_shape_${index}`}
                color={color}
                onSelected={onItemSelected(index)}
                arcData={arcs[index]}
                isActive={value.index === index}
              />
            ))}
          </G>
        </Svg>
        <TouchableOpacity
          style={{
            width: size / 2,
            height: size / 2,
            position: "absolute",
            top: size / 2 - 13,
            left: size / 2 - 38,
          }}
          onPress={onItemSelected(-1)}
        >
          <Text
            style={{
              color: COLORS.white,
              textAlign: "center",
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "Poppins-Bold",
            }}
          >
            {value.text}
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default Pie;
