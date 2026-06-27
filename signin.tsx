import { ImageBackground, View, Text} from "react-native";
import { Image } from "expo-image";
//import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withRepeat } from "react-native-reanimated";
import { useEffect, useState } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
  User,
} from '@react-native-google-signin/google-signin';
//import { TouchableOpacity } from "react-native";
GoogleSignin.configure({
  webClientId: "709672822558-bpa67bdh4g0oqper05t6lh5scdrvj3rh.apps.googleusercontent.com",
  iosClientId: "709672822558-1vfcvrihco2cl8d1ul65vdtud2daan74.apps.googleusercontent.com",
});

const Signin = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        setUserInfo(response.data);
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            break;
          default:
            break;
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  const glow = useSharedValue(0.04);

  useEffect(() => {
    glow.value = withRepeat(withTiming(0.14, { duration: 3000 }), -1, true);
  }, []);

  const glowStyle = useAnimatedStyle(() => ({
    opacity: glow.value,
  }));

  return (
    <LinearGradient colors={["#07111F", "#0B1220", "#1A0B2E"]} style={{ flex: 1 }}>
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#19D9FF",
          },
          glowStyle,
        ]}
      />
      <ImageBackground
        source={require("../assets/images/Cyber-grid.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        imageStyle={{
          opacity: 0.25,
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

 <Image
  source={require("../assets/images/Cyber-man.png")}
  style={{
    width: 270,
    height: 270,
    marginBottom: 15,
  }}
  contentFit="contain"
/>

<Text
  style={{
    fontSize: 30,
    fontWeight: "800",
    color: "#F8FAFC",
    textAlign: "center",
    lineHeight: 34,
    marginBottom: 0,
  }}
>
  Stay Safe Online
</Text>

<Text
  style={{
    fontSize: 30,
    fontWeight: "800",
    color: "#19D9FF",
    textAlign: "center",
    lineHeight: 34,
    marginBottom: 20,
  }}
>
  With AI
</Text>

<Text
  style={{
    color: "#8EA3B8",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 35,
    marginBottom: 45,
  }}
>
  Detect phishing, scan suspicious links,{"\n"}
  protect your identity.
</Text>

<GoogleSigninButton
  style={{
    width: 280,
    height: 56,
    marginBottom: -10,
    alignSelf: "center",
  }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={signIn}
/>
<Text
  style={{
    marginTop: 18,
    fontSize: 15,
    color: "#8EA3B8",
    textAlign: "center",
    letterSpacing: 0.3,
  }}
>
  Already have an account?{" "}
  <Text
    style={{
      color: "#19D9FF",
      fontWeight: "700",
      textShadowColor: "#19D9FF",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 8,
    }}
  >
    Login
  </Text>
</Text>
          </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default Signin;

