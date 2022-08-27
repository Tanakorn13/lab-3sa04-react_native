import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Forecast(props) {
    return (
        <View style={{flex:1, justifyContent:'space-evenly'}}>
            <Text style={styles.style1}>{props.main}</Text>
            <Text style={styles.style1}>{props.description}</Text>
            <Text style={styles.style1}>{props.temp} °C</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    style1: {
        flexDirection: 'column',
        fontStyle: 'italic',
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
  });