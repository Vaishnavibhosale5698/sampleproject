import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import App1 from './App1'
import ImageBrowser from './ImageBrowser'

const MainNavigator = createStackNavigator({
App1 : {screen : App1},
ImageBrowser : {screen : ImageBrowser}
},{
    initialRouteName: 'App1'
})

const Navigation = createAppContainer(MainNavigator)

export default Navigation;

