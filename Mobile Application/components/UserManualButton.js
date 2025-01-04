import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const UserManualButton = ({ theme }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openManual = () => {
    setModalVisible(true);
  };

  const closeManual = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.background }]}
        onPress={openManual}
      >
        <MaterialIcons name="menu-book" size={24} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.text }]}>
          {/* User Manual */}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeManual}
      >
        <View style={styles.modalContainer}>
          <View
            style={[styles.modalContent, { backgroundColor: theme.background }]}
          >
            <Text style={[styles.modalTitle, { color: theme.primary }]}>
              User Manual
            </Text>
            <ScrollView style={styles.scrollView}>
              <Text style={[styles.modalText, { color: theme.text }]}>
                <Text style={[styles.modalsubTitle, { color: theme.text }]}>
                  How to connect to the robot's Wi-Fi:
                </Text>
                {"\n"}1. Turn on the robot.
                {"\n"}2. Open the Wi-Fi settings on your device.
                {"\n"}3. Look for the Wi-Fi network named "Shuttle Rover".
                {"\n"}4. Connect to the "Shuttle Rover" network.
                {"\n"} SSID = Shuttle Rover
                {"\n"} password = 12345678
                {"\n"}5. Once connected, open the mobile app to control the
                robot.
                {"\n\n"}
                <Text style={[styles.modalsubTitle, { color: theme.text }]}>
                  How to control the robot:
                </Text>
                {"\n"}- Use the joystick to move the robot manually.
                {"\n"}- Press the stop button to halt the robot.
                {"\n"}- Use the speed controls to adjust the robot's speed.
                {"\n"}- Switch to auto mode for automatic control.
                {"\n\n"}
                <Text style={[styles.modalsubTitle, { color: theme.text }]}>
                  Button Functions:
                </Text>
              </Text>
              <Image
                source={require("../assets/images/joystick_layout.png")}
                style={styles.image}
              />
              <Text style={[styles.modalText, { color: theme.text }]}>
                - Joystick: Move the robot in the desired direction.
                {"\n"}- Stop: Immediately stop the robot.
                </Text>
              <Image
                source={require("../assets/images/speed.png")}
                style={styles.image}
              />
              <Text style={[styles.modalText, { color: theme.text }]}>
                {"\n"}- Speed Controls: Set the speed to medium or fast.
                </Text>
              <Image
                source={require("../assets/images/mode.png")}
                style={styles.image}
              />
              <Text style={[styles.modalText, { color: theme.text }]}>
                {"\n"}- Auto Mode: Enable automatic control of the robot.
                {"\n"}- Manual Mode: Enable manual control of the robot.
                {"\n\n"}
                <Text style={[styles.modalsubTitle, { color: theme.text }]}>
                  Additional Information:
                </Text>
                {"\n"}- Ensure the robot is fully charged before use.
                {"\n"}- Keep the robot within the designated area to avoid
                obstacles.
                {"\n"}- Regularly check for software updates to ensure optimal
                performance.
                {"\n\n"}
                <Text style={[styles.modalsubTitle, { color: theme.text }]}>
                  Safety Precautions:
                </Text>
                {"\n"}- Do not operate the robot near water or flammable
                materials.
                {"\n"}- Keep hands and clothing away from moving parts.
                {"\n"}- Supervise children when they are using the robot.
                {"\n\n"}
                <Text style={[styles.modalsubTitle, { color: theme.text }]}>
                  Troubleshooting Tips:
                </Text>
                {"\n"}- If the robot is not responding, check the battery level.
                {"\n"}- Ensure the robot is within range of the controller.
                {"\n"}- Restart the robot and controller if they are not
                connecting.
                {"\n\n"}
                <Text style={[styles.modalsubTitle, { color: theme.text }]}>
                  Maintenance Guidelines:
                </Text>
                {"\n"}- Clean the robot regularly to remove dust and debris.
                {"\n"}- Check for software updates and install them as needed.
                {"\n"}- Store the robot in a cool, dry place when not in use.
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={[styles.closeButton, { backgroundColor: theme.surface }]}
              onPress={closeManual}
            >
              <Text style={[styles.closeButtonText, { color: theme.primary }]}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    position: "absolute",
    top: 0,
    left: 10,
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    maxHeight: "90%",
    padding: 10,
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalsubTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 14,
  },
  scrollView: {
    maxHeight: "95%",
    marginBottom: 0,
  },
  image: {
    width: "100%",
    //height: 200,
    resizeMode: "contain",
    //marginVertical: 10,
  },
  closeButton: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
  },
});

export default UserManualButton;
