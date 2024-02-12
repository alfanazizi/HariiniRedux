//actions/notesActions.js
export const addNote = (note) => {
    return{
        type:'AD_NOTE',
        payload:note,
    };
};