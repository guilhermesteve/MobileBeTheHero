import 'intl';
import 'intl/locale-data/jsonp/pt-BR';


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
import Incidents from './pages/Incidents';
import Details from './pages/Details';

function Routes() {
    return (
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Incidents' component={Incidents} />
                <AppStack.Screen name='Details' component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;