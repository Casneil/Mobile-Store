import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text } from "react-native-design-utility";
import OnboardingLogo from "../commons/OnboardingLogo";
import LoginButton from "../commons/LoginButton";

const LoginScreen = () => {
  return (
    <Box f={1} bg="white" center>
      <Box f={1} center>
        <OnboardingLogo />
      </Box>

      <Box f={0.9} w={"100%"}>
        <LoginButton type="google">Continue with Google</LoginButton>
        <LoginButton type="facebook">Continue with Facebook</LoginButton>
      </Box>
    </Box>
  );
};

export default LoginScreen;

{
}
