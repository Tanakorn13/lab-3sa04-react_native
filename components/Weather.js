import React,{useState} from "react";
import {Text, ImageBackground, StyleSheet, View} from "react-native";
import Forecast from "./Forcast";
// import { useState } from "react";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <View>
            <ImageBackground source={require('../bg1.jpg')} style={styles.backdrop} >
                <Text>Zip Code</Text>
               <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
 );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
});
   