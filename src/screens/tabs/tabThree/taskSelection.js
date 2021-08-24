import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../../../components/header/Header'
import Icon from 'react-native-vector-icons/Feather'

const screenWidth = Dimensions.get('screen').width

class TaskSelection extends Component {
    constructor() {
        super()

        this.state = {
        }
    }

    selectTask() {
        const { task } = this.props

        task()
    }

    render() {
        return (
            <View style={{ flex: 1, width: '100%', backgroundColor: '#efefef', paddingHorizontal: 15 }}>
                <ScrollView contentContainerStyle={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ color: 'grey', fontSize: 13, textAlign: 'center' }}>
                            {'Skapa en uppgift genom att trycka pa plus knappen.'}
                        </Text>
                    </View>


                </ScrollView>
            </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(TaskSelection);

