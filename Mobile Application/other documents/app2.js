import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
  StyleSheet,
} from "react-native";
import axios from "axios"; // Import Axios library for making HTTP requests
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles"; // Import styles

const esp8266Ip = "http://192.168.4.1"; // Confirm this IP is correct each time you run 192.168.1.105 //192.168.4.1

export default function App() {
  const [totalShuttlecockCount, setTotalShuttlecockCount] = useState(0); // Total shuttlecock count state
  const [errorMessage, setErrorMessage] = useState(null); // Error message state
  const [successMessage, setSuccessMessage] = useState(null); // Success message state
  const [isAutoMode, setIsAutoMode] = useState(false); // Auto mode state

  // Function to send commands to the robot
  const sendCommand = (command) => {
    axios
      .get(`${esp8266Ip}/move?dir=${command}`)
      .then((response) => {
        console.log("Command response:", response.data);
        setSuccessMessage("Command sent successfully.");
        setTimeout(() => setSuccessMessage(null), 3000); // Hide success message after 3 seconds
      })
      .catch((error) => {
        console.error("Error sending command:", error);
        setErrorMessage(
          "Failed to send command to the robot. Check network connection."
        );
        setTimeout(() => setErrorMessage(null), 3000); // Hide error message after 3 seconds
      });
  };

  // Function to send commands to the robot and stop after a delay
  const sendCommandAndStop = (command) => {
    sendCommand(command);
    setTimeout(() => sendCommand("S"), 1000); // Adjust the delay as needed
  };

  // Function to set the speed of the robot
  const setSpeed = (speed) => {
    axios
      .get(`${esp8266Ip}/setSpeed?value=${speed}`)
      .then((response) => {
        console.log("Speed set response:", response.data);
        setSuccessMessage("Speed set successfully.");
        setTimeout(() => setSuccessMessage(null), 3000); // Hide success message after 3 seconds
      })
      .catch((error) => {
        console.error("Error setting speed:", error);
        setErrorMessage("Failed to set speed. Check network connection.");
        setTimeout(() => setErrorMessage(null), 3000); // Hide error message after 3 seconds
      });
  };
  // Function to toggle between Auto and Manual modes
  const toggleAutoMode = () => {
    const command = isAutoMode ? "manual" : "auto";
    axios
      .get(`${esp8266Ip}/${command}`)
      .then((response) => {
        console.log(`${command} mode response:`, response.data);
        setIsAutoMode(!isAutoMode);
        setSuccessMessage(
          `${
            command.charAt(0).toUpperCase() + command.slice(1)
          } mode activated.`
        );
        setTimeout(() => setSuccessMessage(null), 3000); // Hide success message after 3 seconds
      })
      .catch((error) => {
        console.error(`Error toggling ${command} mode:`, error);
        setErrorMessage(
          `Failed to toggle ${command} mode. Check network connection.`
        );
        setTimeout(() => setErrorMessage(null), 3000); // Hide error message after 3 seconds
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`${esp8266Ip}/totalShuttlecockCount`)
        .then((response) => setTotalShuttlecockCount(response.data))
        .catch((error) =>
          console.error("Error updating shuttlecock count:", error)
        );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const openUserManual = () => {
    // Replace with your user manual URL
    const userManualUrl = "http://example.com/user-manual";
    Linking.openURL(userManualUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Shuttle Rover</Text>

        {successMessage && (
          <Text style={styles.successText}>{successMessage}</Text>
        )}
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      </View> */}
      <View style={styles.header}>
        <MaterialIcons name="sports-handball" size={32} color="#ffffff" />
        <Text style={styles.headerText}>Shuttle Rover</Text>
        <View style={styles.statusIndicator}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: isAutoMode ? "#4ade80" : "#ffffff" },
            ]}
          />
          <Text style={styles.statusText}>
            {isAutoMode ? "AUTO" : "MANUAL"}
          </Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Speed control buttons */}
        <View style={styles.speedControls}>
          <TouchableOpacity
            style={styles.speedButton}
            onPress={() => setSpeed(210)}
            disabled={isAutoMode}
            activeOpacity={0.7}
          >
            <MaterialIcons name="speed" size={20} color="#ffffff" />
            <Text style={styles.speedButtonText}>Medium</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.speedButton}
            onPress={() => setSpeed(255)}
            disabled={isAutoMode}
            activeOpacity={0.7}
          >
            <MaterialIcons name="flash-on" size={20} color="#ffffff" />
            <Text style={styles.speedButtonText}>Fast</Text>
          </TouchableOpacity>
        </View>
        {/* Joystick for controlling the robot */}
        // Joystick for controlling the robot
        <View style={styles.joystick}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => sendCommandAndStop("F")}
            disabled={isAutoMode}
            activeOpacity={0.7}
          >
            <MaterialIcons name="keyboard-arrow-up" size={50} color="#4682b4" />{" "}
            {/* ▲ */}
          </TouchableOpacity>
          <View style={styles.horizontalButtons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => sendCommandAndStop("L")}
              disabled={isAutoMode}
              activeOpacity={0.7}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={50}
                color="#4682b4"
              />{" "}
              {/* ◀ */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => sendCommand("S")}
              disabled={isAutoMode}
              activeOpacity={0.7}
            >
              <MaterialIcons name="stop" size={35} color="#4682b4" /> {/* ⏹ */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => sendCommandAndStop("R")}
              disabled={isAutoMode}
              activeOpacity={0.7}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                size={50}
                color="#4682b4"
              />{" "}
              {/* ▶ */}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => sendCommandAndStop("B")}
            disabled={isAutoMode}
            activeOpacity={0.7}
          >
            <MaterialIcons
              name="keyboard-arrow-down"
              size={50}
              color="#4682b4"
            />{" "}
            {/* ▼ */}
          </TouchableOpacity>
        </View>
        {/*  Switch between Auto and Manual modes */}
        <TouchableOpacity
          style={[
            styles.modeSwitch,
            { backgroundColor: isAutoMode ? "#4361ee" : "#64748b" },
          ]}
          onPress={toggleAutoMode}
          activeOpacity={0.8}
        >
          {/* <MaterialIcons 
            name={isAutoMode ? 'autorenew' : 'pan-tool'} 
          size={20} 
          color="#ffffff" 
          /> */}
          <Text style={styles.modeSwitchText}>
            {isAutoMode ? "Auto Mode" : "Manual Mode"}
          </Text>
        </TouchableOpacity>
        {/* Shuttlecock Counter Display */}
        <View style={styles.counterContainer}>
          <View style={styles.counterBox}>
            <MaterialIcons name="sports-tennis" size={26} color="#1da1f2" />
            <Text style={styles.countLabel}>Total Shuttlecocks </Text>
            <Text style={styles.countNumber}>{totalShuttlecockCount}</Text>
            <MaterialIcons name="sports-tennis" size={26} color="#1da1f2" />
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© Shuttle Rover 2024</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://facebook.com")}
          >
            <Icon name="facebook" size={20} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/malithavisada/")
            }
          >
            <Icon name="linkedin" size={20} color="#00acee" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://github.com/Malitha-Gunathilaka")
            }
          >
            <Icon name="github" size={20} color="#" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.userManualButton}
            onPress={openUserManual}
            activeOpacity={0.8}
          >
            <MaterialIcons name="menu-book" size={20} color="#4361ee" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// export default App;
