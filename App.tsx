import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {api} from "./src/services/api";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const body = JSON.stringify({
    course: "praks",
    level: "advanced",
  })
  
  const handlerRequest = async () => {
    // GET
    try {
      const response = (await api.get("/get/json")).data
      console.log(`----- START GET -----`)
      console.log(response);
      console.log(`----- END GET -----\n\n`)
    } catch (error) {
      console.error(error);
    }
  };

  const handlerRequestPost = async()=> {
    // POST
    try {
      const response = await (await api.post("/post/json", body)).data;
      console.log(`----- START POST -----`)
      console.log(response);
      console.log(`----- END POST -----\n\n`)
    } catch (error) {
      console.error(error);
    }
  };

  const handlerRequestPut = async()=> {
    // PUT
    try {
      const response = await (await api.put("/put/json", body)).data;
      console.log(`----- START PUT -----`)
      console.log(response);
      console.log(`----- END PUT -----\n\n`)
    } catch (error) {
      console.error(error);
    }
  };

  const handlerRequestPatch = async()=> {
    // PATCH
    try {
      const response = await (await api.patch("/patch/json", body)).data;
      console.log(`----- START PATCH -----`)
      console.log(response);
      console.log(`----- END PATCH -----\n\n`)
    } catch (error) {
      console.error(error);
    }
  };

  const handlerRequestDelete = async()=> {
    // DELETE
    try {
      const response = await (await api.delete("/delete/json")).data;
      console.log(`----- START DELETE -----`)
      console.log(response);
      console.log(`----- END DELETE -----\n\n`)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handlerRequest()}>
        <Text style={styles.buttonText}>GET</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlerRequestPost()}>
        <Text style={styles.buttonText}>POST</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlerRequestPut()}>
        <Text style={styles.buttonText}>PUT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlerRequestPatch()}>
        <Text style={styles.buttonText}>PATCH</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlerRequestDelete()}>
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
