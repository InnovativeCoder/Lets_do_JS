import React from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';
import Body from './components/Body';
import data from './components/search.json';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Body video={data.items[0]}/>
        </ScrollView>
        <Navbar />
        <Tabbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
