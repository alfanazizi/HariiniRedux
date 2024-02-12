import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNote } from "../actions/noteActions";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const NoteForm = ({ editingNote }) => {
  const [noteText, setNoteText] = useState(editingNote ? editingNote.text : "");
  const dispatch = useDispatch();

  const handleAction = () => {
    if (editingNote) {
      dispatch(editNote(editingNote.index, noteText));
    } else {
      if (noteText.trim() !== "") {
        dispatch(addNote(noteText));
      }
    }
    setNoteText("");
  };

  return (
    <View style={{ margin: 20 }}>
      <TextInput
        style={styles.input}
        placeholder="Type your note here"
        value={noteText}
        onChangeText={(text) => setNoteText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAction}>
        <Text style={styles.buttonText}>{editingNote ? "Edit Note" : "Add Note"}</Text>
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
    borderColor: "#EA495F",
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
