# Shuttle Rover - Autonomous Shuttlecock Collection Robot

An autonomous robot designed to collect shuttlecocks from badminton courts, featuring both manual and automatic operation modes. This project consists of both hardware and software components, including a React Native mobile application for robot control.

## Features

### Robot Features

- Dual operation modes (Manual/Automatic)
- WiFi control through a mobile app
- Autonomous navigation using MPU6050
- Shuttlecock detection and counting system
- Automatic sorting mechanism with servo control
- Real-time status monitoring

### Mobile App Features

- Manual mode: Control the robot's movements using directional buttons
- Automatic mode: The robot moves autonomously to cover a predefined area
- Speed control: Medium and Fast modes
- Shuttlecock counting in real-time for both manual and automatic modes
- User manual access within the app
- Social media links for developer connection

## Hardware Requirements

- Arduino Mega + ESP8266 WiFi Module
- MPU6050 Gyroscope/Accelerometer
- Adafruit Motor Shield
- DC Motors (x4)
- Ultrasonic Sensor
- IR Sensor
- Servo Motor
- Power Supply

## Software Components

### Arduino Files

1. `wifi.ino`: WiFi connection using an existing network
2. `Direct Wi-Fi.ino`: Access Point mode configuration
3. `Arduino code.ino`: Main robot control logic

### React Native Mobile App

The app communicates with the ESP8266 microcontroller to control the robot:
- **Manual Mode**: Uses directional buttons for control
- **Automatic Mode**: Commands the robot to move autonomously
- **Speed Settings**: Options for Medium and Fast speed
- **Real-time Data**: Displays shuttlecock count and operational status

## Setup Instructions

### Robot Setup

1. Connect the hardware components according to the pin configurations in the Arduino code.
2. Upload the appropriate WiFi code to ESP8266 (either `wifi.ino` or `Direct Wi-Fi.ino`).
3. Upload `Arduino code.ino` to Arduino Mega.
4. Power up the system.

### Mobile App Setup

1. Clone the React Native project repository.
2. Update the `esp8266Ip` variable in `App.js` with the correct IP address of the ESP8266 microcontroller:
   ```javascript
   const esp8266Ip = 'http://192.168.1.156'; // Confirm this IP is correct each time you run
   ```
3. Run the app on your mobile device.

## Operation Modes

### Manual Mode

- Control through the mobile app.
- Directional control (Forward, Backward, Left, Right).
- Speed adjustment (Medium/Fast).
- Obstacle detection.
- Real-time shuttlecock counting.

### Automatic Mode

- Systematic court coverage pattern.
- Autonomous navigation.
- Automatic obstacle avoidance.
- Continuous shuttlecock collection.

## Network Configuration

### Option 1: Existing WiFi Network

- Update the SSID and password in `wifi.ino`.
- Connect the robot to your local network.

### Option 2: Direct Connection

- Use `Direct Wi-Fi.ino` for Access Point mode.
- Default SSID: "Shuttle Rover".
- Default Password: "12345678".
- Connect directly to the robot's WiFi network.

## Communication Protocol

The system uses Serial communication between ESP8266 and Arduino Mega:
- **Commands**: F (Forward), B (Backward), L (Left), R (Right), S (Stop)
- **Speed Control**: `SPEED:[value]`
- **Mode Switching**: `AUTO`, `MANUAL`
- **Shuttlecock Count Updates**: `TOTAL_SHUTTLE:[count]`

## Usage

1. Open the app on your mobile device.
2. Use the directional buttons to control the robot in manual mode.
3. Switch to automatic mode by pressing the "Switch to Auto Mode" button.
4. Set the robot's speed using the "Medium Speed" and "Fast Speed" buttons.
5. View the total shuttlecock count on the main screen.
6. Access the user manual by pressing the "User Manual" button.
7. Connect with the developer on social media using the icons in the footer.

