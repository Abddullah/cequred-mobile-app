import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, Linking, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../../../components/header/Header'
import TaskSelection from '../tabThree/taskSelection';


const screenWidth = Dimensions.get('screen').width

class TabFour extends Component {
    constructor() {
        super()

        this.state = {
        }
    }

    componentDidMount() {
        const { data } = this.props
        if (data && data.sv && data.sv.AKUT) {
            this.setState({
                title: 'Kontaktlista',
                content: data.sv.contact
            })
        }

    }

    componentWillReceiveProps(props) {
        const { data } = props
        if (data && data.sv && data.sv.AKUT) {
            this.setState({
                title: 'Kontaktlista',
                content: data.sv.contact
            })
        }
    }


    goBack() {
        const { navigation } = this.props

        navigation.goBack()
    }

    dialCall = (value) => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = `tel:${value}`;
        }
        else {
            phoneNumber = `telprompt:${value}`;
        }

        Linking.openURL(phoneNumber);
    };

    _renderTitle(value) {
        return (
            <View style={{ paddingBottom: 10 }}>
                <Text style={{ color: '#fd0032', fontSize: 20, fontWeight: 'bold' }}>
                    {value}
                </Text>
            </View>
        )
    }

    _renderContent(value) {
        return (
            <View style={{ paddingBottom: 5 }}>
                <Text style={{ color: '#505050', lineHeight: 25, fontSize: 13 }}>
                    {value}
                </Text>
            </View>
        )
    }

    openLink(link) {
        Linking.openURL(`http://${link}`)
    }

    _renderWebLink(value) {
        return (
            <View style={{ paddingBottom: 10 }}>
                <Text onPress={() => this.openLink(value)} style={{ color: '#f86b0c', fontWeight: 'bold', fontSize: 15 }}>
                    {` ${value}`}
                </Text>
            </View>
        )
    }

    _renderPhoneLinks(value) {
        return (
            <Text onPress={() => this.dialCall(value)} style={{ color: '#f86b0c', fontWeight: 'bold', fontSize: 15 }}>
                {` ${value}`}
            </Text>
        )
    }

    checkLink(link, index) {
        var reg = new RegExp(`^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$`)
        if (link.match(reg)) {
            return this._renderWebLink(link)
        } else {
            return this._renderPhoneLinks(link)
        }
    }

    _renderEachItem(item, index) {

        switch (item.name) {
            case "title":
                return this._renderTitle(item.value)
                break;
            case "link":
                return this.checkLink(item.value, index);
                break
            case "Content":
                return this._renderContent(item.value)
                break;
            default:
                break;
        }

    }

    render() {
        const { title, content } = this.state
        return (
            <Header title={'Kontaktlista'} back={true} goBack={() => this.goBack()}>

                <View style={{ flex: 1, width: '100%', backgroundColor: '#efefef', paddingHorizontal: 10 }}>
                    
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
        data: state.contentReducer.DATA,
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        // actions: bindActionCreators({
        //     auth
        // }, dispatch)
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(TabFour);

