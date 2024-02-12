import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import { editNote, deleteNote } from "../actions/noteActions";

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditNote = (index, newText) => {
    dispatch(editNote(index, newText));
    setEditingIndex(null);
    setEditText("");
  };

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index));
  };

  const startEditing = (index, text) => {
    setEditingIndex(index);
    setEditText(text);
  };

  return (
    <View>
      <Text>List of Notes :</Text>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            {editingIndex === index ? (
              <View>
                <TextInput
                  style={{ borderBottomWidth: 1, marginBottom: 5 }}
                  value={editText}
                  onChangeText={(text) => setEditText(text)}
                />
                <Button
                  title="Save"
                  onPress={() => handleEditNote(index, editText)}
                />
                <Button
                  title="Cancel"
                  onPress={() => {
                    setEditingIndex(null);
                    setEditText("");
                  }}
                />
              </View>
            ) : (
              <View>
                <Text>{item}</Text>
                <Button
                  title="Edit"
                  onPress={() => startEditing(index, item)}
                />
                <Button
                  title="Delete"
                  onPress={() => handleDeleteNote(index)}
                />
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default NoteList;
