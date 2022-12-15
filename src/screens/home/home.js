import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FeedScreen from '../feed';
import ArticleScreen from '../article';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Article" component={ArticleScreen} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
