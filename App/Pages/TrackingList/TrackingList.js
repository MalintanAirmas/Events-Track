import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Animated,
    StyleSheet,
    Dimensions
} from 'react-native';
import * as Styles from 'App/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');


class TrackingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
        }
    }

    // Component yang akan di render ke dalam flatlist
    _renderListEvents = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('DetailEvents', {
                        data: item, refresh: () => { this.setState({ refresh: true }) }
                    })
                }}
                style={[Styles.Helpers.row, localStyles.listCard]}>
                <View style={{ width: 94, height: 94 }}>
                    <Image
                        source={{ uri: item.img }}
                        style={localStyles.imgStyle} />
                </View>
                <View style={[localStyles.informationListCard]}>
                    <View>
                        <Text
                            style={[localStyles.titleListCard]}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}>
                            {item.title}
                        </Text>
                        <Text
                            style={{ fontSize: 10, }}
                            numberOfLines={2}
                            ellipsizeMode={'tail'}>
                            {item.address}
                        </Text>
                    </View>
                    <View
                        style={
                            [
                                Styles.Helpers.row,
                                {
                                    alignItems: "flex-end",
                                    justifyContent: "space-between"
                                }
                            ]}>
                        <Icon name="money" size={20} color={Styles.Colors.primaryLight} />
                        <Text
                            style={{ fontSize: 12 }}>
                            {`${item.isFree ? "Free" : "$ " + item.price} `}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _listEmptyComponent() {
        return (
            <View style={
                [
                    Styles.Helpers.fill,
                    Styles.Helpers.fullSize,
                    Styles.Helpers.center,
                    { height: 500 }
                ]}>
                <Image
                    source={require('App/Assets/Images/img_not_found.png')}
                    style={
                        {
                            width: 100,
                            height: 100,
                            borderRadius: 15,
                            marginBottom: 15
                        }} />
                <Text>{`Data Ada Data`}</Text>
            </View>
        )
    }

    // Tempat Initialisasi Data dan Component Flatlist
    renderListEvents() {
        const { data } = this.props;
        return (
            <FlatList
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
                data={data.filter(element => element.isTracked)}
                ListEmptyComponent={this._listEmptyComponent()}
                onScroll={(e) => {
                    this.state.scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => "listDataEvent" + item.id + "_" + index}
                renderItem={this._renderListEvents}
            />
        )
    }
    renderBtnTotal() {
        const { data } = this.props;
        const totalArray = data.filter(element => element.isTracked);
        let total = 0;
        for (let index = 0; index < totalArray.length; index++) {
            total += totalArray[index].price;
        }

        if (totalArray.length > 0) {
            return (
                <View style={[Styles.Helpers.center, localStyles.btnTotal]}>
                    <Text
                        style={
                            {
                                color: Styles.Colors.trueWhite,
                                fontWeight: "bold"
                            }}>
                        {`Total ($${total})`}
                    </Text>
                </View>
            )
        }
        return <View />
    }
    render() {
        return (
            <View style={{ paddingHorizontal: 15 }}>
                {this.renderListEvents()}
                {this.renderBtnTotal()}
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

    listCard: {
        width: "100%",
        borderBottomColor: '#F3F3F3',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    informationListCard: {
        marginLeft: 10,
        flex: 1,
        height: 94,
        justifyContent: "space-between",
        paddingVertical: 10
    },
    titleListCard: {
        fontSize: 12,
        fontWeight: "700",
        marginBottom: 5
    },
    btnTotal: {
        width: width - 20,
        height: 50,
        backgroundColor: Styles.Colors.primary,
        position: "absolute",
        bottom: 10,
        borderRadius: 25,
        marginHorizontal: 10
    }
})
export default TrackingList