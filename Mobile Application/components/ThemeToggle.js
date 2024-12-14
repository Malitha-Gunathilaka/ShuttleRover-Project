import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const ThemeToggle = ({ isDarkMode, onToggle, theme }) => {
  return (
    <TouchableOpacity
      style={styles.themeButton}
      onPress={onToggle}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <MaterialIcons
        name={isDarkMode ? "light-mode" : "dark-mode"}
        size={28}
        color={theme.text}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  themeButton: {
    position: 'absolute',
    top: 110,
    right: 16,
    padding: 4,
  }
});