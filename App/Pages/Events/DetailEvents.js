import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    ImageBackground,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Subtitle,
    Button,
    Content
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppActions from 'App/Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Styles from 'App/Styles';


// Pembuatan Variable Constanta Global
const { width, height } = Dimensions.get('window');


class DetailEvents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: props.navigation.state.params['data']
        }
    }

    // ON PRESS BUTTON 
    _onAction = () => {
        if (this.state.data.isTracked) {
            this.props.removeTrackingList(this.state.data.id);
        } else {
            this.props.addTrackingList(this.state.data.id);
        }
        this.props.navigation.state.params['refresh']();

        // Mengubah status tracking events 
        this.setState(function (state, props) {
            return {
                data: { ...state.data, isTracked: !state.data.isTracked }
            };
        });
    }

    // Render Header 
    _renderHeader() {
        return (
            <Header
                androidStatusBarColor={Styles.Colors.primaryLight}
                style={
                    {
                        backgroundColor: Styles.Colors.trueWhite,
                        paddingTop: 10
                    }
                }>
                <Left>
                    <Button
                        transparent onPress={() => this.props.navigation.pop()}>
                        <Icon
                            name='chevron-left'
                            style={{ color: Styles.Colors.primaryLight }} />
                    </Button>
                </Left>
                <Body>
                    <Title
                        style={{ color: Styles.Colors.primaryLight, fontSize: 10 }}>
                        {"Detail Event"}
                    </Title>
                    <Subtitle
                        style={{ color: Styles.Colors.primaryLight }}>
                        {this.state.data.title}
                    </Subtitle>
                </Body>
                <Right />
            </Header>
        )
    }
    render() {
        return (
            <Container>
                {this._renderHeader()}
                <View>
                    <View
                        style={[localStyles.listCard]}>
                        <ImageBackground
                            source={{ uri: this.state.data.img }}
                            style={localStyles.ImageBackgroundListEvent}>
                            <View
                                style={localStyles.thumbnailListEvents}>
                                <View>
                                    <Text
                                        style={localStyles.titleListEvents}>
                                        {this.state.data.title}
                                    </Text>
                                    <View
                                        style={[Styles.Helpers.row, { alignItems: "center" }]}>
                                        <Icon
                                            name="money"
                                            size={20}
                                            color={Styles.Colors.trueWhite} />
                                        <Text
                                            style={{ fontSize: 20, color: "white", marginLeft: 10 }}>
                                            {`$ ${this.state.data.price} `}
                                        </Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={this._onAction}>
                                    <View
                                        style={
                                            [
                                                Styles.Helpers.center,
                                                localStyles.btnListEvents,
                                                {
                                                    backgroundColor: this.state.data.isTracked ? "black" : Styles.Colors.primary
                                                }
                                            ]
                                        }>
                                        <Text
                                            style={
                                                [
                                                    localStyles.textBtnListEvetns,
                                                    { color: Styles.Colors.trueWhite }
                                                ]
                                            }>
                                            {this.state.data.isTracked ? 'Remove' : 'Track'}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        <View
                            style={
                                {
                                    backgroundColor: Styles.Colors.black,
                                    width: "100%",
                                    height: height - 300,
                                    padding: 10
                                }
                            }>
                            <Content>
                                <View style={{ paddingBottom: 10 }}>
                                    <Text style={localStyles.textDesc} >{"Place : "}</Text>
                                    <Text style={localStyles.textDesc} >{this.state.data.address}</Text>
                                </View>
                                <View style={{ paddingBottom: 10 }}>
                                    <Text style={localStyles.textDesc} >{"Description : "}</Text>
                                    <Text style={localStyles.textDesc} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi illo dolor eaque sapiente eveniet deleniti quidem, accusamus facere qui fuga est labore excepturi illum non repellat rem laborum possimus vero.</Text>
                                </View>
                            </Content>
                        </View>
                    </View>

                </View>
            </Container>
        )
    }
}
const localStyles = StyleSheet.create({
    // List Events
    listCard: {
        width: "100%",
        marginBottom: 20
    },
    ImageBackgroundListEvent: {
        width: "100%",
        height: 300,
        justifyContent: "flex-end"
    },
    thumbnailListEvents: {
        backgroundColor: "rgba(52, 52, 52, 0.5)",
        width: "100%", height: 120,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 10,
        justifyContent: "space-between"
    },
    titleListEvents: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    textDesc: {
        color: 'white',
        fontSize: 12,
        marginTop: 5
    },
    btnListEvents: {
        height: 40,
        backgroundColor: Styles.Colors.primary
    },
    textBtnListEvetns: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },


})
const mapStateToProps = state => ({
    eventsData: state.eventsData,
});

const mapDispatchToProps = dispatch => bindActionCreators(AppActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailEvents);