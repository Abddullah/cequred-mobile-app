import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../../../components/header/Header'

import prevent from '../../../assets/tabOne/fire.png'
import person from '../../../assets/tabOne/firstaid.png'
import emegencyill from '../../../assets/tabOne/emegencyill.png'
import trafficaccident from '../../../assets/tabOne/trafficaccident.png'
import burglary from '../../../assets/tabOne/burglary.png'
import theft from '../../../assets/tabOne/theft.png'
import violance from '../../../assets/tabOne/violance.png'
import robbery from '../../../assets/tabOne/robbery.png'
import computer from '../../../assets/tabOne/computer.png'
import waterdamage from '../../../assets/tabOne/waterdamage.png'
import electricaccident from '../../../assets/tabOne/electricaccident.png'
import drowning from '../../../assets/tabOne/drowning.png'
import lostperson from '../../../assets/tabOne/lostperson.png'
import naturaldisasters from '../../../assets/tabOne/naturaldisasters.png'
import terrorism from '../../../assets/tabOne/terrorism.png'
import garbagesorting from '../../../assets/tabOne/garbagesorting.png'
import TaskSelection from './taskSelection';
import Icon from 'react-native-vector-icons/Feather'


const screenWidth = Dimensions.get('screen').width

class TabThree extends Component {
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
            ],
            taskSelection: false
        }
    }

    componentDidMount() {
        const { data } = this.props
        if (data && data.sv && data.sv.EFTER) {
            this.setState({
                pageContent: data.sv.EFTER
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

        navigation.navigate('TabOneBrand', obj)

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

    selectTask() {
        this.setState({
            taskSelection: !this.state.taskSelection
        })
    }

    render() {
        const { lists, taskSelection } = this.state
        return (
            <Header>

                {
                    taskSelection ?
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
                        :
                        <TaskSelection task={() => this.selectTask()} />
                }

                <View style={{ position: 'relative', width: '90%' }}>
                    <View style={{
                        borderRadius: 50,
                        position: 'absolute',
                        zIndex: 2,
                        bottom: 20,
                        shadowColor: 'grey',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.9,
                        shadowRadius: 2,
                        elevation: 5,
                        right: 0,
                        backgroundColor: '#fe6600'
                    }}>
                        <TouchableOpacity activeOpacity={0.8} style={{
                            paddingVertical: 15,
                            paddingHorizontal: 15,
                        }} onPress={() => this.selectTask()}>
                            {
                                taskSelection ?
                                    <Icon
                                        size={20}
                                        name={'x'}
                                    />
                                    :
                                    <Icon
                                        size={20}
                                        name={'plus'}
                                    />
                            }
                        </TouchableOpacity>
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


export default connect(mapStateToProps, mapDispatchToProps)(TabThree);

