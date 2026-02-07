import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import AlbumDetails from './src/screens/AlbumDetails';
import OzzyScreen from './src/screens/OzzyScreen';

export type HomeStackParamList = {
    HomeMain: undefined;
    Details: { item: any };
};

export type RootTabParamList = {
    ShopTab: undefined;
    OzzyTab: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

function ShopStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeMain" component={HomeScreen} />
            <Stack.Screen name="Details" component={AlbumDetails} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#131313',
                        borderTopWidth: 0,
                        height: 70,
                        paddingBottom: 10
                    },
                    tabBarActiveTintColor: '#ac04ff',
                    tabBarInactiveTintColor: '#555',
                    tabBarIcon: ({ color, size }) => {
                        let iconName: keyof typeof Ionicons.glyphMap = 'musical-notes';
                        if (route.name === 'ShopTab') iconName = 'disc-outline';
                        else if (route.name === 'OzzyTab') iconName = 'skull-outline';
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen
                    name="ShopTab"
                    component={ShopStack}
                    options={{ title: 'Магазин' }}
                />
                <Tab.Screen
                    name="OzzyTab"
                    component={OzzyScreen}
                    options={{ title: 'Ozzy' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}