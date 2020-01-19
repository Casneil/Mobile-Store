import { Facebook, Constants } from "expo";

const permissions = ["public_profile", "email"];

const loginAsync = async () => {
  try {
    const {
      type,
      token
    } = await Facebook.logInWithReadPermissionsAsync(
      Constants.manifest.FacebookApi,
      { permissions }
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export const FacebookApi = {
  loginAsync
};
