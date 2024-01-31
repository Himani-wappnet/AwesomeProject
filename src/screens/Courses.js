import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavBar from '../components/Navbar';
import Section4 from '../components/Section4';

const Courses = () => {
  const cardData = [
    {
      title: 'The Complete Science Course',
      description:
        'We have the best quality education courses and provide education courses.',
      likes: 200,
      review: 4.9,
      dollar: 105.0,
      imageSource: require('../assests/images/scicource.png'),
    },
    {
      title: 'The Complete Science Course',
      description:
        'We have the best quality education courses and provide education courses.',
      likes: 200,
      review: 4.9,
      dollar: 105.0,
      imageSource: require('../assests/images/scicource.png'),
    },
    {
      title: 'The Complete Science Course',
      description:
        'We have the best quality education courses and provide education courses.',
      likes: 200,
      review: 4.9,
      dollar: 105.0,
      imageSource: require('../assests/images/scicource.png'),
    },
    {
      title: 'The Complete Science Course',
      description:
        'We have the best quality education courses and provide education courses.',
      likes: 200,
      review: 4.9,
      dollar: 105.0,
      imageSource: require('../assests/images/scicource.png'),
    },
    {
      title: 'The Complete Science Course',
      description:
        'We have the best quality education courses and provide education courses.',
      likes: 200,
      review: 4.9,
      dollar: 105.0,
      imageSource: require('../assests/images/scicource.png'),
    },
    {
      title: 'The Complete Science Course',
      description:
        'We have the best quality education courses and provide education courses.',
      likes: 200,
      review: 4.9,
      dollar: 105.0,
      imageSource: require('../assests/images/scicource.png'),
    },
    // Add similar data for the other cards...
  ];
  const renderCard = (data, index) => {
    return (
      <View key={index} style={styles.card}>
        <View>
          <Image style={styles.icons} source={data.imageSource} />
        </View>
        <View
          style={{
            backgroundColor: '#3FC4FF10',
            width: 110,
            height: 30,
            borderRadius: 5,
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{textAlign: 'center'}}>Science</Text>
        </View>
        <View style={{marginTop: 10, justifyContent: 'center'}}>
          <Text style={{fontSize: 16, color: '#1E293B', fontWeight: 600}}>
            {data.title}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            // width: '40%',
          }}>
          <Text style={{fontSize: 11, color: '#737373'}}>
            {data.description}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#3FC4FF',
            width: 130,
            height: 30,
            borderRadius: 20,
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{textAlign: 'center'}}>Buy Courses</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', marginTop: 10, gap: 8}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                backgroundColor: '#3FC4FF10',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.icons1}
                source={require('../assests/images/person.png')}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text>{data.likes}k</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, gap: 8}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                backgroundColor: '#946FC610',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.icons1}
                source={require('../assests/images/review.png')}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text>{data.review}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, gap: 8}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                backgroundColor: '#798EE410',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.icons1}
                source={require('../assests/images/coin.png')}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text>${data.dollar}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <NavBar />
      <Section4 />
      <View style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 30, color: '#1E293B', fontWeight: 600}}>
          Our top courses for you
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          width: '40%',
        }}>
        <Text style={{fontSize: 12, color: '#737373'}}>
          We have best quality education courses and we provide education
          courses for students parents.
        </Text>
      </View>

      <View>
        <View style={{flexDirection: 'row', gap: 10}}>
          {cardData.slice(0, 3).map((data, index) => renderCard(data, index))}
        </View>
        <View style={{flexDirection: 'row', gap: 10, marginBottom: 20}}>
          {cardData.slice(3).map((data, index) => renderCard(data, index + 3))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#3FC4FF05',
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
    padding: 10,
    width: '32%',
    height: 'auto',
    marginTop: 30,
  },
  icons: {
    width: 'auto',
    height: 145,
  },
  icons1: {
    width: 15,
    height: 15,
  },
});

{
  /* <View style={styles.card}>
        <View>
          <Image
            style={styles.icons}
            source={require('../assests/images/scicource.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#3FC4FF10',
            width: 110,
            height: 30,
            borderRadius: 5,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{textAlign: 'center'}}>Science</Text>
        </View>
        <View style={{marginTop: 10, justifyContent: 'center'}}>
          <Text style={{fontSize: 20, color: '#1E293B', fontWeight: 600}}>
            The Complete Science Course
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            // width: '40%',
          }}>
          <Text style={{fontSize: 12, color: '#737373'}}>
            We have best quality education courses and we provide education
            courses.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#3FC4FF',
            width: 130,
            height: 30,
            borderRadius: 20,
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{textAlign: 'center'}}>Buy Cources</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 25}}>
          <View style={{flexDirection: 'row', marginTop: 10, gap: 8}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                backgroundColor: 'red',
              }}></View>
            <View style={{justifyContent: 'center'}}>
              <Text>200k</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, gap: 8}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                backgroundColor: 'red',
              }}></View>
            <View style={{justifyContent: 'center'}}>
              <Text>200k</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, gap: 8}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                backgroundColor: 'red',
              }}></View>
            <View style={{justifyContent: 'center'}}>
              <Text>200k</Text>
            </View>
          </View>
        </View>
      </View> */
}
