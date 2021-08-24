import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../../../../components/header/Header'
import { StackActions, NavigationActions } from 'react-navigation'
import { WebView } from 'react-native-webview'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements'

const screenWidth = Dimensions.get('screen').width

class TabTwoBrand extends Component {
    constructor() {
        super()

        this.state = {
            points: []
        }
    }

    componentDidMount() {
        const { navigation } = this.props
        if (navigation && navigation.state && navigation.state.params) {

            console.log(navigation.state.params, 'navigation state')

            let content = navigation.state.params.content
            let title = navigation.state.params.title

            if (content && title) {
                this.setState({
                    content,
                    title
                })
            }
        }
    }

    _renderTitle(value) {
        return (
            <View style={{ paddingVertical: 10 }}>
                <Text style={{ color: '#fc0031', fontSize: 20, fontWeight: 'bold' }}>
                    {value}
                </Text>
            </View>
        )
    }


    goBack() {
        const { navigation } = this.props

        console.log(navigation, 'navigations here')
        navigation.goBack()
    }

    _renderContent(value) {
        return (
            <View>
                <Text style={{ fontSize: 14, color: 'grey', lineHeight: 20 }}>
                    {value}
                </Text>
            </View>
        )
    }

    _renderPoints(point, pointIndex) {
        return (
            <View key={pointIndex} style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 5, alignItems: 'center' }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 30 }}>{`\u2022`}</Text>
                </View>
                <View style={{ width: '90%' }}>
                    <Text>{point}</Text>
                </View>
            </View>
        )
    }

    _renderEachItem(item, index) {

        switch (item.name) {
            case "title":
                return this._renderTitle(item.value)
                break;
            case "points":
                return this._renderPoints(item.value, index);
                break
            case "Content":
                return this._renderContent(item.value)
                break;
            default:
                break;
        }

    }

    render() {
        const { content, title } = this.state
        return (
            <Header title={title} back={true} goBack={() => this.goBack()}>

                <View style={{ flex: 1, width: '100%', backgroundColor: '#efefef', paddingHorizontal: 15 }}>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                        <View style={{ paddingVertical: 10 }}>
                            <Text style={{ color: '#fc0031', fontSize: 40, fontWeight: 'bold' }}>
                                {title}
                            </Text>
                        </View>


                        {
                            content && content.length ?
                                content.map((item, index) => {
                                    return this._renderEachItem(item, index)
                                })
                                :
                                <View style={{ alignItems: 'center' }}>
                                    <Text>
                                        {'no content available'}
                                    </Text>
                                </View>
                        }

                    </ScrollView>

                </View>

            </Header >
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


export default connect(mapStateToProps, mapDispatchToProps)(TabTwoBrand);

