import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import TrendMenuScene from './components/trend-menu-scene';
// import { Router, Scene } from 'react-native-router-flux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const AppStack = createStackNavigator({
//     TrendMenuScene: TrendMenuScene,
//     }, { headerMode: 'none' })

// const NavigationStack = createAppContainer(AppStack);

// class TrendMenuScene extends React.Component {
//     render() {
//         return (
//             <View style={{ display: 'flex', flex: 1, height: '100%', backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}><Text>{`test screen 1`}</Text></View>
//         )
//     }
// }
class FunnyScene extends React.Component {
    render() {
        return (
            <View><Text>{`test screen 2`}</Text></View>
        )
    }
}
class RouterComponent extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
        const Stack = createStackNavigator();
        // return (
        //     <NavigationStack />
        // )
        return (
            <NavigationContainer style={{ alignItems: "center", backgroundColor: '#fff' }} >
                <Stack.Navigator
                    screenOptions={{
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }}
                    initialRouteName={"Trend"}
                >
                    <Stack.Screen name="Trend" options={{ title: 'Trend' }} component={TrendMenuScene} />
                {/*    <Stack.Screen name="Funny" options={{ title: 'Funny' }} component={FunnyScene} />
                */}</Stack.Navigator>
            </NavigationContainer>
        )
    }

}
//<View>
//<Text>Open up App.js to start working on your app!</Text>
//</View>
export default RouterComponent;