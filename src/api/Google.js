import Constants from "expo-constants";
import * as Google from "expo-google-app-auth";

const scopes = ["profile", "email"];

const loginAsync = async () => {
  try {
    const result = await Google.loginAsync({
      androidClientId: Constants.manifest.extra.googleAppId.android,
      iosClient: Constants.manifest.extra.googleAppId.ios,
      scopes
    });
    if (result.type === "success") {
      return Promise.resolve(result.accessToken);
    }
    return Promise.reject("No success");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GoogleApi = {
  loginAsync
};
