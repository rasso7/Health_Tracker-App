import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { stats } from "@/data/stats";
import Entypo from "@expo/vector-icons/Entypo";
import { BarChart } from "react-native-gifted-charts";
export default function HomeScreen() {
  const barData = [
    { value: 250, label: "M" },
    { value: 500, label: "T", frontColor: "#DFFE10" },
    { value: 745, label: "W", frontColor: "#DFFE10" },
    { value: 320, label: "T" },
    { value: 600, label: "F", frontColor: "#DFFE10" },
    { value: 256, label: "S" },
    { value: 300, label: "S" },
  ];
  return (
    <View className="flex-1 bg-[#1D2228] p-4">
      {/* Profile Section */}
      <View className="flex-row items-center justify-between mb-2 mt-4">
        <View className="flex-row items-center">
          <Image
            source={require("@/assets/images/profile.jpg")}
            className="w-16 h-16 rounded-full border-2 border-[#DFFE10]"
          />
          <View className="flex justify-center">
            <Text className="text-xl font-semibold ml-3 text-white">
              Hi, Rashid
            </Text>
            <Text className="text-gray-300 mb-4 ml-3">
              Your daily adventure starts now
            </Text>
          </View>
        </View>
        <Entypo name="grid" size={34} color="white" />
      </View>
      <View className="relative w-full h-[120px] overflow-visible mb-4 ">
        {/* Main container with background */}
        <View className="w-full h-full bg-gray-50 rounded-xl overflow-hidden">
          {/* Background gradient curves */}
          <View className="absolute inset-0">
            <Image
              source={require("@/assets/images/subcard.png")}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>

          {/* Content container */}
          <View className="flex-1 p-6">
            {/* Text content */}
            <View className="w-[68%]">
              <Text className="text-2xl font-bold text-black mb-1">
                Burn Your Calories
              </Text>

              {/* Button */}
              <TouchableOpacity className="border border-black rounded-md py-2 px-6 self-start mt-4">
                <Text className="text-black text-base">Explore now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Image
          source={require("@/assets/images/run.png")}
          className="absolute right-0 bottom-[-6px] w-[45%] h-[110%]"
          resizeMode="contain"
        />
      </View>
      {/* Stats Section */}
      <View className="flex-row justify-between">
        <StatBox icon="walk" label="STEPS" value={stats.steps} />
        <StatBox icon="flame" label="CAL BURN" value={stats.caloriesBurned} />
        <StatBox icon="heart" label="HEARTBEAT" value={stats.heartbeat} />
      </View>

      {/* Calories Chart */}
      <View className="bg-[#2A2E37] p-4 mt-4 rounded-lg">
        <View className="flex-row justify-between  w-full">
          {/* Left: CALORIES */}
          <Text className="text-white text-lg font-semibold">CALORIES</Text>

          {/* Right: Weekly Average & Stats */}
          <View className="items-end">
            <Text className="text-gray-400 text-sm">WEEKLY AVERAGE</Text>
            <Text className="text-white text-xl font-bold">
              {stats.weeklyAvg} CAL
            </Text>
          </View>
        </View>

        <BarChart
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          yAxisTextStyle={{ color: "gray" }}
          xAxisLabelTextStyle={{ color: "gray", fontWeight: "bold" }}
          hideRules
          spacing={16}
        />
      </View>
    </View>
  );
}
const StatBox = ({ icon, label, value }) => (
  <View className="bg-[#2A2E37] p-4 rounded-lg items-center w-28">
    <Ionicons name={icon} size={24} color="yellow" />
    <Text className="text-white font-bold mt-1" numberOfLines={1}>
      {value}
    </Text>
    <Text className="text-gray-400 text-xs">{label}</Text>
  </View>
);
