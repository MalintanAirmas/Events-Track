import React from 'react'
import {
    Dimensions,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Platform,
} from 'react-native';
import AppActions from 'App/Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Sessions from 'App/Helper/Storages/Sessions';
const TAG = 'SPLASH SCREEN: ';
const SPLASH_TIMEOUT = 800; // 0.8s

class Splash extends React.Component {

    componentDidMount() {
        this.loadSessionPrepare();
    }

    loadSessionPrepare = () => {
        Sessions.prepare().then(dataSession => {
            // do check session in here
            if (dataSession && dataSession[Sessions.IS_LOGIN]) {
                setTimeout(() => {
                    this.props.setEventsData(dataSession[Sessions.EVENTS_DATA])
                    this.props.navigation.navigate('Home');
                }, SPLASH_TIMEOUT);
            }
            else {
                setTimeout(() => {
                    this.props.navigation.navigate('Register');
                }, SPLASH_TIMEOUT);
            }
        }).catch(err => {
            console.log(err)
        });
    }

    render() {
        return <View style={{ width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar
                animated={true}
                backgroundColor="white"
            />
            <Image
                style={{
                    position: 'absolute',
                    resizeMode: 'contain',
                    width: '75%',
                    height: 60,
                }}
                source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4E0BAQF68WbjCLRrQA/company-logo_200_200/0/1519878179973?e=2159024400&v=beta&t=mtSMMixViY1MN5ge9Z2fWIpSZMO7IaTIlOLpwQgw6p0' }}
            />
        </View>
    }
}

const mapStateToProps = state => ({
    eventsData: state.eventsData,
});

const mapDispatchToProps = dispatch => bindActionCreators(AppActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Splash);