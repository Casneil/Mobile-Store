import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import SplashScreen from "./SplashScreen";

const AuthNavigator = createStackNavigator({
  Login: LoginScreen
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen
});

const MainNavigator = createStackNavigator({
  Tab: TabNavigator
});

const Navigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Auth: AuthNavigator,
    Main: MainNavigator
  },

  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(Navigator);

// const Navigation = () => {
//   return <Navigator />;
// };

// export default Navigation;
