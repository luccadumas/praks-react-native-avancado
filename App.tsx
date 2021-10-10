import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const handlerRequest = async () => {
    // GET
    try {
      const response = await fetch(`https://reqbin.com/echo/get/json`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(`----- START GET -----`)
      console.log(json);
      console.log(`----- END GET -----\n\n`)
    } catch (error) {
      console.error(error);
    }
  };

  const handlerRequestWithParam = async (method: string) => {
    // POST, PUT, PATCH, DELETE
    try {
      const response = await fetch(`https://reqbin.com/echo/${method.toLowerCase()}/json`, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course: "praks",
          level: "advanced",
        }),
      });
      const json = await response.json();
      console.log(`----- START ${method} -----`)
      console.log(json);
      console.log(`----- END ${method} -----\n\n`)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handlerRequest()}>
        <Text style={styles.buttonText}>GET</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlerRequestWithParam("POST")}>
        <Text style={styles.buttonText}>POST</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlerRequestWithParam("PUT")}>
        <Text style={styles.buttonText}>PUT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlerRequestWithParam("PATCH")}>
        <Text style={styles.buttonText}>PATCH</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlerRequestWithParam("DELETE")}>
        <Text style={styles.buttonText}>DELETE</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "90%",
    height: 60,
    backgroundColor: "#3498db",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 26,
    color: "#FFF",
    textAlign: "center",
  },
});
