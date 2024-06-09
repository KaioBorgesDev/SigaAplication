import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/src/components/navigation/TabBarIcon'; 
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information-circle' : 'information-circle'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'log-in' : 'log-in'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
