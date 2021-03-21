import React, { Component } from 'react'
import { View, Text, Image, FlatList, ScrollView, Animated, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import * as Styles from 'App/Styles';
const { width, height } = Dimensions.get('window');
const GRID = "GRID";
const LIST = "LIST";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
            mode: LIST
        }
    }
    // Render Events 
    _renderEvents = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => { this.props.navigation.navigate('DetailEvents', { data: item, refresh: () => { this.setState({ refresh: true }) } }) }}>
                <View
                    style={
                        [
                            Styles.Helpers.row,
                            this.state.mode == LIST ? localStyles.listCard : localStyles.girdCard
                        ]
                    }>
                    <ImageBackground
                        source={{ uri: item.img }}
                        style={
                            [
                                this.state.mode == LIST ? localStyles.ImageBackgroundListEvent : localStyles.ImageBackgroundGridEvent,
                                { position: "relative" }
                            ]
                        }>
                        {item.isTracked && (
                            <View style={
                                {
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    padding: 5,
                                    backgroundColor: Styles.Colors.primary
                                }
                            }>
                                <Text
                                    style={
                                        {
                                            color: Styles.Colors.trueWhite,
                                            fontSize: this.state.mode == LIST ? 12 : 10,
                                            fontWeight: 'bold'
                                        }
                                    }>
                                    {"Tracked"}
                                </Text>
                            </View>
                        )}
                        <View
                            style={this.state.mode == LIST ? localStyles.thumbnailListEvents : localStyles.thumbnailGridEvents}>
                            <View>
                                <Text
                                    style={this.state.mode == LIST ? localStyles.titleListEvents : localStyles.titleGridEvents}>
                                    {item.title}
                                </Text>
                                <Text
                                    style={this.state.mode == LIST ? localStyles.addressListEvents : localStyles.addressGridEvents}
                                    numberOfLines={this.state.mode == LIST ? 2 : 1}
                                    ellipsizeMode={'tail'}>
                                    {item.address}
                                </Text>
                            </View>
                            <View
                                style={
                                    [
                                        Styles.Helpers.center,
                                        this.state.mode == LIST ? localStyles.btnListEvents : localStyles.btnGridEvents
                                    ]
                                }>
                                <Text
                                    style={this.state.mode == LIST ? localStyles.textBtnListEvetns : localStyles.textBtnGridEvetns}>
                                    {'Detail'}
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }
    renderEvents(numColumns = 1) {
        const { data } = this.props;
        return (
            <FlatList
                onScroll={(e) => {
                    this.state.scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
                contentContainerStyle={{ flexGrow: 1, paddingTop: 80 }}
                data={data}
                numColumns={numColumns}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => "listDataEvent" + item.id + "_" + index}
                renderItem={this._renderEvents}
            />
        )
    }
    // Render Header 
    renderModeHeader() {
        const diffClamps = new Animated.diffClamp(this.state.scrollY, 0, 45)
        const traslateY = diffClamps.interpolate({
            inputRange: [0, 40],
            outputRange: [0, -80]
        })
        return (
            <View
                style={
                    {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1
                    }
                }>
                <Animated.View
                    style={
                        [
                            Styles.Helpers.row,
                            localStyles.headerMode,
                            localStyles.shadow,
                            {
                                transform: [{ translateY: traslateY }]
                            }
                        ]
                    }>
                    <Text
                        style={[{ fontSize: 12 }]}>
                        {"View Mode"}
                    </Text>
                    <View
                        style={[Styles.Helpers.row,]}>
                        <TouchableOpacity
                            onPress={() => this.setState({ mode: LIST })}>
                            <Image source={require('App/Assets/Icon/icon_list.png')} style={[Styles.Helpers.xxsImgBox, { tintColor: this.state.mode == LIST ? Styles.Colors.primaryLight : Styles.Colors.gray_var8, marginRight: 20 }]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ mode: GRID })}>
                            <Image source={require('App/Assets/Icon/icon_grid.png')} style={[Styles.Helpers.xxsImgBox, { tintColor: this.state.mode == LIST ? Styles.Colors.gray_var8 : Styles.Colors.primaryLight }]} />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        )
    }
    render() {
        return (
            <View>
                {this.renderModeHeader()}
                {/* IF List */}
                {this.state.mode == LIST && this.renderEvents()}
                {/* IF Grid */}
                {this.state.mode == GRID && this.renderEvents(2)}
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    imgStyle: {
        width: 94,
        height: 94,
        borderRadius: 15
    },
    headerMode: {
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: Styles.Colors.trueWhite
    },
    // List Events
    listCard: {
        height: 300,
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
    addressListEvents: {
        color: 'white',
        fontSize: 12,
        marginTop: 5
    },
    btnListEvents: { height: 30 },
    textBtnListEvetns: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    // Grid Events
    girdCard: {
        height: width / 2,
        width: width / 2,
        borderWidth: 1,
        borderColor: "white"
    },
    ImageBackgroundGridEvent: {
        width: "100%",
        height: (width / 2) - 2,
        justifyContent: "flex-end"
    },
    thumbnailGridEvents: {
        backgroundColor: "rgba(52, 52, 52, 0.5)",
        width: "100%", height: width / 4,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 10,
        justifyContent: "space-between"
    },
    titleGridEvents: {
        color: 'white',
        fontSize: 12,
        fontWeight: "bold"
    },
    addressGridEvents: {
        color: 'white',
        fontSize: 8,
        marginTop: 5
    },
    btnGridEvents: { height: 20 },
    textBtnGridEvetns: {
        color: 'white',
        fontSize: 12,
        fontWeight: "bold"
    }
})
export default Events
