# Shuttle Rover Project Report

## Project Overview
The Shuttle Rover project is a React Native application designed to control a robot using an ESP8266 microcontroller. The app allows users to send commands to the robot, set its speed, and toggle between manual and auto modes. The app also displays the total shuttlecock count and provides a user-friendly interface for controlling the robot.

## Features
- **Manual Control**: Users can manually control the robot's movement using directional buttons.
- **Speed Control**: Users can set the robot's speed to medium or fast.
- **Auto Mode**: Users can toggle between manual and auto modes.
- **Shuttlecock Counter**: Displays the total number of shuttlecocks.
- **User Manual**: Provides a link to the user manual.
- **Social Media Links**: Links to social media profiles.

## Technologies Used
- **Languages**:
  - JavaScript: The primary programming language used for the React Native application.
  - HTML/CSS: Used for styling and structuring the components.

- **Frameworks**:
  - **React Native**: For building the mobile application.
  - **Expo**: For developing, building, and deploying the React Native app.

- **Libraries**:
  - **Axios**: For making HTTP requests to the ESP8266.
  - **React Native Vector Icons**: For using icons in the app.

- **Tools**:
  - **Visual Studio Code**: The code editor used for development.
  - **Git**: For version control.
  - **Node.js**: For running the development server and managing dependencies.
  - **NPM/Yarn**: For package management.

- **Hardware**:
  - **ESP8266**: Microcontroller used to control the robot.



## App.js
The main component of the application. It includes the following functionalities:
- Sending commands to the robot.
- Setting the speed of the robot.
- Toggling between auto and manual modes.
- Fetching and displaying the total shuttlecock count.
- Providing a user interface for controlling the robot.

### Key Functions
- **sendCommand(command)**: Sends a movement command to the robot.
- **setSpeed(speed)**: Sets the speed of the robot.
- **toggleAutoMode()**: Toggles between auto and manual modes.
- **openUserManual()**: Opens the user manual URL.

### State Variables
- **totalShuttlecockCount**: Stores the total shuttlecock count.
- **errorMessage**: Stores error messages.
- **successMessage**: Stores success messages.
- **isAutoMode**: Stores the current mode (auto or manual).

## Future Enhancements
- **Battery Status Indicator**: Display the battery status of the robot.
- **Manual Speed Control**: Allow users to manually adjust the speed using a slider.
- **Obstacle Detection**: Display alerts when the robot detects obstacles.
- **Voice Commands**: Integrate voice commands for controlling the robot.
- **Logging and History**: Log commands and display a history of actions.
- **Customizable IP Address**: Allow users to set and save the IP address of the ESP8266.
- **Enhanced UI/UX**: Improve the UI with animations and better icons.
- **Multi-language Support**: Add support for multiple languages.
- **Remote Control via Internet**: Control the robot remotely over the internet.
- **Integration with Sensors**: Display data from additional sensors connected to the ESP8266.

## Conclusion
The Shuttle Rover project provides a robust and user-friendly interface for controlling a robot using a mobile application. With the proposed future enhancements, the app can become even more versatile and feature-rich, offering a comprehensive solution for robot control.
