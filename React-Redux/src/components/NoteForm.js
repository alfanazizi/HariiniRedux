// components/NoteForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../actions/noteActions";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const NoteForm = () => {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  const handleAddNote = () => {
	console.log('tombol ditekan')
    if (noteText.trim() !== "") {
      dispatch(addNote(noteText));
      setNoteText(" ");
	  console.log('masuk if',noteText)
	  
    }
  };

  return (
    <View style={{ margin: 20 }}>
      <TextInput
        style={{ marginTop: 100 }}
        placeholder="Type your note here"
        value={noteText}
        onChangeText={(text) => setNoteText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNote}>
        <Text style={styles.buttonText}>Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 220,
    },
    input: {
      width: 250,
      height: 40,
      borderColor: "#EB455F",
      borderWidth: 2,
      paddingHorizontal: 10,
      borderRadius: 24,
      margin: 4,
    },
    button: {
      backgroundColor: "#EB855F",
      padding: 10,
      margin: 10,
      borderRadius: 24,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "500",
      paddingHorizontal: 12,
      textAlign: "center",
    },
    bottonGroup: {
      padding: 10,
      paddingVertical: 20,
    },
  });

export default NoteForm;


//actions/dataActions.js
export const fetchDataSuccess = (data) => ({ 
	type: 'FETCH_DATA_SUCCESS',
	payload: data,
});

export const fetchDataError = (error) => ({
	type: 'FETCH_DATA_ERROR',
	payload: error,
});

export const fetchData = () => {
	return async (dispatch) => {
		try {
			const response = await fetch('https://api.example.com/data'); 
			const data = await response.json();

		dispatch(fetchDataSuccess (data));
		} catch (error) {

		dispatch(fetchDataError(error.message));
}
};
};