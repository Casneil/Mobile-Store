import React, { useEffect } from "react";
import { Box, Text } from "react-native-design-utility";

const SplashScreen = ({ navigation }) => {
  const checkAuth = () => {
    setTimeout(() => {
      navigation.navigate("Auth"), 2000;
    });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Box f={1} center>
      <Text>Splash Screen</Text>
    </Box>
  );
};

export default SplashScreen;
