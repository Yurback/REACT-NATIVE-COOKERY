import React from 'react';
import {View, Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import FavoritesScreens from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator({
    Categories: { 
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? "white" : Colors.primaryColor
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: ()=>{},
            tabBarIcon: (tabInfo)=>{ 
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>;   
            }
        }
    },
    Favorites: {screen: FavoritesScreens,
        navigationOptions: {
            tabBarLabel: ()=>{},
            tabBarIcon: (tabInfo)=>{ 
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>;   
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);