import React, { Component, PropTypes } from 'react';
// import MostWatchContent from '../most-watch-content';
import FeelContent from '../feel-content';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { View, Text } from 'react-native';
const LuveTabBar = () => (<View style={{display: 'flex'}}><Text style={{color: 'black' }}>{`luvetabbar`}</Text></View>)
const MostWatchContent = () => (<View style={{display: 'flex', flex: 1, minHeight: 500}}><Text style={{color: 'black' }}>{`Most Watch COntent`}</Text></View>)

class TrendMenuScene extends Component {
    // static propTypes = {
    //   mode: PropTypes.string.isRequired,
    // }
    render() {
        let initialPageIndex = 0;
        // onChangeTab={() => this._playLuveSwipe()}
        // locked={this.props.isReactionsActive}

        return (
          <>
          <View style={{ display: 'flex', flex: 1, height: '100%', backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}><View><Text>{`test screen 1`}</Text></View></View>
          {/*<View style={{ display: 'flex', flex: 1, height: '100%', backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}><Text>{`test screen 1`}</Text></View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2C2C2D' }}>
              <Text>{'text center'}</Text>
                 <MostWatchContent tabLabel='MOST WATCH' /> 
             <ScrollableTabView
              // renderTabBar={() => <ScrollableTabBar mode='main' showCountry={false} onPressCountry={this._onPressCountryFilter} style={{width: 275}}/>}
              renderTabBar={() => <LuveTabBar />}
              style={{backgroundColor: '#E8E8E8'}}
              initialPage={initialPageIndex}
            >
              <MostWatchContent tabLabel='MOST WATCH' />
              <FeelContent tabLabel="FEELING" />
              <SocialBuzzContent tabLabel="SOCIAL BUZZ" />
          </ScrollableTabView> 
         </View>  */}
         </>
        )
    }
}

export default TrendMenuScene