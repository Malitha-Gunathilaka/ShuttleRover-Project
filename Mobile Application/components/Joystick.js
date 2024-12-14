import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles';
import { api } from '../services/api';

export const Joystick = ({ isAutoMode }) => {
  const sendCommand = (command) => {
    api.sendCommand(command)
      .then(response => console.log("Command response:", response.data))
      .catch(error => console.error("Error sending command:", error));
  };

  return (
    <View style={styles.joystick}>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => sendCommand("F")}
        disabled={isAutoMode}
        activeOpacity={0.7}
      >
        <MaterialIcons name="keyboard-arrow-up" size={50} color="#4682b4" />
      </TouchableOpacity>
      <View style={styles.horizontalButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => sendCommand("L")}
          disabled={isAutoMode}
          activeOpacity={0.7}
        >
          <MaterialIcons name="keyboard-arrow-left" size={50} color="#4682b4" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => sendCommand("S")}
          disabled={isAutoMode}
          activeOpacity={0.7}
        >
          <MaterialIcons name="stop" size={35} color="#4682b4" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => sendCommand("R")}
          disabled={isAutoMode}
          activeOpacity={0.7}
        >
          <MaterialIcons name="keyboard-arrow-right" size={50} color="#4682b4" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => sendCommand("B")}
        disabled={isAutoMode}
        activeOpacity={0.7}
      >
        <MaterialIcons name="keyboard-arrow-down" size={50} color="#4682b4" />
      </TouchableOpacity>
    </View>
  );
};