import React, { useState, useEffect } from "react";
import { View, useColorScheme, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { api } from "./services/api";
import { Header } from "./components/Header";
import { SpeedControls } from "./components/SpeedControls";
import { Joystick } from "./components/Joystick";
import { ModeSwitch } from "./components/ModeSwitch";
import { ShuttlecockCounter } from "./components/ShuttlecockCounter";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { MaterialIcons } from "@expo/vector-icons";
import { lightTheme, darkTheme } from "./styles/theme";
import AutoModeButtons from "./components/AutoModeButtons";
import UserManualButton from "./components/UserManualButton";

export default function App() {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === "dark");
  const [totalShuttlecockCount, setTotalShuttlecockCount] = useState(0);
  const [isAutoMode, setIsAutoMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const interval = setInterval(() => {
      api
        .getShuttlecockCount()
        .then((response) => setTotalShuttlecockCount(response.data))
        .catch((error) => console.error("Error updating count:", error));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Add the theme object to the styles.container
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Add the Header component here */}
      <Header isAutoMode={isAutoMode} theme={theme} isDarkMode={isDarkMode} />

      <UserManualButton theme={theme} />
      
      {/* Add the SpeedControls component here */}
      <SpeedControls isAutoMode={isAutoMode} theme={theme} />

      {/* Add the ShuttlecockCounter and Footer components here */}
      <ShuttlecockCounter count={totalShuttlecockCount} theme={theme} />
      

      {/* Add the AutoModeButtons component here */}
      <View style={styles.content}>
        {isAutoMode ? (
          <AutoModeButtons theme={theme} />
        ) : (
          <Joystick isAutoMode={isAutoMode} theme={theme} />
        )}
      </View>

      {/* Add the ModeSwitch and ThemeToggle components here */}
      <ModeSwitch
        isAutoMode={isAutoMode}
        onToggle={() => setIsAutoMode(!isAutoMode)}
        theme={theme}
      />

      {/*  Add the Footer and ThemeToggle components here */}
      <Footer theme={theme} />

       {/* Add the ThemeToggle component here */}
      <ThemeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
        theme={theme}
      />
    </View>
  );
}
