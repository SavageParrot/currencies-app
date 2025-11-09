import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#197506ff",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(countries)"
        options={{
          title: "Currencies",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name={"price-check"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="videoStreamScreen"
        options={{
          title: "Stream",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name={"video-camera-back"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
