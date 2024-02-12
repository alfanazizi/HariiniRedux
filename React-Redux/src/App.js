import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import notesReducers from './reducers/notesReducers'; 
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList'; 
import { View, StyleSheet } from 'react-native';

const store = createStore (notesReducers);

const App = () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <NoteForm />
                <NoteList />
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, // Penambahan padding
        marginTop: 40, // Penambahan margin top
    },
});

export default App;
