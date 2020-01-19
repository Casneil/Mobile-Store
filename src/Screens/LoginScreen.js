import React from "react";
import { Alert, Animated } from "react-native";
import { Box } from "react-native-design-utility";
import OnboardingLogo from "../commons/OnboardingLogo";
import LoginButton from "../commons/LoginButton";

const BoxAnimated = Animated.createAnimatedComponent(Box);

class LoginScreen extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0)
  };

  /*************Fuctions***************/
  onGooglePress = () => {
    Alert.alert("Google");
  };

  onFacebookPress = () => {
    Alert.alert("Facebook");
  };

  opacityAnimation = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 200
    }).start();
  };

  positionAniation = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  /*************Fuctions***************/

  /*************useEffect***************/
  componentDidMount() {
    Animated.parallel([
      this.opacityAnimation(),
      this.positionAniation()
    ]).start();
    this.opacityAnimation();
    this.positionAniation();
  }

  /*************useEffect***************/

  render() {
    const { opacity } = this.state;

    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [170, 0]
    });

    return (
      <Box f={1} bg="white" center>
        <BoxAnimated
          f={1}
          style={{
            transform: [
              {
                translateY: logoTranslate
              }
            ]
          }}
        >
          <Box f={1} center>
            <OnboardingLogo />
          </Box>
        </BoxAnimated>

        <BoxAnimated f={0.9} w={1} style={{ opacity }}>
          <LoginButton onPress={this.onGooglePress} type="google">
            Continue with Google
          </LoginButton>
          <LoginButton onPress={this.onFacebookPress} type="facebook">
            Continue with Facebook
          </LoginButton>
        </BoxAnimated>
      </Box>
    );
  }
}

export default LoginScreen;
