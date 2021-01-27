import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';
import SearchScreen from './src/screens/SearchScreen';

const mainFlow = createBottomTabNavigator({
  TopRatedTab: createStackNavigator({
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Top Rated'
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        title: 'Movie'
      }
    }
  }),
  Search: SearchScreen
});

export default createAppContainer(mainFlow);
