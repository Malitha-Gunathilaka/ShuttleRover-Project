import React, { useState, useEffect } from 'react';
import { View, Button, Text, TouchableOpacity, Alert, Linking, StyleSheet } from 'react-native';
import axios from 'axios'; // Import Axios library for making HTTP requests
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const esp8266Ip = 'http://192.168.1.156'; // Confirm this IP is correct each time you run 192.168.1.156 //192.168.4.1


export default function App() {
  const [totalShuttlecockCount, setTotalShuttlecockCount] = useState(0);  // Total shuttlecock count state
  const [errorMessage, setErrorMessage] = useState(null); // Error message state
  const [successMessage, setSuccessMessage] = useState(null); // Success message state
  const [isAutoMode, setIsAutoMode] = useState(false); // Auto mode state

  const sendCommand = (command) => {
    axios.get(`${esp8266Ip}/move?dir=${command}`)
      .then(response => {
        console.log("Command response:", response.data);
        setSuccessMessage("Command sent successfully.");
        setTimeout(() => setSuccessMessage(null), 3000); // Hide success message after 3 seconds
      })
      .catch(error => {
        console.error("Error sending command:", error);
        setErrorMessage("Failed to send command to the robot. Check network connection.");
        setTimeout(() => setErrorMessage(null), 3000); // Hide error message after 3 seconds
      });
  };

  const setSpeed = (speed) => {
    axios.get(`${esp8266Ip}/setSpeed?value=${speed}`)
      .then(response => {
        console.log("Speed set response:", response.data);
        setSuccessMessage("Speed set successfully.");
        setTimeout(() => setSuccessMessage(null), 3000); // Hide success message after 3 seconds
      })
      .catch(error => {
        console.error("Error setting speed:", error);
        setErrorMessage("Failed to set speed. Check network connection.");
        setTimeout(() => setErrorMessage(null), 3000); // Hide error message after 3 seconds
      });
  };
  // Function to toggle between Auto and Manual modes
  const toggleAutoMode = () => {
    const command = isAutoMode ? 'manual' : 'auto';
    axios.get(`${esp8266Ip}/${command}`)
      .then(response => {
        console.log(`${command} mode response:`, response.data);
        setIsAutoMode(!isAutoMode);
        setSuccessMessage(`${command.charAt(0).toUpperCase() + command.slice(1)} mode activated.`);
        setTimeout(() => setSuccessMessage(null), 3000); // Hide success message after 3 seconds
      })
      .catch(error => {
        console.error(`Error toggling ${command} mode:`, error);
        setErrorMessage(`Failed to toggle ${command} mode. Check network connection.`);
        setTimeout(() => setErrorMessage(null), 3000); // Hide error message after 3 seconds
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`${esp8266Ip}/totalShuttlecockCount`)
        .then(response => setTotalShuttlecockCount(response.data))
        .catch(error => console.error("Error updating shuttlecock count:", error));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const openUserManual = () => {
    // Replace with your user manual URL
    const userManualUrl = 'http://example.com/user-manual';
    Linking.openURL(userManualUrl).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Shuttle Rover</Text>
        
        {successMessage && <Text style={styles.successText}>{successMessage}</Text>}
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.joystick}>
          <TouchableOpacity style={styles.button1} onPress={() => sendCommand('F')} disabled={isAutoMode}>
            <Text style={styles.buttonText}>▲</Text>
          </TouchableOpacity>
          <View style={styles.horizontalButtons}>
            <TouchableOpacity style={styles.button} onPress={() => sendCommand('L')} disabled={isAutoMode}>
              <Text style={styles.buttonText}>◀</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => sendCommand('S')} disabled={isAutoMode}>
              <Text style={styles.buttonText}>⏹</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => sendCommand('R')} disabled={isAutoMode}>
              <Text style={styles.buttonText}>▶</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button1} onPress={() => sendCommand('B')} disabled={isAutoMode}>
            <Text style={styles.buttonText}>▼</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.speedControls}>
          <Button title="Medium Speed" onPress={() => setSpeed(210)} disabled={isAutoMode} />
          <Button title="Fast Speed" onPress={() => setSpeed(255)} disabled={isAutoMode} />
        </View>
        <Button title={isAutoMode ? "Switch to Manual Mode" : "Switch to Auto Mode"} onPress={toggleAutoMode} />
        <Text style={styles.status}>Total Shuttlecock Count: {totalShuttlecockCount}</Text>
      </View>

      {/* Open User Manual Button */}
      <View style={styles.openUserManual}>
        <Button title="User Manual" onPress={openUserManual} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© Shuttle Rover 2024</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
            <Icon name="facebook" size={20} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/malithavisada/')}> 
            <Icon name="linkedin" size={20} color="#00acee" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Malitha-Gunathilaka')}>
            <Icon name="github" size={20} color="#" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Styles for the components in the App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    backgroundColor: '#4682b4',
    padding: 10,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',  // White color
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joystick: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#737778',  // Gray color
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin : 10,
  },
  horizontalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#ddd', // Light gray color
    borderRadius:50,
    padding: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#ddd',  // Light gray color
    borderRadius: 50,
    padding: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  speedControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    position: 'absolute',
    top: 3,
    right: 7,
  },
  successText: {
    color: '#56ed11',
    fontSize: 16,
    position: 'absolute',
    top: 3,
    right: 7,
  },
  openUserManual: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
    padding: 2,
    backgroundColor: '#f1f1f1', // Light gray color
    width: '100%',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 2,
  },
});