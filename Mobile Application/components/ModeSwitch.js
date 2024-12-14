import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
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
    <TouchableOpacity
      style={[styles.modeSwitch, { backgroundColor: isAutoMode ? "#4361ee" : "#64748b" }]}
      onPress={toggleMode}
      activeOpacity={0.8}
    >
      <Text style={styles.modeSwitchText}>
        {isAutoMode ? "Auto Mode" : "Manual Mode"}
      </Text>
    </TouchableOpacity>
  );
};