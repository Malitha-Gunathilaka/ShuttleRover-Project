import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '../styles';
import { api } from '../services/api';

export const ModeSwitch = ({ isAutoMode, onToggle }) => {
  const toggleMode = () => {
    api.toggleMode(isAutoMode)
      .then(response => {
        console.log(`${isAutoMode ? 'manual' : 'auto'} mode response:`, response.data);
        onToggle();
      })
      .catch(error => console.error(`Error toggling mode:`, error));
  };

  return (
    <View style={styles.modeSwitchContainer}>
    <TouchableOpacity
      style={[styles.modeSwitch, { backgroundColor: isAutoMode ? "#317ce4" : "#317ce4" }]}
      onPress={toggleMode}
      activeOpacity={0.8}
    >
      <Text style={styles.modeSwitchText}>
        {isAutoMode ? "Manual Mode" : "Auto Mode"}
      </Text>
    </TouchableOpacity>
  </View>
  );
};