import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../../components/header/Header'


const screenWidth = Dimensions.get('screen').width

class Contact extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    goBack() {
        const { navigation } = this.props

        navigation.goBack()
    }

    render() {
        return (
            <Header title={'Kontaklista'} back={true} goBack={() => this.goBack()}>


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


export default connect(mapStateToProps, mapDispatchToProps)(Contact);

