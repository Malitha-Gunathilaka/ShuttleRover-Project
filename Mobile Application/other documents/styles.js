import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // Header styles for the App header component
  header: {
    backgroundColor: "#4361ee",
    padding: 16,
    marginTop: 35,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 15,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  headerText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: "center",
    flex: 1,
    marginHorizontal: 10,
  },

  statusIndicator: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },

  statusText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },

  // Joystick styles for the robot control buttons (forward, backward, left, right , stop)
  joystick: {
    width: 230,
    height: 230,
    backgroundColor: "#f0f2f5",
    borderRadius: 140,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: "#e0e0e0",
  },
  horizontalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#ddd", // Light gray color
    borderRadius: 32.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 5,
  },
  button1: {
    width: 50,
    height: 50,
    backgroundColor: "#ddd", // Light gray color
    borderRadius: 32.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 6,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonPressed: {
    backgroundColor: "#2d3fad",
    transform: [{ scale: 0.95 }],
  },

  // speed control buttons styles for the robot speed control buttons (medium, fast)
  speedControls: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginVertical: 10,
  },

  speedButton: {
    backgroundColor: "#1da1f2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    gap: 8,
  },

  speedButtonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "400",
  },

  // Auto and Manual mode switch styles
  modeSwitch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 25,
    marginVertical: 10,
    gap: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minWidth: 110,
  },
  modeSwitchText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "400",
  },

  // command status styles for the command status messages
  status: {
    fontSize: 18,
    marginTop: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    position: "absolute",
    top: 3,
    right: 7,
  },
  successText: {
    color: "#56ed11",
    fontSize: 16,
    position: "absolute",
    top: 3,
    right: 7,
  },

  // user manual button styles for the user manual button

  // Counter card styles for the total shuttlecock count
  counterBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 10,
    elevation: 3,
    margin: 10,
    gap: 0,
  },

  countNumber: {
    marginLeft: 5,
    marginRight: 37,
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e293b",
  },

  countLabel: {
    marginLeft: 60,
    fontSize: 16,
    color: "#64748b",
  },

  // footer styles for the App footer component
  footer: {
    alignItems: "center",
    padding: 2,
    backgroundColor: "#f1f1f1", // Light gray color
    width: "100%",
    elevation: 4,
  },
  footerText: {
    fontSize: 14,
    color: "#64748b",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    margin: 1,
    gap: 20,
  },
});
