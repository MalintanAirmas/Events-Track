import React, { Component } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import * as Styles from 'App/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import * as Sessions from 'App/Helper/Storages/Sessions';
import { eventDummy } from 'App/Assets/DummyData/data';
import AppActions from 'App/Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Animatable from 'react-native-animatable';


// Pembuatan Variable Constanta Global
const { width, height } = Dimensions.get('window');
const PADDING_GLOBAL = 30;
const LOGIN_TIMEOUT = 800;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isLoading: false
        }
    }

    // Function Change Text
    onNameChange = (text) => { this.setState({ name: text }) }

    // Function Submit 
    onSubmit = () => {
        this.setState({ isLoading: true });
        let sessions = {
            [Sessions.API_TOKEN]: "",
            [Sessions.USER_NAME]: this.state.name,
            [Sessions.IS_LOGIN]: true,
            [Sessions.EVENTS_DATA]: eventDummy,
        };
        Object.keys(sessions).map((key) => {
            Sessions.setValue(key, sessions[key]);
        });
        this.props.setEventsData(eventDummy);
        setTimeout(() => {
            this.setState({ isLoading: false });
            this.props.navigation.navigate("Home");
        }, LOGIN_TIMEOUT);
    }

    // Components Loader
    _loader = () => {
        return (
            <View style={
                [
                    localStyles.btnSave,
                    Styles.Helpers.center,
                    { opacity: this.state.name ? 1 : 0.5 }
                ]
            }>
                <ActivityIndicator size="small" color={Styles.Colors.trueWhite} />
            </View>
        )
    }

    // Components Button Save
    _btnSave = () => {
        return (
            <TouchableOpacity
                onPress={this.onSubmit}
                disabled={!this.state.name}
            >
                <Animatable.View animation="zoomIn">
                    <View
                        style={
                            [
                                localStyles.btnSave,
                                Styles.Helpers.center,
                                { opacity: this.state.name ? 1 : 0.5 }
                            ]
                        }>
                        <Text
                            style={[localStyles._textBtnSave]}>
                            {"Let's Join"}
                        </Text>
                    </View>
                </Animatable.View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={localStyles.container}
            >
                <View
                    style={
                        [
                            Styles.Helpers.fullSize,
                            {
                                backgroundColor: 'white',
                                padding: PADDING_GLOBAL
                            }
                        ]
                    }>
                    <SafeAreaView>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <StatusBar
                                backgroundColor={"white"}
                                barStyle={'dark-content'} />

                            <Animatable.Image
                                animation="fadeInDown"
                                source={require('App/Assets/Images/img_register.png')}
                                style={
                                    {
                                        width: width - 60,
                                        resizeMode: 'contain',
                                        height: 387
                                    }
                                } />
                            <Animatable.View style={localStyles.nameContainer}>
                                <Text style={[{ fontSize: 10 }]}>Name : </Text>
                                <TextInput
                                    placeholder="Type your name .."
                                    style={{ fontSize: 12, marginTop: 10 }}
                                    onChangeText={this.onNameChange}
                                    value={this.state.name} />
                            </Animatable.View>

                            {/* Is Loading Condition */}
                            {this.state.isLoading ? this._loader() : this._btnSave()}

                            <SafeAreaView>
                            </SafeAreaView>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    nameContainer: {
        paddingVertical: 15,
        borderBottomColor: Styles.Colors.gray_var5,
        borderBottomWidth: 1,
        height: 80
    },
    btnSave: {
        backgroundColor: Styles.Colors.primaryLight,
        width: '100%',
        height: 50,
        borderRadius: 25,
        marginTop: PADDING_GLOBAL
    },
    _textBtnSave: {
        color: Styles.Colors.trueWhite
    }
})

const mapStateToProps = state => ({
    eventsData: state.eventsData,
});

const mapDispatchToProps = dispatch => bindActionCreators(AppActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
