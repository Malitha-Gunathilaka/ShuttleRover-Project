import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
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
    <View style={styles.container}>
      <Image 
      source={require('../assets/images/court.png')}
      style={styles.courtImage}
    />
      <View style={styles.buttonContainer}>
        <TouchableOpacity // Left button
          style={[styles.button, styles.leftButton, { backgroundColor: theme.surface }]}
          onPress={() => sendCommand("SL")}
          disabled={isManualMode}
          activeOpacity={0.7}
        >
          <Text style={{ color: theme.primary }}>Start Left</Text>
        </TouchableOpacity>

        <TouchableOpacity // Stop button
          style={[styles.button, styles.stopButton, { backgroundColor: theme.surface }]}
          onPress={() => sendCommand("S")}
          disabled={isManualMode}
          activeOpacity={0.7}
        >
          <MaterialIcons name="stop" size={30} color={theme.primary} />
        </TouchableOpacity>

        <TouchableOpacity // Right button
          style={[styles.button, styles.rightButton, { backgroundColor: theme.surface }]}
          onPress={() => sendCommand("SR")}
          disabled={isManualMode}
          activeOpacity={0.7}
        >
          <Text style={{ color: theme.primary }}>Start Right</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: "cloumn",
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {

    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 20, // Add space between the image and buttons
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  leftButton: {
    flex: 1,
    marginRight: 10,
  },
  rightButton: {
    flex: 1,
    marginLeft: 10,
  },
  stopButton: {
    width: 50,
    height: 50,
    backgroundColor: "#ddd", // Light gray color
    borderRadius: 32.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 5,
  },
  courtImage: {
    height: 220,
    resizeMode: "contain",
    marginBottom: 0, // Add space between the image and buttons
  },
  // other styles
});

export default AutoModeButtons;