import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <ImageBackground style={styles.headerbg}
                source ={require('../img/headerbg.jpeg')} >

                <View style = {styles.headercontainer}>
                    <View style = {styles.profilepiccontainer}>
                        <Image
                            style={styles.mypic}
                            source={require('../img/profilepic.jpg')}
                        />
                    </View>
                    <Text style={styles.name}>Innovative Coder</Text>
                    <Text style={styles.liner}>Community and Social Modulator</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        headerbg: {
            flex: 1,
            width: null,
            alignSelf: 'stretch',
        },
        headercontainer:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            backgroundColor:'rgba(0,0,0,0.6)',
        },
        profilepiccontainer:{
            width: 180,
            height: 180,
            // borderRadius: 100,
            // borderWidth: 15,
            // borderColor:'<put your color>',
        },
        mypic:{
            flex: 1,
            width: null,
            alignSelf: 'stretch',
            borderRadius: 90,
            borderWidth: 3,
            borderColor: '#fff'
        },
        name:{
            marginTop: 18,
            fontSize: 18,
            color: '#fff',
            fontWeight:'bold',
        },
        liner:{
            color:'#fff',
            marginTop: 5,
            fontSize: 15,
            fontStyle: 'italic',
        },
    }
)