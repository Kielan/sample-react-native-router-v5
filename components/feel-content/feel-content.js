import React, { Component, PropTypes } from 'react'
import { View, Image, TouchableOpacity, Text, RefreshControl, Dimensions } from 'react-native';

class FeelContent extends Component {
    constructor(props) {
        super(props)

        this.windowWidth = Dimensions.get('window').width;
        this.windowHeight = Dimensions.get('window').height;
        this._onRefresh = this._onRefresh.bind(this);
        this._renderItem = this._renderItem.bind(this);
        this._onClickCat = this._onClickCat.bind(this);
        this.onScroll = this.onScroll.bind(this);
        // this._onClickVideo = this._onClickVideo.bind(this);
        // this._renderListItem = this._renderListItem.bind(this)
    }
    data = [
        {
          id: 1,
          title: 'LOL',
        },
        {
          id: 2,
          title: 'SAD',
        },
        {
          id: 3,
          title: 'OMG',
        },
        {
          id: 4,
          title: 'INSPIRED',
        },
        {
          id: 5,
          title: 'CUTE',
        },
        {
          id: 6,
          title: 'WTF',
        },
    ]
    _onLayout(event) {
        //console.log("view height:" + event.nativeEvent.layout.height);
    }
    onScroll(event) {
        let currentOffset = event.nativeEvent.contentOffset.y
        if (currentOffset > 0) {
          if (currentOffset>offset && Math.abs(currentOffset-offset)>10) {
            this.props.setNavbar(true);
          } else if (currentOffset<offset && Math.abs(currentOffset-offset)>10) {
            this.props.setNavbar(false);
          }
        }
        offset = currentOffset;
    }
    _renderItem(item) {
        // return <FeelListItem key={item.id} {...item} onPress={() => this._onClickCat(item.id, item.title)} />
        return (<View><Text>{`text`}</Text></View>)
    }
    render() {
        return (
            <GridView
                style={{width: this.windowWidth}}
                onScroll={this.onScroll}
                scrollEventThrottle={300}
                items={this.data}
                itemsPerRow={1}
                enableEmptySections={true}
                renderItem={this._renderItem}
                onLayout={this._onLayout}
                showsVerticalScrollIndicator={false}
                renderFooter={() => (<View style={{height: 45}}></View>)}
            />
        )
    }
}

export default FeelContent;