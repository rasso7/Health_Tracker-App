import React from "react";
import { View, Text, ScrollView } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedProps,
} from "react-native-reanimated";
import { LineChart } from "react-native-gifted-charts";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Activity = () => {
  const totalSteps = 10000;
  const currentSteps = 8000;
  const progress = useSharedValue((currentSteps / totalSteps) * 100);

  const circumference = 2 * Math.PI * 75;
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circumference - (progress.value / 100) * circumference,
  }));
  const data = [
    { value: 5000, label: "Mon" },
    { value: 7000, label: "Tue" },
    { value: 6000, label: "Wed" },
    { value: 8000, label: "Thu" },
    { value: 7500, label: "Fri" },
    { value: 9000, label: "Sat" },
    { value: 10000, label: "Sun" },
  ];

  return (
    <ScrollView className="flex-1 bg-[#1D2228] p-5">
      <View className="bg-[#2A2E37]  p-2 rounded-lg">
        <Text className="text-[#D6FF3E] text-xl font-bold">Today</Text>
        <Text className="text-gray-300 text-lg">
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
          })}
        </Text>{" "}
        <View className="justify-center items-center  ">
          {/* Circular Progress Bar */}
          <View className="justify-center items-center relative ">
            <Svg width={200} height={200} viewBox="0 0 200 200">
              <Circle
                cx="100"
                cy="100"
                r="90"
                stroke="#555"
                strokeWidth="6"
                fill="none"
                strokeDasharray="5,5"
              />
              <Circle
                cx="100"
                cy="100"
                r="75"
                stroke="#333"
                strokeWidth="10"
                fill="none"
              />
              <AnimatedCircle
                cx="100"
                cy="100"
                r="75"
                stroke="#D6FF3E"
                strokeWidth="10"
                fill="none"
                strokeDasharray={circumference}
                animatedProps={animatedProps}
                strokeLinecap="round"
              />
            </Svg>
            <View className="absolute items-center">
              <Ionicons name="footsteps-outline" size={32} color="white" />
              <Text className="text-white text-2xl font-bold mt-2">
                {currentSteps}
              </Text>
            </View>
            <Text className="text-gray-400 text-lg ">Steps</Text>
          </View>
        </View>
        {/* Stats Section */}
        <View className="flex-row mt-2 justify-center">
          <StatCard icon="walk" value="919" label="Steps" color="#44D62C" />
          <StatCard icon="location" value="0.65" label="KM" color="#00AEEF" />
          <StatCard icon="flame" value="800" label="Cals" color="#FF3B3B" />
        </View>
      </View>
      {/* Line Chart */}

      <View className="mt-2 mb-9 bg-[#2A2E37] rounded-lg ">
        {/* X-Axis Labels Above the Chart */}
        <View className="flex-row mb-2 px-2 mt-2">
          <Text className="text-white text-md font-bold">Your </Text>
          <Text className="text-[#D6FF3E] text-md font-bold">Weekly</Text>
          <Text className="text-white text-md font-bold"> Steps Activity</Text>
        </View>
        <View className="flex-row justify-between px-4 mb-2">
          {data.map((item, index) => (
            <Text key={index} className="text-white text-xs text-center">
              {item.label}
            </Text>
          ))}
        </View>

        {/* Line Chart */}
        <LineChart
          areaChart
          curved
          data={data}
          startFillColor="rgb(46, 217, 255)"
          startOpacity={0.8}
          endFillColor="rgb(203, 241, 250)"
          endOpacity={0.3}
          thickness={2}
          hideYAxisText
          color="rgb(0, 168, 255)"
          hideRules
          spacing={46}
          hideVerticalLines
          showReferenceLine1
          referenceLine1Position={10000}
          referenceLine1Config={{ color: "white", dashArray: [5, 5] }}
          pointerConfig={{
            pointerStripColor: "red",
            pointerStripWidth: 2,
            pointerColor: "white",
            radius: 6,
            strokeWidth: 3,
            activatePointersOnLongPress: false,
            pointerLabelComponent: (point) => (
              <View className="bg-white p-2 rounded-lg">
                <Text className="text-black font-bold">{point.value}</Text>
              </View>
            ),
          }}
          width={297}
          height={120}
          adjustToWidth={true}
          hideDataPoints={false}
          dataPointsColor="rgb(255, 69, 58)"
          dataPointsRadius={4}
          xAxisLabelTextStyle={{ opacity: 0 }}
        />
      </View>
    </ScrollView>
  );
};

const StatCard = ({ icon, value, label, color }) => (
  <View
    style={{ borderColor: color }}
    className="items-center p-3 rounded-full border-2 mx-4"
  >
    <Ionicons name={icon} size={26} color={color} />
    <Text className="text-white text-xl font-bold">{value}</Text>
    <Text className="text-gray-400 text-base">{label}</Text>
  </View>
);

export default Activity;
