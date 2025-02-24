import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Ensure correct path

import { SafeAreaView } from "react-native-safe-area-context";
import Activity from "./activity";
import Nutrition from "./nutrition";
import Sleep from "./sleep";

const Tab = createMaterialTopTabNavigator();

export default function HealthLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{ tabBarStyle: { backgroundColor: "#fff" } }}
      >
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Nutrition" component={Nutrition} />
        <Tab.Screen name="Sleep" component={Sleep} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
