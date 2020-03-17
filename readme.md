# Recipe Puppy Demo App

This is a simple app that uses Recipe Puppy Api to fetch recipes into a list.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
You can checkout **v2_connection_status** branch to have an internet connection status feature in the App.
But since there is a [known](http://www.openradar.appspot.com/29913522) [issue](http://www.openradar.appspot.com/29913522) with instantly
retrieving the network connection state in iOS emulator, you will need to run this app from a real iOS Device.

### Installing

1. Install React Native as described at https://facebook.github.io/react-native/docs/getting-started.html#content

2. Clone this repository

3. Run `yarn install`

4. Run `react-native link`

## IOS

Run `pod install` inside this project's iOS directory when running the project from master.
Run `pod install` again when switching across branches.

## Dependencies

- [NetInfo](https://github.com/react-native-community/react-native-netinfo) - Accesing connection state
- [DeviceInfo](https://github.com/react-native-community/react-native-device-info) - Retrieving device info