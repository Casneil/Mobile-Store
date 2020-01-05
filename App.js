import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { UtilityThemeProvider, Box, Text } from "react-native-design-utility";
import Navigation from "./src/Screens/index";

export default function App() {
  return (
    <UtilityThemeProvider>
      <Navigation />
    </UtilityThemeProvider>
  );
}
