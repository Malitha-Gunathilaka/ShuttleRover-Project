# Shuttle Rover - Autonomous Shuttlecock Collection Robot

An autonomous robot designed to collect shuttlecocks from badminton courts, featuring both manual and automatic operation modes.

## Features

- Dual operation modes (Manual/Automatic)
- WiFi control through mobile app
- Autonomous navigation using MPU6050
- Shuttlecock detection and counting system
- Automatic sorting mechanism with servo control
- Real-time status monitoring

## Hardware Requirements

- Arduino Mega + ESP8266 WiFi Module
- MPU6050 Gyroscope/Accelerometer
- Adafruit Motor Shield
- DC Motors (x4)
- Ultrasonic Sensor
- IR Sensor
- Servo Motor
- Power Supply

## Software Structure

The project consists of three main Arduino files:
1. `wifi.ino` - WiFi connection using existing network
2. `Direct Wi-Fi.ino` - Access Point mode configuration
3. `Arduino code.ino` - Main robot control logic

## Setup Instructions

1. Connect the hardware components according to the pin configurations in the code
2. Upload the appropriate WiFi code to ESP8266 (either `wifi.ino` or `Direct Wi-Fi.ino`)
3. Upload `Arduino code.ino` to Arduino Mega
4. Power up the system

## Operation Modes

### Manual Mode
- Control through mobile app
- Directional control (Forward/Backward/Left/Right)
- Speed adjustment
- Obstacle detection
- Real-time shuttlecock counting

### Automatic Mode
- Systematic court coverage pattern
- Autonomous navigation
- Automatic obstacle avoidance
- Continuous shuttlecock collection

## Network Configuration

### Option 1: Existing WiFi Network
- Update SSID and password in `wifi.ino`
- Connect to your local network

### Option 2: Direct Connection
- Use `Direct Wi-Fi.ino` for Access Point mode
- Default SSID: "Shuttle Rover"
- Default Password: "12345678"
- Connect directly to robot's WiFi network

## Communication Protocol

The system uses Serial communication between ESP8266 and Arduino Mega:
- Commands: F (Forward), B (Backward), L (Left), R (Right), S (Stop)
- Speed control: "SPEED:[value]"
- Mode switching: "AUTO", "MANUAL"
- Shuttlecock count updates: "TOTAL_SHUTTLE:[count]"

## Contributing

Feel free to submit issues and enhancement requests!


