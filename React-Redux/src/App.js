
// // App.js
// import React from 'react';
// import {Provider} from 'react-redux';
// import store from './store';
// import CounterComponent from './CounterComponent';


// const App = () => {
// return (
//     <Provider store={store}>
//     <CounterComponent />
//     </Provider>
//     );
// };
// export default App;


// App.js
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
                <NoteForm style={styles.input} />
                <NoteList style={styles.list} />
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
    input: {
      width: 1250,
      height: 40,
      borderColor: "#EB455F",
      borderWidth: 2,
      paddingHorizontal: 10,
      borderRadius: 24,
      marginBottom: 10,
    },
    // // button: {
    // //   backgroundColor: "#EB455F",
    // //   padding: 10,
    // //   margin: 10,
    // //   borderRadius: 24,
    // //   shadowColor: "black",
    // //   shadowOffset: { width: 0, height: 2 },
    // //   shadowRadius: 6,
    // //   shadowOpacity: 0.26,
    // // },
    // buttonText: {
    //   color: "white",
    //   fontSize: 16,
    //   fontWeight: "500",
    //   paddingHorizontal: 12,
    //   textAlign: "center",
    // },
    // bottonGroup: {
    //   padding: 10,
    //   paddingVertical: 20,
    // },
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