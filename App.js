import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Orientation from 'react-native-orientation';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/HomeScreen';
import Courses from './src/screens/Courses';
import Signup from './src/screens/Signup';
import BecomeParents from './src/screens/BecomeParents';
import ContactUs from './src/components/ContactUs';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    Orientation.lockToLandscape();

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Become Parents" component={BecomeParents} />
        <Stack.Screen name="Contact Us" component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
