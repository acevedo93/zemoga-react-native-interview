# ZEMOGA Native Technical Interview

### Objective

Create an app that lists all messages and their details from JSONPlaceholder.

### Instructions

This project was updated to the latest version of react-native with the help of the upgrade helper.
https://react-native-community.github.io/upgrade-helper/

In this project i used: Context (as state handler)

considering the size of the app I decided to use context as a state manager instead of redux.

To initialize the project, the following commands must be executed:

- npm install

- json-server --watch db.json

- npm run android
  as the database is localhost, use the ip of the machine instead of localhost, or with the android emulator open execute the command adb reverse tcp:3000 tcp:3000

- pod install inside the ios folder
- npm run ios

## third-party libraries were installed.

axios, react-native-vector-icons, react-navigation
