import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles';

export const ShuttlecockCounter = ({ count, theme }) => (
  <View style={[styles.counterContainer]}>
    <View style={[styles.counterBox, { backgroundColor: theme.surface }]}>
      <MaterialIcons name="sports-tennis" size={26} color={theme.primary} />
      <Text style={[styles.countLabel, { color: theme.subtext }]}>
        Total Shuttlecocks
      </Text>
      <Text style={[styles.countNumber, { color: theme.text }]}>
        {count}
      </Text>
      <MaterialIcons name="sports-tennis" size={26} color={theme.primary} />
    </View>
  </View>
);