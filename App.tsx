import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const getUser = async () => {
    try {
      const response = await fetch("https://api.github.com/users/luccadumas", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  const postUser = async () => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstParam: "",
          secondParam: "",
        }),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  const handlerPut = async () => {
    console.log("PUT");
  };

  const handlerDelete = async () => {
    console.log("DELETE");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => getUser()}>
        <Text style={styles.buttonText}>GET</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => postUser()}>
        <Text style={styles.buttonText}>POST</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlerPut()}>
        <Text style={styles.buttonText}>PUT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlerDelete()}>
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
