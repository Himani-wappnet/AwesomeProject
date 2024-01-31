import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const section3 = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
          width: '98%',
        }}>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 30, color: '#1E293B'}}>
            Why we are the best
          </Text>
          <Text style={{fontSize: 30, color: '#1E293B'}}>from others?</Text>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 12, color: '#737373'}}>
              We have best quality education courses and we provide
            </Text>
            <Text style={{fontSize: 12, color: '#737373'}}>
              education courses for students parents.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 110,
              height: 30,
              backgroundColor: '#3FC4FF',
              borderRadius: 20,
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{marginTop: 5}}>Get Courses</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.boxes}>
            <Image
              style={styles.icons}
              source={require('../assests/images/courses-icon.png')}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#1E293B', fontSize: 18}}>Best Teachers</Text>
          </View>

          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 10}}>
              We have skills teachers in communication, listening,
              collaboration, adaptability, empathy and patience. Other
              characteristics of effective teaching include an engaging
              classroom presence.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={[styles.boxes, {backgroundColor: '#798EE4'}]}>
            <Image
              style={styles.icons}
              source={require('../assests/images/courses-icon.png')}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#1E293B', fontSize: 18}}>Certificates</Text>
          </View>

          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 10}}>
              We have skills teachers in communication, listening,
              collaboration, adaptability, empathy and patience. Other
              characteristics of effective teaching include an engaging
              classroom presence.
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //   justifyContent: 'space-between',
          margin: 10,
          gap: 15,
          left: 85,
        }}>
        <View style={styles.card}>
          <View style={[styles.boxes, {backgroundColor: '#946FC6'}]}>
            <Image
              style={styles.icons}
              source={require('../assests/images/courses-icon.png')}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#1E293B', fontSize: 18}}>Best Price</Text>
          </View>

          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 10}}>
              We have skills teachers in communication, listening,
              collaboration, adaptability, empathy and patience. Other
              characteristics of effective teaching include an engaging
              classroom presence.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={[styles.boxes, {backgroundColor: '#A54E9F'}]}>
            <Image
              style={styles.icons}
              source={require('../assests/images/courses-icon.png')}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#1E293B', fontSize: 18}}>
              Creative Thinking
            </Text>
          </View>

          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 10}}>
              We have skills teachers in communication, listening,
              collaboration, adaptability, empathy and patience. Other
              characteristics of effective teaching include an engaging
              classroom presence.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={[styles.boxes, {backgroundColor: '#58AAF7'}]}>
            <Image
              style={styles.icons}
              source={require('../assests/images/courses-icon.png')}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#1E293B', fontSize: 18}}>
              Best Curriculum
            </Text>
          </View>

          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 10}}>
              We have skills teachers in communication, listening,
              collaboration, adaptability, empathy and patience. Other
              characteristics of effective teaching include an engaging
              classroom presence.
            </Text>
          </View>
        </View>
      </View>
      {/* <View>
        <Text>jiii</Text>
      </View> */}
    </View>
  );
};

export default section3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#946FC620',
    // height: 410,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 20,
    width: 200,
    height: 170,
  },
  boxes: {
    backgroundColor: '#3FC4FF',
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: 20,
    height: 20,
  },
});
