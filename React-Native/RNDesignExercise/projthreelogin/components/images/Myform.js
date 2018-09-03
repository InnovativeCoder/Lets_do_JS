import React, { Component } from 'react';
import {Text,Image, View, TextInput, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

export default class Myform extends Component {
    render() {
        return (
            <View style={style.container}>
                <TextInput
                placeholder="Username"
                />
                <TextInput
                placeholder="Password"
                style={StyleSheet.Input}
                />
                <TouchableOpacity style={StyleSheet.buttoncontainer}>
                    <Text style={style.buttontext}> Login </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet({
    container:{
        flex : 1,
        padding : 20,
    },
    input : {
        height : 40,
        backgroundcolor : 'rgba(255,255,255,0.8)',
        paddingleft : 10,
        marginBottom : 15,
    },
    buttoncontainer:{
        backgroundcolor : '#27ae60',
        paddingVertical : 15,
    },
    buttontext : {
        textAlign : 'center',
        color : '#fff',
        fontWeight : 'bold',
    },
})

