import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../../../../components/header/Header'
import { StackActions, NavigationActions } from 'react-navigation'
import { WebView } from 'react-native-webview'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements'
// import Video from 'react-native-video';
const screenWidth = Dimensions.get('screen').width

class TabOneBrand extends Component {
    constructor() {
        super()

        this.state = {
            check_props: []
        }
    }

    componentDidMount() {
        const { navigation } = this.props
        if (navigation && navigation.state && navigation.state.params) {

            console.log(navigation.state.params, 'navigatshdyahs')

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

    _checkItem(item, index) {
        const { content } = this.state

        content[index].checked = !content[index].checked

        this.setState({
            content
        })
    }

    goBack() {
        const { navigation } = this.props

        console.log(navigation, 'navigations here')
        navigation.goBack()
    }

    _renderTitle(value) {
        return (
            <View style={{ paddingVertical: 10 }}>
                <Text style={{ color: '#f86b0c', fontSize: 20, fontWeight: 'bold' }}>
                    {value}
                </Text>
            </View>
        )
    }

    videoError(err) {
        console.log(err, 'error here')
    }

    _renderLinks(uri) {
        return (
            <View style={{ flex: 1, height: 190 }}>
                <WebView
                    style={{ flex: 1, height: 190 }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri }}
                    scrollEnabled={false}
                />
                {/* <Video source={{ uri: 'https://vimeo.com/311243304/4b79923474' }}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={(err) => this.videoError(err)}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo} /> */}
            </View>
        )
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

    _renderCheckBox(items, index) {
        return (
            <View>
                <CheckBox
                    title={items.value}
                    checked={items.checked}
                    onPress={() => this._checkItem(items, index)}
                    checkedColor={'#f86b0c'}
                    uncheckedColor={'#f86b0c'}
                    wrapperStyle={{ paddingVertical: -10 }}
                    // textStyle={{ paddingVertical: 5 }}
                    containerStyle={{ backgroundColor: '#efefef' }}
                />
            </View>
        )
    }

    _renderEachItem(item, index) {

        switch (item.name) {
            case "title":
                return this._renderTitle(item.value)
                break;
            case "link":
                if (item.value.indexOf('vimeo') !== -1) {
                    console.log(item.value, 'vimeo link')
                    let lastIndexSlash = item.value.split('/')
                    let vimeoUrl = `https://player.vimeo.com/video/${lastIndexSlash[3]}`
                    console.log(lastIndexSlash, 'id')
                    return this._renderLinks(vimeoUrl)
                    break
                }
                break;
            case "Content":
                return this._renderContent(item.value)
                break;
            case "points":
                return this._renderCheckBox(item, index)
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

                    <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                        <View style={{ paddingVertical: 10 }}>
                            <Text style={{ color: '#f86b0c', fontSize: 40, fontWeight: 'bold' }}>
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
    backgroundVideo: {
        flex: 1,
        width: '100%',
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
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


export default connect(mapStateToProps, mapDispatchToProps)(TabOneBrand);

