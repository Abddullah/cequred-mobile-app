import React from 'react'
import {
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';
import { Image } from 'react-native'
import Home from '../screens/home/home'

import start from '../assets/tabIcons/ic_start.png'
import after from '../assets/tabIcons/aftericon.png'
import contact from '../assets/tabIcons/phonelist.png'
import prevent from '../assets/tabIcons/prevent.png'
import emergency from '../assets/tabIcons/emergency.png'


import TabOne from '../screens/tabs/tabOne/tabOne'
import TabTwo from '../screens/tabs/tabTwo/tabTwo'
import TabThree from '../screens/tabs/tabThree/tabThree'
import TabFour from '../screens/tabs/tabFour/tabFour'
import Intro from '../screens/intro/intro';
import TabOneBrand from '../screens/pages/tabOne/brand/brand'
import TabTwoBrand from '../screens/pages/tabTwo/brand/brand'
import WebView from '../components/webView/webView'
import Login from '../screens/login/login';
import SignUp from '../screens/signUp/signUp';


function icons(iconName) {
    return (
        <Image
            style={{ width: 20, height: 20 }}
            source={iconName}
        />
    );
}



const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Meny',
        }
    },
    TabOne: {
        screen: TabOne,
        navigationOptions: {
            tabBarLabel: 'Forebygga',
            
        },
    },
    TabTwo: {
        screen: TabTwo,
        navigationOptions: {
            tabBarLabel: 'AKUT!',
        }
    },
    TabThree: {
        screen: TabThree,
        navigationOptions: {
            tabBarLabel: 'EFTER',
        }
    },
    TabFour: {
        screen: TabFour,
        navigationOptions: {
            tabBarLabel: 'KONTAKTER',
        }
    },
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return icons(start)
                }
                else if (routeName === 'TabOne') {
                    return icons(prevent)
                }
                else if (routeName === 'TabTwo') {
                    return icons(emergency)
                }
                else if (routeName === 'TabThree') {
                    return icons(after)
                }
                else if (routeName === 'TabFour') {
                    return icons(contact)
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#000',
            labelStyle: {
                fontSize: 10,
            },
            activeBackgroundColor: '#fe9048',
            style: {
                backgroundColor: '#fe6600'
            }
        },
    }
);


const StackNavigator = createStackNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Intro: { screen: Intro },
    Home: { screen: TabNavigator },
    TabOneBrand: { screen: TabOneBrand },
    TabTwoBrand: { screen: TabTwoBrand },
    WebView: { screen: WebView },
}, {
        headerMode: 'none',
        // navigationOptions: ({ navigation }) => {
        //     console.log(navigation,'navigation navigate')
        // },
    });



const Navigation = createAppContainer(StackNavigator)

export default Navigation;