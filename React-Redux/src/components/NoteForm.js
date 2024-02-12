// components/NoteForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../actions/noteActions";
import { View, TextInput, Button } from "react-native";

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
      <Button title="Add Note" onPress={handleAddNote} />
    </View>
  );
};

export default NoteForm;
