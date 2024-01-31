import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import NavBar from './Navbar';

const ContactUs = () => {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={{flexDirection: 'row', gap: 25, padding: 10}}>
        <View style={{width: '33%'}}>
          <View>
            <Image
              style={styles.tinyLogo}
              source={require('../assests/images/logo.png')}
            />
            <Text style={{marginTop: 10, color: '#1E293B', fontWeight: '400'}}>
              We have best quality education courses and we provide education
              courses for students parents.
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 20, marginTop: 10}}>
            {['#3B599820', '#D6297615', '#00ACEE20', '#FF000015'].map(
              (color, index) => (
                <View
                  key={index}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: color,
                  }}
                />
              ),
            )}
          </View>
        </View>

        <View style={{flexDirection: 'row', gap: 50}}>
          <View>
            <Text style={styles.textheading}>Quick Links</Text>
            <View style={{marginTop: 10}}>
              <Text style={styles.footertext}>About Us</Text>
              <Text style={styles.footertext}>Courses</Text>
              <Text style={styles.footertext}>Become a Teacher</Text>
              <Text style={styles.footertext}>Become a Parent</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textheading}>More Links</Text>
            <View style={{marginTop: 10}}>
              <Text style={styles.footertext}>Sign in</Text>
              <Text style={styles.footertext}>Sign up</Text>
              <Text style={styles.footertext}>Buy Courses</Text>
              <Text style={styles.footertext}>Contact Us</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textheading}>Our Newsletter</Text>
            <View style={{marginTop: 10}}>
              <Text style={styles.footertext}>
                Get subscribe our newsletter
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Enter your email add"
                  keyboardType="numeric"
                />
              </View>
              <View
                style={{
                  height: 40,
                  width: 45,
                  backgroundColor: '#946FC6',
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}></View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#1E293B20',
          marginTop: 20,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 30,
          gap: 10,
        }}>
        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 20,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            top: 2,
          }}>
          <Text style={{color: '#1E293B', fontWeight: 500, fontSize: 11}}>
            C
          </Text>
        </View>
        <View>
          <Text style={styles.footertext1}>NotePal</Text>
        </View>
        <View style={{height: 23, width: 2, backgroundColor: '#1E293B'}} />
        <View>
          <Text style={styles.footertext1}> All Rights Reserved 2023</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#F1F1FC',
  },
  tinyLogo: {
    width: 120,
    height: 35,
  },
  textheading: {
    fontSize: 18,
    color: '#1E293B',
    fontWeight: '500',
  },
  footertext: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '400',
    marginBottom: 10,
  },
  input: {
    height: 40,
    // margin: 12,
    // borderWidth: 1,
    backgroundColor: '#fff',
    borderRightWidth: 0,
    borderRadius: 5,
    padding: 10,
  },
  footertext1: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '400',
  },
});
