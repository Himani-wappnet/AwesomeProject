import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Signup = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          height: 260,
        }}>
        <View
          style={{
            backgroundColor: '#946FC6',
            width: '50%',
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginTop: 40}}>
              <Image
                style={styles.img}
                source={require('../assests/images/teachers.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                margin: 5,
              }}>
              <View>
                <Text style={{fontSize: 25, fontWeight: 300, color: '#fff'}}>
                  Join as a
                </Text>
                <Text style={{fontSize: 25, fontWeight: 700, color: '#fff'}}>
                  Teacher
                </Text>
              </View>

              <View style={{marginTop: 10, width: '70%'}}>
                <Text style={{fontSize: 11, fontWeight: 400, color: '#fff'}}>
                  If you want join as a teacher and you want work with us then
                  you can join us.
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  bottom: 0,
                  width: 70,
                  height: 29,
                  backgroundColor: '#3FC4FF',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <Text style={{color: '#fff'}}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#3FC4FF',
            width: '49%',
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                justifyContent: 'center',
                width: '45%',
                // alignItems: 'center',
                marginLeft: 30,
                // backgroundColor: 'red',
              }}>
              <View>
                <Text style={{fontSize: 25, fontWeight: 300, color: '#fff'}}>
                  Join as a
                </Text>
                <Text style={{fontSize: 25, fontWeight: 700, color: '#fff'}}>
                  Parents
                </Text>
              </View>

              <View
                style={{
                  marginTop: 10,
                  width: '100%',
                  //   backgroundColor: 'red',
                  //   marginLeft: 30,
                }}>
                <Text style={{fontSize: 11, fontWeight: 400, color: '#fff'}}>
                  If you want join as a teacher and you want work with us then
                  you can join us.
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  bottom: 0,
                  width: 70,
                  height: 29,
                  backgroundColor: '#946FC6',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <Text style={{color: '#fff'}}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 40}}>
              <Image
                style={styles.img1}
                source={require('../assests/images/parents.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
  img: {
    width: 190,
    height: 220,
  },
  img1: {
    width: 175,
    height: 200,
  },
});
