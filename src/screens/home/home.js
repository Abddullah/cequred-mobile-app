import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getContent } from '../../store/action/action'
import Header from '../../components/header/Header'
import logo from '../../assets/logo/ic_main_logo.png'
import prevent from '../../assets/home/ic_prevent.png'
import emergency from '../../assets/home/ic_emergency.png'
import contact from '../../assets/home/ic_contacts.png'
import after from '../../assets/home/ic_after.png'
import course from '../../assets/home/Onlinecourse.png'
import support from '../../assets/home/start_ic_support.png'


const screenWidth = Dimensions.get('screen').width

class Home extends Component {
    constructor() {
        super()

        this.state = {
            lists: [
                {
                    name: 'FOREBYGGA',
                    image: prevent,
                    route: 'TabOne'
                },
                {
                    name: 'AKUT!',
                    image: emergency,
                    route: 'TabTwo'
                },
                {
                    name: 'EFTER',
                    image: after,
                    route: 'TabThree'
                },
                {
                    name: 'KONTAKTLISTA',
                    image: contact,
                    route: 'TabFour'
                },
                {
                    name: 'ONLINESUPPORT',
                    image: course,
                    route: 'WebView',
                    data: {
                        link: 'http://www.tryggareprivat.support/'
                    }
                },
                {
                    name: 'SUPPORT',
                    image: support,
                    route: 'WebView',
                    data: {
                        link: 'https://www.facebook.com/'
                    }
                },
            ]
        }
    }

    componentDidMount() {

        const { actions } = this.props

        actions.getContent().then((result) => {

        })
    }

    goToRoute(item) {
        const { navigation } = this.props

        if (item.route && item.data) {
            navigation.navigate(item.route, item.data)
        }
        else {
            navigation.navigate(item.route)
        }
    }

    _renderLists(item, index) {
        return (
            <View key={index} style={{
                paddingVertical: 13,
                marginVertical: 12,
                width: screenWidth / 2.5,
                paddingHorizontal: 30,
                backgroundColor: '#F5FCFF'
            }}>
                <TouchableOpacity onPress={() => this.goToRoute(item)}>
                    <View style={{ alignSelf: 'center' }}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={item.image}
                        />
                    </View>
                    <View style={{ marginTop: 10, alignSelf: "center" }}>
                        <Text style={{ fontSize: 10 }}>
                            {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        const { lists } = this.state
        return (
            <Header>

                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                    <View style={{ marginVertical: 10 }}>
                        <Image
                            style={{ width: 120, height: 103 }}
                            source={logo}
                        />
                    </View>

                    <View style={{
                        flex: 1,
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        width: '100%',
                        paddingVertical: '2%',
                        justifyContent: 'space-around',
                        flexDirection: 'row'
                    }}>
                        {
                            lists &&
                            lists.map((items, index) => {
                                return (
                                    this._renderLists(items, index)
                                )
                            })
                        }
                    </View>
                </ScrollView>
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
        actions: bindActionCreators({
            getContent
        }, dispatch)
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

