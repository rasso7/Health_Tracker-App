import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Data = [
  {
    title: "Sleep Score",
    value: "8.5",
    icon: <MaterialIcons name="sports-score" size={24} color="green" />,
  },
  {
    title: "Sleep Duration",
    value: "8h 20m",
    icon: <Ionicons name="trending-up" size={24} color="red" />,
  },
  {
    title: "Sleep at Time",
    value: "22:00 PM",
    icon: <FontAwesome5 name="moon" size={20} color="purple" />,
  },
  {
    title: "Wake up Time",
    value: "08:00 AM",
    icon: <MaterialIcons name="wb-sunny" size={22} color="orange" />,
  },
];

const sleepData = [
  { value: 30, color: "#1DCC89", label: "Light Sleep", duration: "1hr 35min" },
  { value: 15, color: "#3B49DF", label: "Awake", duration: "45min" },
  { value: 35, color: "#CB11D8", label: "Deep Sleep", duration: "2hr 10min" },
];

const Sleep = () => {
  return (
    <ScrollView
      className="flex-1 bg-gray-400 p-4"
      showsVerticalScrollIndicator={false}
    >
      <View className="bg-white rounded-2xl p-6 shadow-lg items-center w-full">
        <View className="flex-row items-center">
          <View className="mr-6">
            <PieChart
              data={sleepData}
              donut
              showText
              textSize={20}
              textColor="black"
              radius={80}
              innerRadius={50}
              centerLabelComponent={() => (
                <View className="items-center">
                  <Text className="text-black text-3xl font-bold">90%</Text>
                  <Text className="text-gray-500 text-sm">Sleep Quality</Text>
                </View>
              )}
            />
          </View>
          <View>
            {sleepData.map((item, index) => (
              <Legend
                key={index}
                color={item.color}
                label={item.label}
                duration={item.duration}
              />
            ))}
          </View>
        </View>
      </View>

      <View className="bg-white p-4 pb-0 mt-6 rounded-2xl w-full items-center">
        <View className="flex-row flex-wrap justify-between w-full">
          {Data.map((item, index) => (
            <View
              key={index}
              className="bg-[#112240] p-4 rounded-2xl w-[48%] h-24 flex justify-center mb-4"
            >
              <Text className="text-gray-400 text-sm">Daily</Text>
              <Text className="text-white text-md font-bold">{item.title}</Text>
              <View className="flex-row justify-between gap-6">
                <Text className="text-blue-400 text-xl font-bold">
                  {item.value}
                </Text>
                {item.icon}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Today Schedule Section */}
      <View className="bg-[#112240] p-4 mt-4 rounded-2xl w-full mb-10">
        <View className="flex-row justify-between">
          <Text className="text-white text-lg font-bold">Today Schedule</Text>
          <Text className="text-yellow-400 font-bold">See all</Text>
        </View>

        {/* Bedtime Card */}
        <ScheduleCard
          icon={<FontAwesome5 name="moon" size={24} color="yellow" />}
          title="Bedtime"
          time="09:00 PM"
          subtitle="In 7 hours 30 minutes"
        />

        {/* Alarm Card */}
        <ScheduleCard
          icon={<MaterialIcons name="alarm" size={24} color="red" />}
          title="Alarm"
          time="05:30 AM"
          subtitle="Sun Sep 26th, 2021"
        />

        {/* Daily Schedule Button */}
        <TouchableOpacity className="bg-blue-700 p-3 mt-4 rounded-xl flex-row justify-between items-center">
          <Text className="text-white text-lg">Daily Sleep Schedule</Text>
          <Text className="text-yellow-400 text-lg font-bold">Check</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const ScheduleCard = ({ icon, title, time, subtitle }) => (
  <View className="bg-[#1D1E33] p-4 mt-3 rounded-2xl flex-row items-center justify-between">
    <View className="flex-row items-center">
      <View className="mr-4">{icon}</View>
      <View>
        <Text className="text-white font-bold text-md">
          {title}, {time}
        </Text>
        <Text className="text-gray-400 text-sm">{subtitle}</Text>
      </View>
    </View>
    <MaterialIcons name="more-vert" size={24} color="gray" />
  </View>
);

const Legend = ({ color, label, duration }) => (
  <View className="mb-3">
    <View className="flex-row items-center">
      <View
        style={{ backgroundColor: color }}
        className="w-3 h-3 rounded-sm mr-2"
      />
      <Text className="text-black text-base font-medium">{label}</Text>
    </View>
    <Text className="text-gray-500 text-sm font-bold ml-5">{duration}</Text>
  </View>
);

export default Sleep;
