import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import { ProgressChart } from "react-native-chart-kit";

import { COLORS } from '../../../constants'

function TimeChart() {

    const data = {
        labels: ["Swim"], // optional
        data: [0.8]
      };

    return (
            <View style={styles.progressContainer}>
                <View style={{
                    position: "absolute", zIndex: 99,
                    marginLeft: 45,
                    marginTop: 55
                }}>
                    <Text style={{fontFamily: "Poppins-Bold", fontSize: 16, textAlign: 'center'}}>
                        15 min
                    </Text>
                    <Text style={{fontFamily: "Poppins-Regular", fontSize: 10, textAlign: 'center'}}>
                        on Tangram
                    </Text>
                </View>  

                <ProgressChart
                    data={data}
                    width={150}
                    height={150}
                    strokeWidth={16}
                    radius={60}
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#D3CCE3",
                        backgroundGradientTo: "#E9E4F0",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 97, 95, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 97, 95, ${opacity})`,
                        style: {
                            borderRadius: 10
                        }
                    }}
                    style={{
                        borderRadius: 10
                    }}
                    hideLegend={true}
                    />
            </View>
    );
};

const styles = StyleSheet.create({
    progressContainer: {
        position: 'relative'
    }
});

export default TimeChart;