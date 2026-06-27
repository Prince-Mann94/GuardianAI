import { Text, ImageBackground, View, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//import { Pressable } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue,withTiming,withRepeat} from "react-native-reanimated";
import { useEffect } from "react";
import { Image } from 'expo-image';
import { Link } from "expo-router";

const Index = () => {
   const insets = useSafeAreaInsets();       // for bottom text
   const glow = useSharedValue(0.04);

useEffect(() => {
  glow.value = withRepeat(
    withTiming(0.14, { duration: 3000 }),
    -1,
    true
  );
}, []);

const glowStyle = useAnimatedStyle(() => ({
  opacity: glow.value,
}));
  return (
   <LinearGradient
    colors={["#07111F", "#0B1220", "#1A0B2E"]}
    style={{ flex: 1 }}
    >
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
        resizeMode="cover"                                // For grid lines
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
              alignItems: "center",               // For whole display
              justifyContent: "center",
          }}
        >
      <Image
        source={require("../assets/images/Cyber-man.png")}
        style={{
          width: 320,
          height: 320,
          marginBottom: -50,
          zIndex: 10
  }}
  contentFit="contain"
/>
     <Text
          style={{
              zIndex:1,
              fontSize: 38,
              fontWeight: "800",
              color: "#19D9FF",
              letterSpacing: 1,
            }}
          >
            GuardianAI
      </Text>

          <Text
            style={{
              color: "#8EA3B8",
              marginTop: 12,
              fontSize: 16,
            }}
          >
            AI-Powered Cyber Protection
          </Text>

          <Text
            style={{
              color: "#6B7C93",
              marginTop: 8,
              fontSize: 13,
              textAlign: "center",
              paddingHorizontal: 40,
            }}
          >
            DETECT  .  LEARN  .  STAY         
          </Text>


    <Link href="/signin" asChild>
   <TouchableOpacity
      style={{
            position: "absolute",                    // For "get started" to be pressable
            bottom: insets.bottom + 20,
            backgroundColor: "rgb(25, 217, 255)",
            paddingVertical: 16,
            paddingHorizontal: 50,
            borderRadius: 30,
      }}>
        <Text
          style={{
            color: "rgb(18, 20, 20)",
            fontWeight: "700",
            fontSize: 20
          }}
          >Get Started -></Text>
      </TouchableOpacity>
      </Link>
        </View>
      </ImageBackground>
    </LinearGradient>
    
  );
};

export default Index;