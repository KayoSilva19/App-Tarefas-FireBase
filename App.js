import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity  } from 'react-native'; 
import Login from './src/Components/Login';

export default function App() {
  const [user, setUser] = useState(null);

  const [newTask, setNewTask] = useState('');


  if(!user){
    return <Login changestatus={ (user) => setUser(user)}/>
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="O que vai fazer hoje?"
          value={newTask}
          onChangeText={ (text) => setNewTask(text) }
        />
        <TouchableOpacity style={styles.buttonadd}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: "#F2F6FC"
  },
  containerTask:{
    flexDirection: 'row'
  },
  input:{
    flex: 1,
    marginBottom: 10,
    padding: 10
  }
});