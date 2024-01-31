import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const section2 = () => {
  return (
    <View>
      <View
        style={{
          margin: 10,
          backgroundColor: '#946FC6',
          width: '95%',
          height: 105,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}>
            <View style={styles.boxes}>
              <Image
                style={styles.icons}
                source={require('../assests/images/courses-icon.png')}
              />
            </View>
            <View>
              <Text style={styles.boxtext1}>500+</Text>
              <Text style={styles.boxtext2}>Total Courses</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}>
            <View style={styles.boxes}>
              <Image
                style={styles.icons}
                source={require('../assests/images/teacher-icon.png')}
              />
            </View>
            <View>
              <Text style={styles.boxtext1}>250+</Text>
              <Text style={styles.boxtext2}>Total Teachers</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}>
            <View style={styles.boxes}>
              <Image
                style={styles.icons}
                source={require('../assests/images/parents-icon.png')}
              />
            </View>
            <View>
              <Text style={styles.boxtext1}>10k+</Text>
              <Text style={styles.boxtext2}>Total Parents</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default section2;

const styles = StyleSheet.create({
  boxes: {
    backgroundColor: '#fff',
    width: 65,
    height: 65,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxtext1: {
    fontSize: 30,
    color: '#fff',
  },
  boxtext2: {
    fontSize: 12,
    color: '#fff',
  },
  icons: {
    width: 30,
    height: 30,
  },
});
