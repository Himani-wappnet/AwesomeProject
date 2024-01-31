// NavBar.js
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleMenuItemPress = item => {
    navigation.navigate(item);
  };
  return (
    <View style={styles.navbar}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={require('../assests/images/logo.png')}
        />
      </View>
      <View style={{flexDirection: 'row', gap: 15, marginTop: 5}}>
        {[
          'Home',
          'Courses',
          'Become Teachers',
          'Become Parents',
          'Contact Us',
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleMenuItemPress(item)}>
            <Text
              style={{
                color: route.name === item ? '#3FC4FF' : '#1E293B',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity style={{marginTop: 5}}>
          <Text>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            bottom: 0,
            width: 70,
            height: 29,
            backgroundColor: '#3FC4FF',
            borderRadius: 20,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{marginTop: 3}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff', // Set your desired background color
  },
  tinyLogo: {
    width: 120,
    height: 35,
  },
});

export default NavBar;
