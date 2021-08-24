import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../../../components/header/Header'

import prevent from '../../../assets/tabTwo/firered.png'
import person from '../../../assets/tabTwo/firstaidred.png'
import emegencyill from '../../../assets/tabTwo/emegencyillred.png'
import trafficaccident from '../../../assets/tabTwo/trafficaccidentred.png'
import burglary from '../../../assets/tabTwo/burglaryred.png'
import theft from '../../../assets/tabTwo/theftred.png'
import violance from '../../../assets/tabTwo/violancered.png'
import robbery from '../../../assets/tabTwo/robberyred.png'
import computer from '../../../assets/tabTwo/computerred.png'
import waterdamage from '../../../assets/tabTwo/waterdamagered.png'
import electricaccident from '../../../assets/tabTwo/electricaccidentred.png'
import drowning from '../../../assets/tabTwo/drowningred.png'
import lostperson from '../../../assets/tabTwo/lostpersonred.png'
import naturaldisasters from '../../../assets/tabTwo/naturaldisastersred.png'
import terrorism from '../../../assets/tabTwo/terrorismred.png'
import garbagesorting from '../../../assets/tabTwo/garbagesortingred.png'


const screenWidth = Dimensions.get('screen').width

class TabTwo extends Component {
    constructor() {
        super()

        this.state = {
            lists: [
                {
                    name: 'BRAND',
                    image: prevent,
                    margin: true,
                },
                {
                    name: 'PERSONSKADA',
                    image: person,
                    margin: true
                },
                {
                    name: 'AKUT SJUKDOM',
                    image: emegencyill,
                    margin: true
                },
                {
                    name: 'TRAFIKOLYCKA',
                    image: trafficaccident,
                    margin: true
                },
                {
                    name: 'INBROTT',
                    image: burglary
                },
                {
                    name: 'STOLD',
                    image: theft
                },
                {
                    name: 'VALD & HOT',
                    image: violance
                },
                {
                    name: 'RAN',
                    image: robbery
                },
                {
                    name: 'IT-SKADA',
                    image: computer
                },
                {
                    name: 'VVS-SKADA',
                    image: waterdamage
                },
                {
                    name: 'ELOLYCKA',
                    image: electricaccident
                },
                {
                    name: 'VATTENOLYCKA',
                    image: drowning
                },
                {
                    name: 'FORSVUNNEN',
                    image: lostperson
                },
                {
                    name: 'NATURKATASTROF',
                    image: naturaldisasters
                },
                {
                    name: 'TERRORISM',
                    image: terrorism
                },
                {
                    name: 'MILJOSKADA',
                    image: garbagesorting
                },
            ]
        }
    }

    componentDidMount() {
        const { data } = this.props
        if (data && data.sv && data.sv.AKUT) {
            this.setState({
                pageContent: data.sv.AKUT
            })
        }

    }

    componentWillReceiveProps(props) {
        const { data } = props
        if (data && data.sv && data.sv.Förebygga) {
            this.setState({
                pageContent: data.sv.Förebygga
            })
        }
    }

    goToRoute(item) {
        const { navigation } = this.props

        const { pageContent } = this.state

        let obj
        if (pageContent && pageContent[item.name] && pageContent[item.name].content) {
            obj = {
                content: pageContent[item.name].content,
                title: item.name
            }
        } else {
            obj = {
                content: '',
                title: item.name
            }
        }

        navigation.navigate('TabTwoBrand', obj)

    }

    _renderLists(item, index) {
        return (
            <View key={index} style={{
                paddingVertical: 10,
                width: screenWidth / 4.1,
                marginTop: item.margin ? 0 : 2,
                marginHorizontal: 1,
                backgroundColor: '#F5FCFF'
            }}>
                <TouchableOpacity onPress={() => this.goToRoute(item)}>
                    <View style={{ alignSelf: 'center' }}>
                        <Image
                            style={{ width: 60, height: 60 }}
                            source={item.image}
                        />
                    </View>
                    <View style={{ marginTop: 4, alignSelf: "center" }}>
                        <Text style={{ fontSize: 9 }}>
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

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
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


export default connect(mapStateToProps, mapDispatchToProps)(TabTwo);

