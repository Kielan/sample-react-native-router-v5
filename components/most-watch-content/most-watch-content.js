import React, { Component, PropTypes } from 'react'
import { Flatlist, View, Image, TouchableOpacity, Text, RefreshControl } from 'react-native';
import FeedListItem from '../feed-list-item';

// const FeedListItem = () => (<View><Text>{`feedlist item`}</Text></View>)

class MostWatchContent extends Component {
    constructor(props) {
        super(props)
        this.onScroll = this.onScroll.bind(this);
        this._renderListItem = this._renderListItem.bind(this);

    }
    onScroll(event) {
         // let currentOffset = event.nativeEvent.contentOffset.y
        // if (currentOffset > 0) {
        //   if (currentOffset>offset && Math.abs(currentOffset-offset)>10) {
        //     // this.props.setNavbar(true);
        //   } else if (currentOffset<offset && Math.abs(currentOffset-offset)>10) {
        //     // this.props.setNavbar(false);
        //   }
        // }
        // offset = currentOffset;
    }
    _renderListItem(rowData) {
        console.log('mostwatch rowdata!', rowData)
        // onPressVideo={() => this._onClickVideo(rowData.path)}
        // onPressChannel={() => this._onClickChannel(rowData.channel_id)}
        // setSceneContentPanHandlers={this.props.setSwipePanHandlers}
        // pressAddLuv={() => this._addLuv(rowData.path)}
        // pressRemoveLuv={() => this._removeLuv(rowData.path)}
        return (
            <FeedListItem
             {...rowData}
            />
        )
    }
    render() {
                // onLayout={this._onLayout}
                // enableEmptySections={true}
                // onScroll={this._onLoadMore}
                // onScroll={this.onScroll}
                // scrollEventThrottle={300}
                // scrollEnabled={!this.props.isReactionsActive}
                // onContentSizeChange={this._onContentSizeChange}
                // refreshing={this.props.isRefreshing}

                //onRefresh={this._onRefresh}
                // ref={(view) => this._scrollView = view}
                // <Flatlist
                //     data={this.props.videos}
                //     renderItem={this._renderListItem}
                // /> 
            return (
                 <View><Text>{`Most watch content`}</Text></View>
        )
    }
}
// ListFooterComponent={() => (<View style={{height: 50}}></View>)}

export default MostWatchContent;

// onRefresh={
//     <RefreshControl
//         tintColor='#D0021B'
//         title="Loading..."
//         titleColor='#D0021B'
//         colors={['#ff0000', '#00ff00', '#0000ff']}
//         progressBackgroundColor="#ffff00"
//     />
//     }