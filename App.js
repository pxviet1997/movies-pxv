import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';

const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'Top Rated'
    }
  });

export default createAppContainer(navigator);
