import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { data } from '../../JSONfiles/Quests.json';

class currentQuestion extends Component {
    render(){
        <ScrollView>
            <List>
            
            <ListItem
              key={data.quest.new.busstop.Q1.prompt}
              title={data.quest.new.busstop.Q1.prompt}
              subtitle={data.quest.new.busstop.Q1.type}
            />
            <ListItem
              key={data.quest.new.busstop.Q2.prompt}
              title={data.quest.new.busstop.Q2.prompt}
              subtitle={data.quest.new.busstop.Q2.type}
            />
            <ListItem
              key={data.quest.new.busstop.Q3.prompt}
              title={data.quest.new.busstop.Q3.prompt}
              subtitle={data.quest.new.busstop.Q3.type}
            />
            <ListItem
              key={data.quest.new.busstop.Q4.prompt}
              title={data.quest.new.busstop.Q4.prompt}
              subtitle={data.quest.new.busstop.Q4.type}
            />
            <ListItem
              key={data.quest.new.busstop.Q5.prompt}
              title={data.quest.new.busstop.Q5.prompt}
              subtitle={data.quest.new.busstop.Q5.type}
            />
            
          
        </List>
        </ScrollView>
    }
}

export default currentQuestion;