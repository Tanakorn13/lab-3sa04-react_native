import React,{useState, useEffect} from "react";
import {Text, ImageBackground, StyleSheet, View} from "react-native";
import Forecast from "./Forcast";
// import { useEffect } from "react";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=9fcd7fc918f8f66ace3ce59e1ffb6ef7`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
            }
        }, [props.zipCode])
       

        return (
            <ImageBackground source={require('../bg3.jpg')} style={styles.backdrop} >
                <View style={{
                    backgroundColor: "rgba(52, 52, 52, 0.8)",
                    width: "100%",
                    height: "40%",
                    paddingTop: 40,
                    }}>
                <Text  style={{
                        fontSize: 40,
                        color: "white",
                        textAlign: "center",
                        paddingTop: 15,
                    }}>
                Zip Code is {props.zipCode}.
                    </Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
     );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",        
    },
});
   