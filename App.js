import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { UtilityThemeProvider, Box } from "react-native-design-utility";
import Navigation from "./src/Screens/index";
import { images } from "./src/constants/images";
import { cacheImages } from "./src/util/CacheImage";
import { theme } from "./src/constants/theme";

const App = () => {
  const [ready, setReady] = useState(false);

  /****************useEffect****************/
  useEffect(() => {
    cacheAssets();
  }, []);

  /****************Functions****************/
  const cacheAssets = async () => {
    try {
      const imagesAssets = cacheImages(Object.values(images));
      await Promise.all([...imagesAssets]);
      setReady(true);
    } catch (error) {
      console.log(error);
    }
  };

  /****************Functions****************/
  if (!ready) {
    return (
      <Box f={1} center bg="white">
        <ActivityIndicator size="large" />
      </Box>
    );
  }
  return (
    <UtilityThemeProvider theme={theme}>
      <Navigation />
    </UtilityThemeProvider>
  );
};

export default App;
