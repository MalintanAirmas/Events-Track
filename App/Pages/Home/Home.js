import {
    Title,
    Subtitle,
    Header,
    Left,
    Body,
    Right,
    Tab,
    Tabs,
    TabHeading,
    Container,
    DefaultTabBar
} from 'native-base'
import React, { Component } from 'react'
import {
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'
import * as Styles from 'App/Styles';
import Events from 'App/Pages/Events/Events';
import AppActions from 'App/Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TrackingList from '../TrackingList/TrackingList';
import * as Sessions from 'App/Helper/Storages/Sessions';

// Pembuatan Variable Constanta Global
const TAB_TICKET = 0;
const TAB_WISH_LIST = 1;
const { width, height } = Dimensions.get('window');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
        }
    }
    // Component Header 
    _renderHeader = () => {
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
                    <Image
                        source={require('App/Assets/Images/img_default_profile.png')}
                        style={{ width: 40, height: 40 }} />
                </Left>
                <Body>
                    <Title
                        style={
                            {
                                color: Styles.Colors.primaryLight,
                                fontSize: 10
                            }
                        }>
                        {"Name"}
                    </Title>
                    <Subtitle
                        style={{ color: Styles.Colors.primaryLight }}>
                        {Sessions.getValue(Sessions.USER_NAME)}
                    </Subtitle>
                </Body>
                <Right >
                    <Image
                        source={require('App/Assets/Images/logo.png')}
                        style={{ width: 30, height: 30, borderRadius: 15 }} />
                </Right>
            </Header>
        )
    }
    // Pengaturan defautl Tab Bar Native Base
    renderTabBar = (props: any) => {
        props.tabStyle = Object.create(props.tabStyle);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return <DefaultTabBar {...props} />;
    };
    render() {
        return (
            <Container>
                {this._renderHeader()}
                <Tabs
                    renderTabBar={this.renderTabBar}
                    scrollWithoutAnimation={false}
                    initialPage={this.state.currentTab}
                    onChangeTab={({ i }) => {
                        this.setState({ currentTab: i });
                    }}
                    tabBarUnderlineStyle={localStyles.tabBarUnderlineStyle}
                    locked={false}
                    tabContainerStyle={localStyles.tabContainerStyle}>
                    <Tab
                        tabStyle={{}}
                        heading={
                            <TabHeading
                                style={{ backgroundColor: Styles.Colors.trueWhite }}>
                                <Text
                                    style={
                                        {
                                            fontSize: 12,
                                            color: this.state.currentTab == TAB_TICKET ? Styles.Colors.primaryLight : Styles.Colors.black
                                        }
                                    }>
                                    {'Events'}
                                </Text>
                            </TabHeading>
                        }>

                        {/* Page View Events */}
                        <Events navigation={this.props.navigation} data={this.props.eventsData} />
                    </Tab>
                    <Tab
                        tabStyle={{}}
                        heading={
                            <TabHeading
                                style={{ backgroundColor: Styles.Colors.trueWhite }}>
                                <Text
                                    style={
                                        {
                                            fontSize: 12,
                                            color: this.state.currentTab == TAB_WISH_LIST ? Styles.Colors.primaryLight : Styles.Colors.black
                                        }
                                    }>
                                    {'Tracking List'}
                                </Text>
                            </TabHeading>
                        }>

                        {/* Page View Tracking List*/}
                        <TrackingList navigation={this.props.navigation} data={this.props.eventsData} />
                    </Tab>
                </Tabs>

            </Container>

        )
    }
}


const localStyles = StyleSheet.create({
    tabBarUnderlineStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        height: 3,
        width: width / 2,
        backgroundColor: Styles.Colors.primaryLight,
    },
    tabContainerStyle: {
        elevation: 0,
        borderBottomColor: Styles.Colors.gray_var3,
        borderBottomWidth: 1,
    },
});

const mapStateToProps = state => ({
    eventsData: state.eventsData,
});

const mapDispatchToProps = dispatch => bindActionCreators(AppActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);