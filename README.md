Food-Zone Application 
<br />

This app has been created from scratch using the 
React Native Cli

LIBRARIES USED:
1.@react-navigation/native
2.@react-navigation/native-stack
3.react-native-reanimated
4.Use of useWindowDimensions() prop of react native
5.React-Redux
6.Redux-Toolkit

NOTE: Don't use the latest version of reanimated since it is icompatible 
Please downgrade to version 3.3.0 for fluent animation.

Please modify your babel.config.js file, and add the below code for reanimated injection dependencies.
<br/>
plugins: [
      'react-native-reanimated/plugin'
    ]
<br/>

NOTE: FOR TESTING THE SIGNING AND SIGHNUP USING FIREBASE OR AUTHENTICATION PLEASE CONFIGURE YOUR PROJECT FOR FIREBASE SETUP AND CREATE YOUR OWN GOOGLE-SERVICES.JSON FILE.
Since these files cannot be attached with repo for privacy.
Rest all the setup for firebase is already done, all you have to do is to create your own google-services.json file.

For UI and other components I have used static data, you can replace it with Api data accordingly.


Author ---- Amir Husain