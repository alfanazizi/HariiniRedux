//actions/notesActions.js
export const addNote = (note) => {
    return{
        type:'ADD_NOTE',
        payload:note,
    };
};