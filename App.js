import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Chats from './screens/Chats';
import Settings from './screens/Settings';
import Start from './screens/Start';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
            headerShown: false
        }}>
        <Tabs.Screen
          name='Start'
          component={Start}
          options={{
            tabBarIcon: () => (
              <Ionicons
                name='home'
                size={24}/>
            )
          }}
        />
        <Tabs.Screen
          name='Chats'
          component={Chats}
          options={{
            headerShown: true,
            tabBarBadge: 5,
            tabBarIcon: ({focused}) => (
                <Ionicons
                  focused={focused}
                  name='chatbubble-ellipses'
                  size={24}/>
            )
        }}
          />
        <Tabs.Screen
          name='Settings'
          component={Settings}
          options={{
            tabBarIcon: ({focused}) => (
                <Ionicons
                  focused={focused}
                  name='settings'
                  size={24}/>
            )
        }}
          />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
