import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { checkUserAuth } from '../../store/action/action'
import Header from '../../components/header/Header'
import logo from '../../assets/logo/ic_main_logo.png'
import google from '../../assets/logo/google.jpg'
import Icon from 'react-native-vector-icons/Octicons'
import { TextField } from 'react-native-material-textfield';


class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            signIn: true,
            showPassword: true
        }
    }

    showPass() {
        const { showPassword } = this.state
        this.setState({
            showPassword: !showPassword
        })
    }

    checkUserAuth() {
        const { email } = this.state
        const { actions } = this.props

        var reg = new RegExp(`/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`)

        this.setState({
            signIn: false
        })

        // if (email) {

        //     if (reg.test(email)) {
        //         actions.checkUserAuth(email).then(() => {

        //         }).catch(() => {
        //             this.setState({
        //                 signIn: false
        //             })
        //         })
        //     }

        // } else {

        // }

    }

    render() {
        const { email, signIn, name, password, showPassword } = this.state
        return (
            <Header title={'Logga in'} menu={true} color={'white'}>

                <View style={{ flex: 1, width: '100%', alignItems: 'center', backgroundColor: '#efefef' }}>
                    {
                        signIn ?

                            <>
                                <View style={{ paddingVertical: 20, width: '80%', alignSelf: 'center' }}>
                                    <TextField
                                        label='Ange epostadress'
                                        value={email}
                                        keyboardType={'email-address'}
                                        onChangeText={(email) => this.setState({ email })}
                                    />
                                    <View style={{ alignSelf: 'flex-end', paddingVertical: 20 }}>
                                        <Button
                                            onPress={() => this.checkUserAuth()}
                                            color={'#d81a60'}
                                            title={'Nästa'}
                                        />
                                    </View>
                                </View>

                                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <View>
                                        <Text style={{ color: '#d81a60', textDecorationLine: 'underline' }}>{'Terms of Services '}</Text>
                                    </View>
                                    <View style={{ paddingLeft: '5%' }}>
                                        <Text style={{ color: '#d81a60', textDecorationLine: 'underline' }}>{'Privacy Policy.'}</Text>
                                    </View>
                                </View>
                            </>
                            :

                            <>
                                <View style={{ marginTop: 15, width: '80%', alignSelf: 'center' }}>
                                    <TextField
                                        label='Ange epostadress'
                                        value={email}
                                        keyboardType={'email-address'}
                                        onChangeText={(email) => this.setState({ email })}
                                    />
                                </View>
                                <View style={{ width: '80%', alignSelf: 'center' }}>
                                    <TextField
                                        label={`Ange förnamn och efternamn`}
                                        value={name}
                                        keyboardType={'default'}
                                        onChangeText={(name) => this.setState({ name })}
                                    />
                                </View>
                                <View style={{ width: '80%', alignSelf: 'center' }}>
                                    <View style={{ flexDirection: 'row', width: '100%' }}>
                                        <View style={{ width: '100%', position: 'relative' }}>
                                            <TextField
                                                label='Välj ett lösenord'
                                                value={password}
                                                secureTextEntry={showPassword ? true : false}
                                                keyboardType={'ascii-capable'}
                                                onChangeText={(password) => this.setState({ password })}
                                            />
                                        </View>
                                        <View style={{ position: 'absolute', zIndex: 2, bottom: 15, right: 0 }}>
                                            <TouchableOpacity onPress={() => this.showPass()}>
                                                {
                                                    showPassword ?
                                                        <Icon
                                                            color={'grey'}
                                                            name={'eye'}
                                                            size={20}
                                                        />
                                                        :
                                                        <Icon
                                                            color={'grey'}
                                                            name={'eye-closed'}
                                                            size={20}
                                                        />
                                                }
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ alignSelf: 'flex-end', paddingVertical: 30 }}>
                                        <Button
                                            onPress={() => this.props.navigation.navigate('Intro')}
                                            color={'#d81a60'}
                                            title={'Spara'}
                                        />
                                    </View>
                                </View>
                                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <View>
                                        <Text style={{ color: '#d81a60', textDecorationLine: 'underline' }}>{'Terms of Services '}</Text>
                                    </View>
                                    <View style={{ paddingLeft: '5%' }}>
                                        <Text style={{ color: '#d81a60', textDecorationLine: 'underline' }}>{'Privacy Policy.'}</Text>
                                    </View>
                                </View>
                            </>
                    }
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
        actions: bindActionCreators({
            checkUserAuth
        }, dispatch)
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

