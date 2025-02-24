import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import MealCard from "@/components/MealCard";
import { ScrollView } from "react-native-virtualized-view";
const meals = [
  {
    title: "Breakfast",
    calories: 186,
    items: [
      { name: "Oatmeal", amount: "1 Bowl", calories: 120, icon: "cookie" },
      { name: "Banana", amount: "1 Medium", calories: 66, icon: "apple-alt" },
    ],
  },
  {
    title: "Lunch",
    calories: 388,
    items: [
      {
        name: "White Rice",
        amount: "25 Teaspoons",
        calories: 126,
        icon: "bowl-rice",
      },
      {
        name: "Fish & Vegetables Curry",
        amount: "1.5 Cups",
        calories: 182,
        icon: "fish",
      },
      { name: "Egg Omlette", amount: "1 Serving", calories: 80, icon: "egg" },
    ],
  },
  {
    title: "Dinner",
    calories: 200,
    items: [
      {
        name: "Grilled Chicken",
        amount: "1 Plate",
        calories: 150,
        icon: "drumstick-bite",
      },
      { name: "Salad", amount: "1 Bowl", calories: 50, icon: "carrot" },
    ],
  },
];

const Nutrition = () => {
  const totalCalories = 2119;
  const consumedCalories = 596;
  const progress = (consumedCalories / totalCalories) * 100;

  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <ScrollView
      className="bg-[#1E1F28] p-6  shadow-xl w-full"
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Row Layout */}
      <View className="flex-row justify-between items-center mb-6">
        {/* Circular Progress Bar */}
        <View className="items-center mr-5 relative">
          <Svg width={150} height={150} viewBox="0 0 120 120">
            <Circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#4A5568"
              strokeWidth="8"
              fill="none"
            />
            <Circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#1DCC89"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </Svg>
          <Ionicons
            name="fast-food-outline"
            size={30}
            color="#1DCC89"
            className="absolute top-[40px] left-[65px]"
          />
          <Text className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md font-bold text-white">
            {consumedCalories} / {totalCalories} kcal
          </Text>
        </View>

        {/* Nutrition Breakdown */}
        <View className="flex-1 space-y-4">
          <NutritionItem
            label="Carbs"
            consumed={246}
            total={1166}
            color="bg-red-500"
            bgColor="bg-red-300"
          />
          <NutritionItem
            label="Protein"
            consumed={77}
            total={318}
            color="bg-blue-500"
            bgColor="bg-blue-300"
          />
          <NutritionItem
            label="Fat"
            consumed={273}
            total={636}
            color="bg-yellow-500"
            bgColor="bg-yellow-300"
          />
        </View>
      </View>

      {/* Activity & Water */}
      <View className="flex-row justify-around w-full  bg-[#2A2E37] p-4 rounded-xl">
        <ActivityItem icon="walk" value="269/250" unit="kcal" />
        <ActivityItem icon="water" value="1.00/2" unit="liter" />
      </View>

      {/* Meals List */}
      <View className="bg-[#2A2E37] p-4 mt-4 rounded-2xl w-full ">
        <View className="flex-row justify-between mb-2">
          <Text className="text-white text-lg font-bold">Today's Meal</Text>
          <Text className="text-yellow-400 font-bold">See all</Text>
        </View>
        <FlatList
          data={meals}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <MealCard meal={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          // Space between items
          contentContainerStyle={{ paddingTop: 18, paddingBottom: 20 }}
        />
        <TouchableOpacity className="bg-blue-700 p-3  rounded-xl flex-row justify-between items-center mt-4">
          <Text className="text-white text-lg">Daily Food Goal</Text>
          <Text className="text-yellow-400 text-lg font-bold">Check</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Nutrition Item Component
const NutritionItem = ({ label, consumed, total, color, bgColor }) => (
  <View className="m-2">
    <Text className="text-sm font-semibold text-white mb-1">{label}</Text>
    <View className={`${bgColor} w-full h-2 rounded-full overflow-hidden`}>
      <View
        className={`${color} h-2 rounded-full`}
        style={{ width: `${(consumed / total) * 100}%` }}
      />
    </View>
    <Text className="text-xs text-gray-400 mt-1">{`${consumed} / ${total} kcal`}</Text>
  </View>
);

// Activity Item Component
const ActivityItem = ({ icon, value, unit }) => (
  <View className="items-center">
    <Ionicons name={icon} size={28} color="#1DCC89" />
    <Text className="text-lg font-bold text-white mt-1">{value}</Text>
    <Text className="text-xs text-gray-400">{unit}</Text>
  </View>
);

export default Nutrition;
