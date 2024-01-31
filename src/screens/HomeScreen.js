import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import NavBar from '../components/Navbar';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [showSections, setShowSections] = useState(false);

  const handleMenuItemPress = item => {
    setActiveItem(item);

    if (item === 'Read More') {
      setShowSections(prevShowSections => !prevShowSections);
    } else {
      setShowSections(false);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <NavBar />
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <View style={{justifyContent: 'center'}}>
          <View>
            <Text style={styles.texts}>Get Best Quality</Text>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={styles.texts}>Education</Text>
              <Text style={[styles.texts, {color: '#3FC4FF'}]}>Courses</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={styles.texts}>By</Text>
              <Text style={[styles.texts, {color: '#946FC6'}]}>NotePal</Text>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text>
              We have best quality education courses and we provide education
            </Text>
            <Text>
              courses for students parents they can login and select course for
              learning
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10, top: 30}}>
            <TouchableOpacity
              style={{
                bottom: 4,
                width: 100,
                height: 35,
                backgroundColor: '#3FC4FF',
                borderRadius: 20,
                alignItems: 'center',
              }}>
              <Text style={{marginTop: 5}}>Get Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', gap: 5}}
              onPress={() => handleMenuItemPress('Read More')}>
              <Text>Read More</Text>

              <AntDesign name="arrowright" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            style={styles.bannerimg}
            source={require('../assests/images/banner-img.png')}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <View style={{justifyContent: 'center'}}>
          {/* ... your existing code ... */}
          {showSections && (
            <View>
              <Section2 />
              <Section3 />
            </View>
          )}
        </View>
        {/* ... your existing code ... */}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tinyLogo: {
    width: 120,
    height: 35,
  },
  bannerimg: {
    width: 300,
    height: 300,
  },
  texts: {
    fontSize: 40,
    color: '#1E293B',
    textAlign: 'left',
  },
});
