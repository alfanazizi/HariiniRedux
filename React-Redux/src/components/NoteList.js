import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, StyleSheet } from "react-native";
import { editNote, deleteNote, deleteAllNotes } from "../actions/noteActions";

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEditNote = () => {
    if (editingIndex !== null && editedText.trim() !== "") {
      dispatch(editNote(editingIndex, editedText));
      setEditingIndex(null);
      setEditedText("");
    }
  };

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index));
  };

  const handleDeleteAllNotes = () => {
    dispatch(deleteAllNotes());
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text>Notes:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 5 }}
          value={editedText}
          onChangeText={(text) => setEditedText(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleEditNote}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <FlatList
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View>
              <TextInput
                style={{ borderBottomWidth: 1, marginBottom: 5 }}
                value={item}
                editable={false}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => handleDeleteNote(index)}>
                  <Text style={{ color: 'red' }}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  setEditingIndex(index);
                  setEditedText(item);
                }}>
                  <Text style={{ color: 'blue' }}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={handleDeleteAllNotes}>
          <Text style={styles.buttonText}>Delete All</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#EB855F",
    padding: 10,
    borderRadius: 24,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default NoteList;
