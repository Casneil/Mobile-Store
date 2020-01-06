import React, { useEffect } from "react";
import { Box, Text } from "react-native-design-utility";

import OnboardingLogo from "../commons/OnboardingLogo";

const SplashScreen = ({ navigation }) => {
  const checkAuth = () => {
    navigation.navigate("Auth");
    // setTimeout(() => {
    //   navigation.navigate("Auth"), 2000;
    // });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Box f={1} center>
      <OnboardingLogo />
    </Box>
  );
};

export default SplashScreen;
