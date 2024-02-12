import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import notesReducers from './reducers/notesReducers'; 
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList'; 
import { View, StyleSheet, Image, Text } from 'react-native';

const store = createStore(notesReducers);

const App = () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <View style={styles.bannerContainer}>
                    <Text style={styles.bannerText}>List Data Notes Apps</Text>
                </View>
                <View style={styles.center}>
                    <NoteForm style={styles.input} />
                    <NoteList style={styles.list} />
                </View>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150,
        color: "#00007B"
    },
    bannerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 50, // Sesuaikan dengan ukuran logo Anda
        height: 50, // Sesuaikan dengan ukuran logo Anda
        marginRight: 10,
    },
    bannerText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
        marginTop: 40,
    },
    input: {
        width: 1250,
        height: 40,
        borderColor: "#EB455F",
        borderWidth: 2,
        paddingHorizontal: 10,
        borderRadius: 24,
        marginBottom: 10,
    },
    center: {
        width: '50%',
        alignItems: 'center',
    },
    list: {
        flex: 1,
        width: '100%',
    },
});

export default App;
