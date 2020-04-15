import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Dimensions, StatusBar, Image, Button, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


// Get screen dimensions
const { heigh, width } = Dimensions.get('window');

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#2b7de9', '#fafafa']}>
      <View>
      <StatusBar
          barStyle = "light-content"
          // dark-content, light-content and default
          hidden = {false}
          //To hide statusBar
          backgroundColor = "#3a85be"
          //Background color of statusBar only works for Android
          translucent = {false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible = {true}
      />
      </View>
      <View>
        <Text style={styles.appTitle}>New neighbour</Text>
      </View>
      <View>
      <Image
          style = {styles.img}
          source={{
            uri: 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Famour.2Fcoaching-amoureux.2Fcest-quoi-belle-femme-temoignages-43206.2F14682626-1-fre-FR.2Fc-est-quoi-une-belle-femme-temoignages.2Ejpg/1200x1200/quality/80/crop-from/center/c-est-quoi-une-belle-femme-temoignages.jpeg'
          }}
      />
      </View>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Name" />
      </View>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Phone number" />
      </View>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Address" />
      </View>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="About me" />
      </View>
      <View>
      <TouchableHighlight
        style={styles.submit}
        onPress={() => this.submitSuggestion(this.props)}
        underlayColor='#fff'>
          <Text style={styles.submitText}>SAVE</Text>
      </TouchableHighlight>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    //justifyContent: 'center',
  },

  appTitle: {
    height : 55,
    backgroundColor : '#4ba8ee',
    width : width,
    color: '#fff',
    fontSize: 30,
    marginBottom: 1,
    fontWeight: '300',
    alignItems : 'center',
    paddingLeft : 70
  },

  //borderRadius style will help us make the Round Shape Image
  img: { 
    width: 140, 
    height: 140, 
    borderRadius: 100 / 2,
    margin : 10 
  
  },

  card: {
    backgroundColor: '#fff',
    width: width - 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius : 10,
    borderBottomRightRadius : 10,
    marginBottom : 20, 
    height : 70
  },
 
  input: {
    padding: 20,
    borderBottomWidth: 1,
    fontSize: 24,
    borderColor : '#efefef'
  },

  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:0,
    width : 80, 

},
submitText:{
    paddingTop: 3,
    paddingBottom:7,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#2b7de9',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
},
});
