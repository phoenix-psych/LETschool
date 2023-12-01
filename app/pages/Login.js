import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import colours from '../shared/Colours';
import { AntDesign } from '@expo/vector-icons'; 

export default function Login() {
  const slides = [
    { image: require('./../assets/images/launch1.png'), text: 'Choose Your Course!!!' },
    { image: require('./../assets/images/launch2.png'), text: 'Kit Delivered to Your Door' },
    { image: require('./../assets/images/launch3.png'), text: 'Watch Tutorials & Get Hands-On' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={styles.pagination}
        index={currentIndex}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.text}>{slide.text}</Text>
          </View>
        ))}
      </Swiper>

      <View style={styles.rectangle}>
        <TouchableOpacity 
        
        style={styles.button} activeOpacity={0.8}>
          <AntDesign name="google" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={{ color: 'white', fontSize: 20 }}>Sign in With Google</Text>
        </TouchableOpacity>
        <Image
          source={require('./../assets/images/letschoolLogo.png')}
          style={[styles.logo, styles.customLogoStyle]}
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: colours.primary,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
    top: '60%', // Adjust the top value as needed
    left: '20%', // Adjust the left value as needed
  },
  logo: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
    position: 'absolute',
    top: '5%',
    left: '15%',
  },
  
  customLogoStyle: {
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
    height: 100,
    position: 'absolute',
    top: '3%',
    left: '25%',
  },
  rectangle: {
    position: 'absolute',
    top: 500,
    left: 5,
    width: 350,
    height: 229,
    backgroundColor: 'rgba(68, 225, 21, 0.5)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 268,
    height: 278,
    resizeMode: 'contain',
    position: 'absolute',
    top: '10%',
    left: '15%',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dot: {
    backgroundColor: '#73D883',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 600,
    marginBottom: 300,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 600,
    marginBottom: 300,
  },
  pagination: {
    bottom: 10,
  },
});
