import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/noteActions';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NoteForm = () => {
    const [noteText, setNoteText] = useState('');
    const dispatch = useDispatch();

    const handleAddNote = () => {
        if (noteText.trim() !== '') {
            dispatch(addNote(noteText));
            setNoteText('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your note here"
                    value={noteText}
                    onChangeText={(text) => setNoteText(text)}
                />
                <Button title="Add Note" onPress={handleAddNote} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
    },
});

export default NoteForm;
