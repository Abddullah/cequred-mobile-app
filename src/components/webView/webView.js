import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { WebView } from 'react-native-webview'
import Header from '../header/Header'

class WebViewComponent extends Component {
    constructor() {
        super()

        this.state = {
            link: ''
        }
    }

    componentDidMount() {
        const { navigation } = this.props

        if (navigation && navigation.state && navigation.state.params) {
            let url = navigation.state.params.link

            this.setState({
                url
            })
            console.log(navigation, 'navigation')
        }
    }

    goBack() {
        const { navigation } = this.props

        navigation.goBack()
    }

    render() {
        const { url } = this.state
        return (
            <Header title={''} back={true} goBack={() => this.goBack()}>

                <View style={{ flex: 1, width: '100%' }}>

                    <View style={{ flex: 1 }}>
                        <WebView
                            style={{ flex: 1 }}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            startInLoadingState={true}
                            source={{ uri: url }}
                            startInLoadingState={true}
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
        width: 500,
        height: 500,
        alignItems: 'center',
        // backgroundColor: 'gray',
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


export default connect(mapStateToProps, mapDispatchToProps)(WebViewComponent);

