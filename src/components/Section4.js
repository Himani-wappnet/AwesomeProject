import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Section4 = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleLeftArrowPress = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightArrowPress = () => {
    if (currentIndex < coursesData.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const coursesData = [
    {imageSource: require('../assests/images/flask.png'), label: 'Science'},
    {imageSource: require('../assests/images/commerce.png'), label: 'Commerce'},
    {imageSource: require('../assests/images/maths.png'), label: 'Mathematics'},
    {imageSource: require('../assests/images/geo.png'), label: 'Geography'},
    {imageSource: require('../assests/images/english.png'), label: 'English'},
    {imageSource: require('../assests/images/english.png'), label: 'English'},
    {imageSource: require('../assests/images/english.png'), label: 'English'},
    {imageSource: require('../assests/images/english.png'), label: 'English'},
  ];

  const renderCourseBox = ({item}) => (
    <View style={[styles.coursesbox, {marginRight: 10, marginTop: 2, left: 5}]}>
      <View>
        <Image style={styles.icons1} source={item.imageSource} />
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{color: '#1E293B', fontWeight: 600}}>{item.label}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, color: '#1E293B'}}>
          Browse courses by categories{' '}
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          width: '40%',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 12, color: '#737373', textAlign: 'center'}}>
          We have best quality education courses and we provide education
          courses for students parents.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          height: 115,
          right: 10,
        }}>
        <TouchableOpacity
          style={[styles.leftrightbutton, {right: 10}]}
          onPress={handleLeftArrowPress}>
          <FontAwesome6 name="arrow-left-long" size={25} color="#fff" />
        </TouchableOpacity>

        <FlatList
          ref={flatListRef}
          data={coursesData}
          renderItem={renderCourseBox}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={100} // Adjust this value based on your design
          decelerationRate="fast"
          initialNumToRender={5} // Show the first 5 items initially
        />
        <TouchableOpacity
          style={[styles.leftrightbutton, {left: 10}]}
          onPress={handleRightArrowPress}>
          <FontAwesome6 name="arrow-right-long" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Section4;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 330,
  },
  icons1: {
    width: 35,
    height: 37,
  },

  coursesbox: {
    height: 110,
    width: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  leftrightbutton: {
    backgroundColor: '#3FC4FF',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
    // left: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
