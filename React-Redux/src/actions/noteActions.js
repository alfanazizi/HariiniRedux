//actions/notesActions.js
export const addNote = (note) => {
    console.log('rifqi',note)
    return{
        type:'ADD_NOTE',
        payload:note,
    };
};