import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from "../styles";

export const Header = ({ isAutoMode, theme }) => (
  <View style={[styles.header, { backgroundColor: theme.primary }]}>
    <MaterialIcons name="sports-handball" size={32} color={theme.htext} />
    <Text style={[styles.headerText, { color: theme.htext }]}>Shuttle Rover</Text>
    <View style={styles.statusIndicator}>
      <View style={[styles.statusDot, { backgroundColor: isAutoMode ? theme.success : theme.manual }]} />
      <Text style={[styles.statusText, { color: theme.htext }]}>{isAutoMode ? "AUTO" : "MANUAL"}</Text>
    </View>
  </View>
);