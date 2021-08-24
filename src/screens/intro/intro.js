import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../../components/header/Header'
import { StackActions, NavigationActions } from 'react-navigation'
import { WebView } from 'react-native-webview'
import Video from 'react-native-video'

const screenWidth = Dimensions.get('screen').width

class Intro extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    goBack() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);

    }

    render() {
        return (
            <Header title={'Introduktion'} back={true} goBack={() => this.goBack()}>

                <View style={{ flex: 1, width: '100%', backgroundColor: '#efefef' }}>

                    <View style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 50 }}>
                        <WebView
                            style={{ flex: 1 }}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            source={{ uri: 'https://player.vimeo.com/video/213710634' }}                            
                        />
                    </View>

                </View>

            </Header>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
});


function mapStateToProps(state) {
    return ({
        name: state.authreducer.NAME,
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        // actions: bindActionCreators({
        //     auth
        // }, dispatch)
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Intro);

