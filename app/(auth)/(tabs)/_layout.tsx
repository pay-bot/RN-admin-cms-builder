import { useColorScheme } from "@/hooks/useColorScheme";
import { useAppSelector } from "@/store";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import HomeScreen from "./index"; // Replace with the actual screen
import SiteStructure from "./siteStructure"; // Replace with the actual screen
import Fontisto from "@expo/vector-icons/Fontisto";
import { Redirect } from "expo-router";

const Tab = createBottomTabNavigator();

export default function AppLayout() {
  const colorScheme = useColorScheme();
  const auth = useAppSelector((state) => state.auth);
  console.log("🚀 ~ AppLayout ~ auth:", auth);

  if (!auth.isAuthenticated) {
    return <Redirect href="/(public)/login" />;
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="index"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="siteStructure"
        component={SiteStructure}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Fontisto name="sitemap" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
