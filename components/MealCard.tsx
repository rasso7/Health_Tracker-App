import { useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";

const MealCard = ({ meal }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = new Animated.Value(expanded ? 1 : 0);

  const toggleExpand = () => {
    const finalValue = expanded ? 0 : 1;
    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  return (
    <View className="bg-[#112240] shadow-lg rounded-xl my-2 p-4">
      {/* Meal Header (Click to Expand) */}
      <TouchableOpacity
        onPress={toggleExpand}
        className="flex-row justify-between items-center"
      >
        <View className="flex-row items-center">
          <Text className="text-yellow-400 text-xl font-bold">
            {meal.title} :{" "}
          </Text>
          <Text className="text-gray-400 font-semibold">
            {meal.calories} cal
          </Text>
        </View>
        <Entypo
          name="chevron-right"
          size={24}
          color="yellow"
          className="mr-2"
        />
      </TouchableOpacity>

      {/* Expandable Section */}
      <Animated.View
        style={{
          height: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, meal.items.length * 50],
          }),
          overflow: "hidden",
        }}
      >
        {meal.items.map((item, index) => (
          <View
            key={index}
            className="flex-row justify-between items-center py-2 border-b border-gray-200"
          >
            <View className="flex-row items-center">
              <FontAwesome5
                name={item.icon}
                size={18}
                color="#A8FFDB"
                className="mr-2"
              />
              <View>
                <Text className="text-white font-semibold">{item.name}</Text>
                <Text className="text-white text-xs">{item.amount}</Text>
              </View>
            </View>
            <Text className="text-gray-200 font-semibold">{item.calories}</Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

export default MealCard;
