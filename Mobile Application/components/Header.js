import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles';

export const Header = ({ isAutoMode }) => (
  <View style={styles.header}>
    <MaterialIcons name="sports-handball" size={32} color="#ffffff" />
    <Text style={styles.headerText}>Shuttle Rover</Text>
    <View style={styles.statusIndicator}>
      <View style={[styles.statusDot, { backgroundColor: isAutoMode ? "#4ade80" : "#ffffff" }]} />
      <Text style={styles.statusText}>{isAutoMode ? "AUTO" : "MANUAL"}</Text>
    </View>
  </View>
);