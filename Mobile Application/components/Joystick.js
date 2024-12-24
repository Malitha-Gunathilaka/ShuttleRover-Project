import React from "react";
import { View, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styles } from "../styles";
import { api } from "../services/api";

export const Joystick = ({ isAutoMode, theme }) => {
  const sendCommand = (command) => {
    api
      .sendCommand(command)
      .then((response) => console.log("Command response:", response.data))
      .catch((error) => console.error("Error sending command:", error));
  };

  return (
    <View style={[styles.joystick, { backgroundColor: theme.background }]}>
      <TouchableOpacity // Forward button
        style={[styles.button1, { backgroundColor: theme.surface }]}
        onPress={() => sendCommand("F")}
        disabled={isAutoMode}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name="keyboard-arrow-up"
          size={50}
          color={theme.primary}
        />
      </TouchableOpacity>
      <View style={styles.horizontalButtons}>
        <TouchableOpacity // Left button
          style={[styles.button, { backgroundColor: theme.surface }]}
          onPress={() => sendCommand("L")}
          disabled={isAutoMode}
          activeOpacity={0.7}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={50}
            color={theme.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity // Stop button
          style={[styles.button, { backgroundColor: theme.surface }]}
          onPress={() => sendCommand("S")}
          disabled={isAutoMode}
          activeOpacity={0.7}
        >
          <MaterialIcons name="stop" size={35} color={theme.primary} />
        </TouchableOpacity>

        <TouchableOpacity // Right button
          style={[styles.button, { backgroundColor: theme.surface }]}
          onPress={() => sendCommand("R")}
          disabled={isAutoMode}
          activeOpacity={0.7}
        >
          <MaterialIcons
            name="keyboard-arrow-right"
            size={50}
            color={theme.primary}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity // Backward button
        style={[styles.button1, { backgroundColor: theme.surface }]}
        onPress={() => sendCommand("B")}
        disabled={isAutoMode}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name="keyboard-arrow-down"
          size={50}
          color={theme.primary}
        />
      </TouchableOpacity>
    </View>
  );
};
