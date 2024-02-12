// actions/notesActions.js
export const addNote = (note) => ({
    type: 'ADD_NOTE',
    payload: note,
  });
  
  export const editNote = (index, newText) => ({
    type: 'EDIT_NOTE',
    payload: { index, newText },
  });
  
  export const deleteNote = (index) => ({
    type: 'DELETE_NOTE',
    payload: index,
  });
  