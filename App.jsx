import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import react from "react";

export default function App() {
	return (
		<View style={styles.container}>
  <View>
    <TextInput
      placeholder="Digite uma nova tarefa"
      style={styles.input}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={() => setTaks("")}
    >
      <Text style={`text-white`}>Adicionar</Text>
    </TouchableOpacity>
  </View>
  <StatusBar style="auto" />
</View>
	);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      back
    }



})