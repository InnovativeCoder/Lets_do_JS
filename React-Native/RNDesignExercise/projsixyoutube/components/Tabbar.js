import React, { Component } from 'react';
import { View, Text , StyleSheet, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.container}>
            <Icon name='home' size={25} />
            <Text style= {styles.mytext}> Home </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
            <Icon name='whatshot' size={25} />
            <Text style= {styles.mytext}> WhatsHot </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
            <Icon name='subscriptions' size={25} />
            <Text style= {styles.mytext}> Subscriptions </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
            <Icon name='add-alert' size={25} />
            <Text style= {styles.mytext}> Activity </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
            <Icon name='folder' size={25} />
            <Text style= {styles.mytext}> Account </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    tabbar:{
        backgroundColor: '#fff',
        height: 60,
        borderTopWidth: 2,
        borderColor: '#e5e5e5',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mytext:{
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 2,
        color: 'rgb(50,50,50)',
    },
})
