# Shuttle Rover

Shuttle Rover is a React Native application that controls a robot via an ESP8266 microcontroller. The robot can switch between manual and automatic modes, and it counts the number of shuttlecocks it collects.

## Features

- Manual mode: Control the robot's movements using directional buttons.
- Automatic mode: The robot moves autonomously to cover a predefined area.
- Speed control: Set the robot's speed to medium or fast.
- Shuttlecock counting: The robot counts the number of shuttlecocks it collects in both manual and automatic modes.
- User manual: Access the user manual from within the app.
- Social media links: Connect with the developer on Facebook, LinkedIn, and GitHub.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Malitha-Gunathilaka/ShuttleRover.git
   cd shuttle-rover

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npx react-native run-android
   ```
   # or
    ```bash
   npx react-native run-ios
   ```

## Configuration
    Update the esp8266Ip variable in App.js with the correct IP address of your ESP8266 microcontroller:

    ```JavaScript
    const esp8266Ip = 'http://192.168.1.156'; // Confirm this IP is correct each time you run
    ```

## Usage

1. Open the app on your mobile device.
2. Use the directional buttons to control the robot in manual mode.
3. Switch to automatic mode by pressing the "Switch to Auto Mode" button.
4. Set the robot's speed using the "Medium Speed" and "Fast Speed" buttons.
5. View the total shuttlecock count on the main screen.
6. Access the user manual by pressing the "User Manual" button.
7. Connect with the developer on social media using the icons in the footer.

## Screenshots

### Manual Mode
![Manual Mode](https://github.com/Malitha-Gunathilaka/ShuttleRover/blob/master/manual%20mode.jpg)

### Automatic Mode
![Automatic Mode](https://github.com/Malitha-Gunathilaka/ShuttleRover/blob/master/Auto%20mode.jpg)

<!-- ### User Manual
![User Manual](screenshots/user_manual.png) -->


## Contact

For any questions or feedback, please contact [Malitha Gunathilaka](mailto:malithavisada@gmail.com).

## Acknowledgements

- React Native https://reactnative.dev/ 
- Axios https://axios-http.com/
- FontAwesome https://fontawesome.com/
