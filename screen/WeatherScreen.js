import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Weather from '../components/Weather';

export default function WeatherScreen({route}) {
    return (
        <View>
            <Weather zipCode={route.params.zipCode} />
            <StatusBar style="auto" />
        </View>
    );
   }