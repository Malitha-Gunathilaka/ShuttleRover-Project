#include <ESP8266WiFi.h> // Include the Wi-Fi library
#include <ESP8266WebServer.h> // Include the WebServer library

ESP8266WebServer server(80);

// Replace with your network credentials
const char* ssid = "SLT-4G-Malitha"; 
const char* password = "2LTQ8525K5";

int totalShuttlecockCount = 0; // Variable to store total shuttlecock count

void setup() {
  Serial.begin(9600);  // Initialize serial communication with Arduino MEGA (Serial1 on Mega)
  
  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("Connected to Wi-Fi"); 

  // Print the ESP8266 IP address on the local network
  Serial.print("ESP8266 IP address: ");
  Serial.println(WiFi.localIP());

  // Define routes for the server
  server.on("/", handleRoot); // Default route
  server.on("/move", handleMove); // Route for move command
  server.on("/setSpeed", handleSetSpeed); // Route for set speed command
  server.on("/totalShuttlecockCount", handleTotalShuttlecockCount); // New route for total shuttlecock count
  server.on("/auto", handleAuto); // New route for automatic mode
  server.on("/manual", handleManual); // New route for manual mode
  // Start the server
  server.begin();
  Serial.println("Server started.");
}

// Route handlers
void handleRoot() { 
  String html = "<html><head><title>Shuttle Rover Control</title></head><body><h1>Shuttle Rover</h1>";// HTML for the root page
  html += "<p>Use the mobile app to control the robot.</p>";
  html += "</body></html>";
  server.send(200, "text/html", html); // Send HTML response
}
// Route handlers
void handleMove() {
  String direction = server.arg("dir");
  Serial.print("Sending direction to Mega: ");
  Serial.println(direction); // Debugging log
  Serial.println(direction);  // Ensure newline is sent if Mega code expects it
  server.send(200, "text/plain", "Move command received");
}

void handleSetSpeed() {
  String speed = server.arg("value");
  Serial.print("SPEED:");
  Serial.println(speed);  // Send speed command to Arduino Mega
  server.send(200, "text/plain", "Speed set to: " + speed);
}

void handleTotalShuttlecockCount() {
  server.send(200, "text/plain", String(totalShuttlecockCount)); // Send total shuttlecock count
}

void handleAuto() {
  Serial.println("AUTO");  // Send auto command to Arduino Mega
  Serial.println("Sent AUTO command to Mega"); // Debugging log
  server.send(200, "text/plain", "Switched to automatic mode");
}

void handleManual() {
  Serial.println("MANUAL");  // Send manual command to Arduino Mega
  Serial.println("Sent MANUAL command to Mega"); // Debugging log
  server.send(200, "text/plain", "Switched to manual mode");
}

void loop() {
  server.handleClient();

  // Check for messages from the Mega to update total shuttlecock count
  if (Serial.available() > 0) {
    String input = Serial.readStringUntil('\n');
    if (input.startsWith("TOTAL_SHUTTLE:")) {
      totalShuttlecockCount = input.substring(14).toInt();
      Serial.print("Updated total shuttlecock count: ");
      Serial.println(totalShuttlecockCount);
    } 
  }
}
