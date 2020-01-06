import { Image } from "react-native";
import { Asset } from "expo";

export function cacheImage(imags) {
  return Image.map(image => {
    if (typeof image === "string") {
      return Image.preFetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
