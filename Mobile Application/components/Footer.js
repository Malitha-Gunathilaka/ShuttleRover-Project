import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ContactSupport from './ContactSupport';

export const Footer = ({ theme }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openUserManual = () => {
    const userManualUrl = "http://example.com/user-manual";
    Linking.openURL(userManualUrl).catch(err => console.error("Failed to open URL:", err));
  };

  const handleContactSupport = () => {
    setModalVisible(true);
  };

  return (
    <View style={[styles.footer, { backgroundColor: theme.surface }]}>
      <View style={styles.footerContent}>
        <Text style={[styles.footerText, { color: theme.subtext }]}>
          © Shuttle Rover 2025
        </Text>
        <TouchableOpacity onPress={handleContactSupport} style={styles.footerButton}>
          <MaterialIcons name="support-agent" size={25} color={theme.text} />
        </TouchableOpacity>
      </View>
      <ContactSupport visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  footerText: {
    fontSize: 14,
    alignItems: 'center',
  },
  footerButton: {
    //marginLeft: 10,
  },
});