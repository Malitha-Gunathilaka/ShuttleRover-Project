import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from "../styles";

export const Footer = ({ theme }) => {
  const openUserManual = () => {
    const userManualUrl = "http://example.com/user-manual";
    Linking.openURL(userManualUrl).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View style={[styles.footer, { backgroundColor: theme.surface }]}>
      <Text style={[styles.footerText, { color: theme.subtext }]}>© Shuttle Rover 2024</Text>
      <View style={styles.socialIcons}>
        {/* <TouchableOpacity onPress={() => Linking.openURL("https://facebook.com")}>
          <Icon name="facebook" size={20} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/malithavisada/")}>
          <Icon name="linkedin" size={20} color="#00acee" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Malitha-Gunathilaka")}>
          <Icon name="github" size={20} color="#171515" />
        </TouchableOpacity> */}

        
        {/* <TouchableOpacity style={[styles.userManualButton, { backgroundColor: theme.surface }]} onPress={openUserManual} activeOpacity={0.8}>
          <MaterialIcons name="menu-book" size={20} color="#4361ee" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};