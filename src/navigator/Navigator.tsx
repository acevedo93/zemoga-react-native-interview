import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PostsScreen} from '../screens/PostsScreen';
import {PostDetailScreen} from '../screens/PostDetailScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FavPostsScreen} from '../screens/FavPostsScreen';
import {screenOptions, tabBarOptions} from './navigatorOptions';
import {Refresh} from '../components/Refresh';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const Navigator = () => {
  const TopTabnavigator = () => {
    return (
      <Tab.Navigator tabBarOptions={tabBarOptions} sceneContainerStyle={{}}>
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Favorites" component={FavPostsScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        options={{
          headerRight: () => {
            return <Refresh />;
          },
        }}
        name="Posts"
        component={TopTabnavigator}
      />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    </Stack.Navigator>
  );
};
