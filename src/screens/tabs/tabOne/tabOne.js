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
import worksafety from '../../../assets/tabOne/worksafety.png'
import travelsecurity from '../../../assets/tabOne/travelsecurity.png'
import crisispreparing from '../../../assets/tabOne/crisispreparing.png'
import seasons from '../../../assets/tabOne/seasons.png'

const screenWidth = Dimensions.get('screen').width

class TabOne extends Component {
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
                {
                    name: 'ARBETSSKYDD',
                    image: worksafety
                },
                {
                    name: 'RESESAKERHET',
                    image: travelsecurity
                },
                {
                    name: 'KRISSEREDSKAP',
                    image: crisispreparing
                },
                {
                    name: 'SASONG',
                    image: seasons
                },
            ]
        }
    }

    componentDidMount() {
        const { data } = this.props
        if (data && data.sv && data.sv.Förebygga) {
            this.setState({
                pageContent: data.sv.Förebygga
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


export default connect(mapStateToProps, mapDispatchToProps)(TabOne);

