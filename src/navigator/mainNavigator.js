import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings120141Navigator from '../features/Settings120141/navigator';
import Settings120126Navigator from '../features/Settings120126/navigator';
import NotificationList120125Navigator from '../features/NotificationList120125/navigator';
import Maps120124Navigator from '../features/Maps120124/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings120141: { screen: Settings120141Navigator },
Settings120126: { screen: Settings120126Navigator },
NotificationList120125: { screen: NotificationList120125Navigator },
Maps120124: { screen: Maps120124Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
