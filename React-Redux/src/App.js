
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
import notesReducer from './reducers/notesReducer'; 
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList'; 
import { View } from 'react-native';

const store = createStore (notesReducer);

const App = () => {
    return (
        <Provider store={store}>
            <View>
                <NoteForm />
                <NoteList />
            </View>
        </Provider>
    );
};

export default App;