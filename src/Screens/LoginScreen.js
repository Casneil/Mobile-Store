import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text } from "react-native-design-utility";
import OnboardingLogo from "../commons/OnboardingLogo";

const LoginScreen = () => {
  return (
    <Box f={1} bg="white" center>
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
      <Box f={0.9} bg="red" w="100%">
        <TouchableOpacity>
          <Box>
            <Text>Continue with google</Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default LoginScreen;
