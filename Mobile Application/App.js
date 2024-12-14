import React, { useState, useEffect } from "react";
import { View, useColorScheme } from "react-native";
import { styles } from "./styles";
import { api } from "./services/api";
import { Header } from "./components/Header";
import { SpeedControls } from "./components/SpeedControls";
import { Joystick } from "./components/Joystick";
import { ModeSwitch } from "./components/ModeSwitch";
import { ShuttlecockCounter } from "./components/ShuttlecockCounter";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { lightTheme, darkTheme } from "./styles/theme";

export default function App() {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');
  const [totalShuttlecockCount, setTotalShuttlecockCount] = useState(0);
  const [isAutoMode, setIsAutoMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const interval = setInterval(() => {
      api.getShuttlecockCount()
        .then(response => setTotalShuttlecockCount(response.data))
        .catch(error => console.error("Error updating count:", error));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header 
        isAutoMode={isAutoMode} 
        theme={theme}
        isDarkMode={isDarkMode}
      />
      
      <View style={styles.content}>
        <SpeedControls isAutoMode={isAutoMode} theme={theme} />
        <Joystick isAutoMode={isAutoMode} theme={theme} />
        <ModeSwitch 
          isAutoMode={isAutoMode} 
          onToggle={() => setIsAutoMode(!isAutoMode)}
          theme={theme}
        />
        <ShuttlecockCounter count={totalShuttlecockCount} theme={theme} />
      </View>
  
      <Footer theme={theme} />
      
      <ThemeToggle 
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
        theme={theme}
      />
    </View>
  );
}