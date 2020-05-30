import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, StatusBar } from 'react-native';
import { Svg, G, Path, Circle } from 'react-native-svg';
import { Searchbar } from 'react-native-paper'
const { width, height } = Dimensions.get('screen');


const path = 'M558.11 147.25L558.11 492.75L156.32 492.75L93.39 432.77L93.39 147.25L558.11 147.25Z';






 const App = () => {
  const [value, setValue ] = React.useState(" ");




  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#dc0a2d" barStyle='light-content' />

      <Image source={require('./assets/images/camera.png')} style={styles.cameraStyle} />

      <View style={styles.cameraButtons}>


        <View style={styles.cameraButtonRed} />

        <View style={styles.cameraButtonYellow} />

        <View style={styles.cameraButtonGreen} />



      </View>
      
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={(text) => {
          setValue(text)
        }}
        value={value}
        style={styles.searchBar}
        inputStyle={{color: '#000'}}
      />
      
      <View style={styles.pad} />

      <Svg width={width} height={height / 2} viewBox="0 0 640 650">


        <G>

          <Path d={path} stroke={'#000'} fill='#fff' />
        </G>

        <Circle
          cx={width / 2 + 110}
          cy={175}
          r="10"
          stroke="black"
          strokeWidth="3"
          fill="crimson"
        />
        <Circle
          cx={width / 2 + 165}
          cy={175}
          r="10"
          stroke="black"
          strokeWidth="3"
          fill="crimson"
        />

        <Circle
          cx={width / 2.3}
          cy={height / 1.9}
          r="12"
          stroke="black"
          strokeWidth="3"
          fill="crimson"
        />


      </Svg>

      <View style={styles.keyboard}>

      </View>

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

  searchBar: {
    backgroundColor: 'white',
    borderWidth: 0,
    width: width * 0.65,
    marginLeft: 100,
    marginTop: height * 0.08,
  },

  cameraStyle: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginTop: 40,
    marginLeft: 15,
    width: 100,
    height: 100,
  },

  cameraButtons: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    width: 110,
    height: 30,
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginLeft: 110,
    marginTop: 20,

  },

  cameraButtonYellow: {
    alignSelf: 'center',
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 3,
    backgroundColor: 'yellow',

  },

  cameraButtonRed: {
    position: 'absolute',
    alignSelf: 'flex-start',
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 3,
    backgroundColor: '#fc012c',

  },

  cameraButtonGreen: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 3,
    backgroundColor: '#79b882',

  },

  pad: {
    position: 'absolute',
    left: ((width / 2) - ((width - 170) / 2)) + 10,
    marginTop: height * 0.30,
    zIndex: 1,
    width: width - 170,
    height: 150,
    backgroundColor: 'black',
    borderRadius: 10,

  },

  keyboard: {

  }





});


export default App;