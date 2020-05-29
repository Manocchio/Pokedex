import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, StatusBar } from 'react-native';
import {Svg, G, Path,Circle} from 'react-native-svg';

const {width, height} = Dimensions.get('screen');


const path = 'M558.11 147.25L558.11 492.75L156.32 492.75L93.39 432.77L93.39 147.25L558.11 147.25Z';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#dc0a2d" barStyle='light-content' />
     <Image source={require('./assets/images/camera.png')} style={styles.cameraStyle}/>


      <Text style = {styles.searchBar}>searchBar</Text>
     
     
      <Svg width = {width} height = {height / 2} viewBox= "0 0 640 650">
        <G>
          <Path d={path} stroke={'#fff'} fill='#fff'/>
        </G>

        <Circle
            cx= {width / 2 + 110}
            cy= {175}
            r="10"
            stroke="black"
            strokeWidth="3"
            fill="crimson"
          />
        <Circle
            cx= {width / 2 + 165}
            cy= {175}
            r="10"
            stroke="black"
            strokeWidth="3"
            fill="crimson"
          />

        <Circle
            cx= {width / 2.3}
            cy= {height / 1.9}
            r="12"
            stroke="black"
            strokeWidth="3"
            fill="crimson"
          />
          
      </Svg>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dc0a2d',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  searchBar : {
    color: '#fff',
    marginTop: height * 0.08,
  },

  cameraStyle: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginTop: 40,
    marginLeft: 15,
    width: 100,
    height: 100,
  }
});
