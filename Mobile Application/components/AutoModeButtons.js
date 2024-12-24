import React, { useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../styles";
import { api } from "../services/api";

const AutoModeButtons = ({ theme, isManualMode }) => {
  useEffect(() => {
    // Set speed to 230 when component is mounted
    const setSpeed = (speed) => {
      api
        .setSpeed(speed)
        .then((response) => console.log("Speed set response:", response.data))
        .catch((error) => console.error("Error setting speed:", error));
    };
    setSpeed(230);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const sendCommand = (command) => {
    api
      .sendCommand(command)
      .then((response) => console.log("Command response:", response.data))
      .catch((error) => console.error("Error sending command:", error));
  };

  return (
    <View>
      <TouchableOpacity // Stop button
        style={[styles.button, { backgroundColor: theme.surface }]}
        onPress={() => sendCommand("S")}
        disabled={isManualMode}
        activeOpacity={0.7}
      >
        <MaterialIcons name="stop" size={35} color={theme.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default AutoModeButtons;
