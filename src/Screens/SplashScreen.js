import React, { useEffect } from "react";
import { Image } from "react-native";
import { Box, Text } from "react-native-design-utility";
import { images } from "../constants/images";

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
      <Box mb="sm">
        <Image source={images.logo} />
      </Box>
      <Box mb="sm">
        <Text size="2xl">
          Ca
          <Text size="2xl" color="green">
            Store
          </Text>
        </Text>
      </Box>
      <Text size="sm">shopping made easy</Text>
    </Box>
  );
};

export default SplashScreen;
