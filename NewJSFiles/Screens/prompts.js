import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
} from 'react-native';
import  data from '../../JSONfiles/Quests.json';

export default class prompts extends Component {
    
    constrendering(){
      <View>
        <ScrollView>
            <List>
              
                <ListItem
                  key={data.quest.new.busstop.name}
                  title={data.quest.new.busstop.name}
                  subtitle={data.quest.new.busstop.numQuestions}
                />
                <ListItem
                  key={data.quest.new.intersection.name}
                  title={data.quest.new.intersection.name}
                  subtitle={data.quest.new.intersection.numQuestions}
                />
                <ListItem
                  key={data.quest.new.sidewalk.name}
                  title={data.quest.new.sidewalk.name}
                  subtitle={data.quest.new.sidewalk.numQuestions}
                />
                
              
            </List>
          </ScrollView>
          </View>
    }

    render() {
      return (
        constrendering()
      );
    }
  }
  
  

  AppRegistry.registerComponent('prompts', () => [prompts]);
