import React, { Component } from 'react';
import {Text,Image, View, Dimensions, StyleSheet, KeyboardAvoidingView} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logocontainer}></View>
                    <Image
                        style={styles.logo}
                        source={require('./images/Novaturient.png')}
                    /> 
                    <Text style={styles.title}>A simple Login app</Text>
                <View style={styles.myform}>
                    
                </View>
            </KeyboardAvoidingView>
           
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 2,
        width: Dimensions.get('window').width,
    },
    logocontainer:{
        flexGrow : 1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width : 100,
        height : 100,
        alignSelf: 'center',
    },
    myform:{
        flex : 1,
    },
})

