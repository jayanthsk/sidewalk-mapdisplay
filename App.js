import React from 'react';

import { 
  StyleSheet,
  Text, 
  View, 
  TouchableOpacity,  
  ActivityIndicator, 
  AsyncStorage,
  TabNavigator,
  StackNavigator,
  AppRegistry,
  ScrollView,List,ListItem,
  WebView,
  PermissionsAndroid } from 'react-native';

//StyleSheet is used for basic readability. I did not go too indepth about it.
//Text and View are pretty self-explanatory in terms of necessity. 
//Touchable opacity is to control actions done in button format. used to make sure buttons are pressed.
//Activity indicator is the rotating swirly thing that is used to depict if something is loading or not.
//AppRegistry is used to ensure app is, well, registered. Without this, the app will not function when ejected.
//WebView is used to depict the map itself
//PermissionsAndroid is an API which would allow for basic permissions to be gained. I used it for GPS

//Async Storage was used previously. It is not used anymore. Its usage included writing to the local json file
//TabNavigator and StackNavigator both were obviously for navigation purposes. However, it was due to version deprecation, that they were never used after
//ScrollView, List and ListItem were initially used for paning. Not anymore. They too were deprecated in the recent versions to be used in this project.

//JSON files depicted in the app below.
import data from './JSONfiles/Quests.json';
//above is used for setting up the questing mechanism

//JS files which were useful
import {prompts} from './NewJSFiles/Screens/prompts.js';
//import currentQuestion from './NewJSFiles/Screens/currentQuestion';
//above are used for navigation. in the end decided it was a time constraint to implement them.
//currentQuestion is commented out because it used List and List item. These are now deprecated.

//Html Files
//const sourceFile = require('./NewHTMLFiles/Dolomites.html');

//global variables used below. I decided to use global variables instead of state for a few things.
var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'https://overpass-turbo.eu/map.html?Q=%2F*This%20is%20an%20example%20Overpass%20query.Try%20it%20out%20by%20pressing%20the%20Run%20button%20above!You%20can%20find%20more%20examples%20with%20the%20Load%20tool.*%2Fnode%20%20(47.65290031414818%2C-122.30813831090926%2C47.65422467473971%2C-122.30624467134474)%3Bout%20geom%3B';
var granted = true;

//function meant to request access to location permission.
export async function requestLocationPermission() {
  try {
    granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'MapDisplay Location Permission',
        'message': 'MapDisplay needs access to your GPS ' +
                   'so you can manage quests properly.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use GPS locationing")
      this.setState = {
        actualizationMessage: 'I see the light in the edge of the tunnel'
      }
      //this lets me see if what I did actually works via the AVD
    } else {
      console.log("permission denied")
      this.setState = {
        actualizationMessage: 'I am one with the darkness'
      }
      //this lets me see if what I did actually works via the AVD
    }
  } catch (err) {
    console.warn(err)
  }
}

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading:true,
      dataSource:[],
      dataSource: data.quest,
      questTypeNew: data.quest.new,
      questTypeExisting: data.quest.existing,
      scalesPageToFit: false,
      actualizationMessage: ''
    }
  }
  
  componentDidMount() {
    this.setState({
      isLoading:false,
      dataSource: data.quest,
      questTypeNew: data.quest.new,
      questTypeExisting: data.quest.existing
    })
  }

  onPress1(){
    const IDK = data.quest.new.busstop.Q1.prompt
    console.log(IDK);
  }
  onPress2(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        console.log('success UW', request.responseText);
        console.log('space');
      } else {
        console.warn('error');
      }
    };

  request.open('GET', 'https://overpass-turbo.eu/map.html?Q=%2F*This%20is%20an%20example%20Overpass%20query.Try%20it%20out%20by%20pressing%20the%20Run%20button%20above!You%20can%20find%20more%20examples%20with%20the%20Load%20tool.*%2Fnode%20%20(47.65290031414818%2C-122.30813831090926%2C47.65422467473971%2C-122.30624467134474)%3Bout%20geom%3B');
  request.send();
  }
  onPress3(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        console.log('success Dolomites', request.responseText);
        console.log('space');
      } else {
        console.warn('error');
      }
    };

  request.open('GET', 'https://overpass-turbo.eu/map.html?Q=%2F**%2F[out%3Ajson]%3Brel%20%20[place%3Dregion]%20%20["region%3Atype"%3D"mountain_area"]%20%20["name%3Aen"%3D"Dolomites"]%3B%2F%2F%20show%20the%20outlineout%20geom%3B%2F%2F%20the%20geom%20value%20apparently%20lets%20us%20see%20the%20outline%2F%2F%20Dont%20think%20it%20was%20mentioned%20in%20the%20Wiki%2F%2F%20turn%20the%20relation%20into%20an%20areamap_to_area%3B%2F%2F%20get%20all%20peaks%20in%20the%20areanode%20%20[natural%3Dpeak]%20%20(area)%3Bout%20body%20qt%3B');
  request.send();
  }

  

  questStart(){
    return(
      <View>
        <View style={styles.myView}>
            <Text> </Text>
            <Text style = {styles.myText}>OpenSidewalks Trial V10</Text>
        </View>
        

        <View style = {styles.container}>
          <TouchableOpacity 
                onPress = {this.onPress1}
                style = {styles.v1}
          >

            <View>
              <Text style={{color:'white'}}>{this.state.questTypeNew.busstop.name}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress = {this.onPress2}
            style = {styles.v1}
          >
            <View>
              <Text style={{color:'white'}}>UW Fountain data</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress = {this.onPress3}
            style = {styles.v3}
          >
            <View>
              <Text style={{color:'white'}}>hyperionSend</Text>
            </View>
          </TouchableOpacity>       
        </View>

        
        
      
    </View>
    );
}

mapLoad(){
  //This is the method that would allow for location permissions
  requestLocationPermission()

  return(
    <View style ={{flex:1}}>
        <View style={styles.myView}>
            <Text> </Text>
            <Text style = {styles.myText}>{this.state.actualizationMessage}</Text>
        </View>
        

        <View style = {styles.container}>
          <TouchableOpacity 
                onPress = {this.onPress1}
                style = {styles.v1}
          >

            <View>
              <Text style={{color:'white'}}>{this.state.questTypeNew.busstop.name}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress = {this.onPress2}
            style = {styles.v1}
          >
            <View>
              <Text style={{color:'white'}}>UW Fountain data</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress = {this.onPress3}
            style = {styles.v3}
          >
            <View>
              <Text style={{color:'white'}}>Dolomite Mountain data</Text>
            </View>
          </TouchableOpacity>       
        </View>
    <View style={{flex:1}}>
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={true}
          source={{uri: DEFAULT_URL}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
    </View>
    </View>
  );
}

render() {
  
  if(this.state.isLoading){
    return(
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
      </View>
    )
  }
    return (
      this.mapLoad()
    );
  }
}

/*
const Tabs = TabNavigator({
  Me: {
    screen: prompts,
    navigationOptions: {
      tabBarLabel: 'prompts',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  Feed: {
    screen: currentQuestion,
    navigationOptions: {
      tabBarLabel: 'current question',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  }, 
});

const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
*/
//This is commented out because this kind of navigation is out-dated. 
//The modules used in this version are slightly deprecated in the version of react-native I am using.

const styles = StyleSheet.create({
  myView:{
    backgroundColor:'blue'
  },
  flexSettings:{
    flex: 1
  },
  myText:{
    color: '#ffffff'
  },
  container:{
    flexDirection:'row',
    height:100
  },
  v1:{
    flex:1,
    backgroundColor:'#00aaaa',
    padding:10,
  },
  v3:{
    flex:1,
    backgroundColor:'red',
    padding:10,
  }
});

AppRegistry.registerComponent('App', () => [App]);