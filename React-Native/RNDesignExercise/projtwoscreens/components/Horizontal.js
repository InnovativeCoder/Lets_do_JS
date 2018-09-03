import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    StyleSheet,
} from 'react-native';
export default class Horizontal extends Component {
    render() {
        return (
        <ScrollView horizontal ={true} pagingEnabled={true} style={styles.container}>
        <View style ={styles.outer}>
            <Text style ={styles.innerText}>Welcome to Nova</Text>
        </View>
        <View style ={styles.outer}>
            <Text style ={styles.innerText}>Best startup in India</Text>
        </View>
        <View style ={styles.outer}>
            <Text style ={styles.innerText}>You look awesome</Text>
        </View>
        </ScrollView>
        );
    }
}

const styles  = StyleSheet.create({
    container:{

    },
    outer:{
        backgroundColor:'#007bb6',
        flex :1,
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height,
        alignItems : 'center',
        justifyContent : 'center',
    },
    innerText:{
        color : '#fff',
        fontSize : 23,

    },
})

