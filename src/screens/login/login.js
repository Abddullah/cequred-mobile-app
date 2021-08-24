import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../../components/header/Header'
import logo from '../../assets/logo/ic_main_logo.png'
import google from '../../assets/logo/google.jpg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class Login extends Component {
    constructor() {
        super()

        this.state = {
        }
    }

    goSignUp() {
        const { navigation } = this.props

        navigation.navigate('SignUp')
    }

    render() {
        return (
            <Header title={'Tryggare Privat'} menu={true} color={'white'}>

                <View style={{ flex: 1, width: '100%', alignItems: 'center', backgroundColor: '#efefef' }}>

                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        {/* <View style={{ width: 135, height: 115 }}> */}
                        <Image
                            style={{ width: 120, height: 103 }}
                            source={logo}
                        />
                        {/* </View> */}
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: '600', fontSize: 17 }}>
                            {'Tryggare Privat'}
                        </Text>
                    </View>

                    <View style={{ flex: 1.5, width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={{ flexDirection: 'row', borderRadius: 3, backgroundColor: 'white', paddingVertical: 10, width: 200, justifyContent: 'center' }}>
                                <View style={{ width: 20, height: 20 }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={google}
                                    />
                                </View>
                                <View style={{ paddingLeft: 20 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'grey' }}>
                                        {'Logga in med Google'}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity onPress={() => this.goSignUp()}>
                                <View style={{ flexDirection: 'row', borderRadius: 3, backgroundColor: '#d0011b', paddingVertical: 10, width: 200, justifyContent: 'center' }}>
                                    <View style={{ width: 20, height: 20 }}>
                                        <Icon
                                            size={18}
                                            color={'white'}
                                            name={'email'}
                                        />
                                    </View>
                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                            {'Logga in med email'}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'grey', lineHeight: 20, fontSize: 14, textAlign: 'center', paddingVertical: 15 }}>
                            {'By continuing, you are indicating that you accept our '}<Text style={{ color: '#d81a60', textDecorationLine: 'underline' }}>{'Terms of Services '}</Text>{'and '}<Text style={{ color: '#d81a60', textDecorationLine: 'underline' }}>{'Privacy Policy.'}</Text>
                        </Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(Login);

