// reducers/notesReducer.js
const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  console.log('notes reducer',initialState,action)
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case 'EDIT_NOTE':
      const updatedNotes = [...state.notes];
      updatedNotes[action.payload.index] = action.payload.newText;
      return { ...state, notes: updatedNotes };

    case 'DELETE_NOTE':
      const filteredNotes = state.notes.filter((_, index) => index !== action.payload);
      return { ...state, notes: filteredNotes };

    default:
      return state;
      // reducers/notesReducer.js
  }
};

export default notesReducer;
