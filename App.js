import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Font } from 'expo';

// You can import from local files


// or any pure javascript modules available in npm

export default class App extends Component {
    renderB() {
      <View style={styles.stars}>
        <FontAwesome name="star" style={styles.stars}/>
        <FontAwesome name="star" style={styles.stars}/>
        <FontAwesome name="star" style={styles.stars}/>
        <FontAwesome name="star" style={styles.stars}/>
        <FontAwesome name="star" style={styles.stars}/>
      </View>
    }

    render() {
        return(
          <View style={styles.container}>
            <View style={styles.hotelBox}>
              <View  style={styles.caretRight}>
                <FontAwesome style={styles.ft18} name="angle-right"/>
              </View>
              <Image style={styles.hotelImage} source={require('./assets/bitmap.png')} />
              <View style={styles.hotelContent}>
                <Text>Hotel Cezar</Text>
                <View style={styles.stars}>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                </View>
                <Text style={styles.fontChild}><FontAwesome name="map-marker" /> 772 Augustus Viaduct</Text>
                <View style={styles.showPrice}>
                  <Text style={styles.textPadding}>
                  Usual Price  <Text style={{fontWeight: 'bold'}}> $240 </Text></Text>
                  <Text style={styles.textPadding}>Buy at <Text style={{fontWeight: 'bold'}}> $40 </Text> </Text>
                </View>
              </View>
            </View>
            <View style={styles.hotelBox}>
              <View  style={styles.caretRight}>
                <FontAwesome style={styles.ft18} name="angle-right"/>
              </View>
              <Image
                style={styles.hotelImage}
                source={require('./assets/bp2.png')} />
              <View style={styles.hotelContent}>
                <Text>Sunset Oak Hotel</Text>
                <View style={styles.stars}>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                </View>
                <Text style={styles.fontChild}><FontAwesome name="map-marker" /> 973 Rocio Bridge</Text>
                <View style={styles.showPrice}>
                  <Text style={styles.textPadding}>
                  Usual Price  <Text style={{fontWeight: 'bold'}}> $240 </Text></Text>
                  <Text style={styles.textPadding}>Buy at <Text style={{fontWeight: 'bold'}}> $40 </Text> </Text>
                </View>
              </View>
            </View>
            <View style={styles.hotelBox}>
              <View  style={styles.caretRight}>
                <FontAwesome style={styles.ft18} name="angle-right"/>
              </View>
              <Image
                style={styles.hotelImage}
                source={require('./assets/bp3.png')} />
              <View style={styles.hotelContent}>
                <Text>Bronze Spring Hotel</Text>
                <View style={styles.stars}>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                  <FontAwesome name="star" style={styles.stars}/>
                </View>
                <Text style={styles.fontChild}><FontAwesome name="map-marker" /> 946 Gerhold Greens apt.183</Text>
                <View style={styles.showPrice}>
                  <Text style={styles.textPadding}>
                  Usual Price  <Text style={{fontWeight: 'bold'}}> $240 </Text></Text>
                  <Text style={styles.textPadding}>Buy at <Text style={{fontWeight: 'bold'}}> $40 </Text> </Text>
                </View>
              </View>
            </View>

            <View style={styles.hotelBox}>
              <View  style={styles.caretRight}>
                <FontAwesome style={styles.ft18} name="angle-right"/>
              </View>
              <Image
                style={styles.icon} source={require('./assets/iconFriend.png')} />
              <View style={(styles.hotelConten, {marginLeft:10})}>
                <Text>Refer a Friend</Text>
              <Text style={styles.fontRegular}>Refer a Friend and get 10,000 StayCay rewards point!</Text>
            </View>
          </View>
          <View style={styles.hotelBox}>
            <View  style={styles.caretRight}>
              <FontAwesome style={styles.ft18} name="angle-right"/>
            </View>
            <Image
              style={styles.icon}
              source={require('./assets/iconLearnMore.png')} />
            <View style={(styles.hotelConten, {marginLeft:10})}>
              <Text>Learn More</Text>
              <Text style={styles.fontRegular}>Learn more about how StayCay Works!</Text>
            </View>
          </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  hotelImage:{
    width: 110,
    height: 112,
  },
  icon:{
    width: 17,
    height: 16,
    margin:10,
    marginTop:5,
  },
  fontRegular:{
    fontSize: 14,
    color: '#575F66',
    maxWidth :250,
    lineHeight: 24,
  },
  fontChild:{
    fontSize: 11,
    color: '#575F66',
  },
  showPrice:{
    flexDirection: 'row',
  },
  textPadding:{
    paddingRight: 10,
    marginTop: 17,
    color: '#575F66',
    fontSize: 12,
  },

  caretRight:{
    position: 'absolute',
    top: 0,
    right: 15,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ft18:{
    fontSize:18,
    color: '#ABAFB2',
  },
 hotelBox:{
   marginTop: 5,
   backgroundColor: '#fff',
   padding: 10,
   flexDirection: 'row',
 },

 stars:{
   flexDirection: 'row',
   marginRight: 5,
   marginBottom :5,
   marginTop :5,
 },

 hotelContent:{
   padding :5,
   paddingLeft: 21,
   flexDirection: 'column',
 },
});
