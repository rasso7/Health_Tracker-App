# preview 👋

# health Tracker app

https://github.com/user-attachments/assets/ebd4aa3f-f9e4-4817-8356-a308c8a02108

🚀 Installation & Setup

Follow these steps to install and run the project:

1️⃣ Clone the Repository

Download the project from GitHub by running:

```sh
git clone <repository_url>
cd <project_directory>
```

2️⃣ Install Dependencies

Run the following command to install the required dependencies:

```sh
npm install
```

3️⃣ Start the Application

To launch the app, execute:

```sh
npm start
```

4️⃣ Running the App

Once the app starts, you can:

Open the app in an Android/iOS simulator.

Scan the QR code using the Expo Go app to run it on a physical device.

🚀 Health Tracker App
A React Native (Expo) app with Tailwind CSS, featuring a sleek UI for tracking health metrics.

📌 Features

🌍 Bottom Tab Navigator
Home: Welcome message + health metrics (steps, heart rate, sleep) using simulated data.
Health Data: Displays activity, nutrition, and sleep stats via a top tab navigator.
Profile: Dummy user profile with optional settings.

📊 Top Tab Navigator (Health Data Screen)
Activity: Step count, distance, calories burned.
Nutrition: Calorie intake, water consumption, food logs.
Sleep: Duration, quality, restfulness scores.

🔀 Navigation & Routing
React Navigation / Expo Router for smooth transitions.
Fully responsive & platform-specific dummy data for iOS (HealthKit) & Android (Health Connect).
Structured for easy integration with real health data APIs.

💡 Future-Ready: Code includes comments for seamless HealthKit & Health Connect integration.
