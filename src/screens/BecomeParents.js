import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import NavBar from '../components/Navbar';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const {width} = Dimensions.get('window');
const CAROUSEL_HEIGHT = 150; // Adjust the height as needed

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH / 1.1;

const BecomeParents = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const Slides = [
    {
      id: 1,
      title: 'Himani Agrawal',
      position: 'Teacher',
      image: require('../assests/images/scicource.png'),
    },
    {
      id: 2,
      title: 'Devarshi patel',
      position: 'Teacher',
      image: require('../assests/images/scicource.png'),
    },
    {
      id: 3,
      title: 'Raj patel',
      position: 'Teacher',
      image: require('../assests/images/scicource.png'),
    },
    {
      id: 4,
      title: 'Jay patel',
      position: 'Teacher',
      image: require('../assests/images/scicource.png'),
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={{marginTop: 10}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.position}>{item.position}</Text>
      </View>
      <View style={{marginTop: 30, width: '80%'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: '#1E293B',
            fontWeight: '500',
          }}>
          I am one of the users of notepal. I like how the mentors teach and
          guide, and they will give tips and tricks for competitive exams.
        </Text>
      </View>
    </View>
  );
  const handlePageChange = index => {
    setActiveIndex(index);
  };
  return (
    <ScrollView style={styles.container}>
      <NavBar />
      <View
        style={{marginTop: 5, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40, color: '#1E293B', fontWeight: 500}}>
          What parents say
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.leftrightbutton}>
          <FontAwesome6 name="arrow-left-long" size={25} color="#fff" />
        </TouchableOpacity>

        <View style={{flex: 1}}>
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <Carousel
              ref={carouselRef}
              data={Slides}
              renderItem={renderItem}
              sliderWidth={600}
              itemWidth={600 - 40}
              //   sliderHeight={CAROUSEL_HEIGHT}
              //   itemHeight={CAROUSEL_HEIGHT}
              onSnapToItem={index => handlePageChange(index)}
              inactiveSlideOpacity={1}
            />
          </View>
          <View style={{marginTop: -10}}>
            <Pagination
              dotsLength={Slides.length}
              activeDotIndex={activeIndex}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.dotStyle}
              inactiveDotStyle={styles.inactiveDotStyle}
              inactiveDotOpacity={0.2}
              inactiveDotScale={0.8}
            />
          </View>
        </View>

        <TouchableOpacity style={[styles.leftrightbutton, {right: 10}]}>
          <FontAwesome6 name="arrow-right-long" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BecomeParents;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  slide: {
    alignItems: 'center',
  },
  leftrightbutton: {
    backgroundColor: '#3FC4FF',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#1E293B',
    fontWeight: '500',
  },
  position: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '400',
  },
  dotStyle: {
    width: 11,
    height: 11,
    borderRadius: 10,
    backgroundColor: '#3FC4FF',
    marginHorizontal: -5,
  },
  inactiveDotStyle: {
    backgroundColor: '#808080',
    width: 13,
    height: 13,
    borderRadius: 10,
    marginHorizontal: -5,
  },
});
0;
