// components/NoteList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import { editNote, deleteNote } from "../actions/noteActions";

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleEditNote = (index, newText) => {
    dispatch(editNote(index, newText));
  };

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index));
  };

  return (
    <View>
      <Text>Notes:</Text>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <TextInput
              style={{ borderBottomWidth: 1, marginBottom: 5 }}
              value={item}
              onChangeText={(text) => handleEditNote(index, text)}
            />
            <Button
              title="Delete"
              onPress={() => handleDeleteNote(index)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default NoteList;
