import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'


class HeaderComponent extends Component {
    constructor() {
        super()

        this.state = {
        }
    }

    componentDidMount() {

    }

    rightComponent() {
        return (
            <TouchableOpacity activeOpacity={0.7}>
                <View>
                    <Icon name={'more-vertical'} size={20} />
                </View>
            </TouchableOpacity>
        )
    }

    centerComponent(title) {
        const { color } = this.props
        return (
            <View>
                <Text style={{ fontWeight: 'bold', color: color ? color : null }}>{title ? title : 'Tryggare Privat'}</Text>
            </View>
        )
    }

    goBack() {
        const { goBack } = this.props

        goBack()
    }

    render() {
        const { children, back, title, menu } = this.props
        return (
            <View style={styles.container}>
                <View style={{width:'100%'}}>
                    <Header
                        backgroundColor={'#fe6600'}
                        placement="left"
                        containerStyle={{ height: 50, paddingBottom: 20 }}
                        statusBarProps={{
                            // hidden: true
                            backgroundColor: '#fe6600'
                        }}
                        leftComponent={back ? { icon: back ? 'arrow-back' : '', color: '#000', onPress: () => this.goBack() } : null}
                        centerComponent={this.centerComponent(title)}
                        rightComponent={!menu ? back ? null : this.rightComponent() : null}
                    />
                </View>
                {
                    children
                }
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
        position: 'relative',
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


export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

