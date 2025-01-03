import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles';
import { api } from '../services/api';

export const SpeedControls = ({ isAutoMode, theme }) => {
  const setSpeed = (speed) => {
    api.setSpeed(speed)
      .then(response => console.log("Speed set response:", response.data))
      .catch(error => console.error("Error setting speed:", error));
  };

  return (
    <View style={[styles.speedControls, { backgroundColor: theme.background }]}>
      <TouchableOpacity
        style={[styles.speedButton, { backgroundColor: theme.speedButton }]}
        onPress={() => setSpeed(210)}
        disabled={isAutoMode}
        activeOpacity={0.7}
      >
        <MaterialIcons name="speed" size={20} color="#ffffff" />
        <Text style={[styles.speedButtonText, { color: "#ffffff" }]}>Medium</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.speedButton, { backgroundColor: theme.speedButton }]}
        onPress={() => setSpeed(255)}
        disabled={isAutoMode}
        activeOpacity={0.7}
      >
        <MaterialIcons name="flash-on" size={20} color="#ffffff" />
        <Text style={[styles.speedButtonText, { color: "#ffffff" }]}>Fast</Text>
      </TouchableOpacity>
    </View>
  );
};