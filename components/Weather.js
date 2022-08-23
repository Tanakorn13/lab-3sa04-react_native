import React,{useState} from "react";
import {Text, ImageBackground, StyleSheet, View} from "react-native";
import Forecast from "./Forcast";
// import { useState } from "react";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return (
        <View>
            <ImageBackground source={require('../bg3.jpg')} style={styles.backdrop} >
                <Text>Zip Code is {props.zipCode}.</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
 );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        fontSize: '12',
        
    },
});
   