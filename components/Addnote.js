import { useState } from 'react';

const Addnote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
     const charLimit = 300;

     const handleChange = (event) => {
        if(charLimit - event.target.value.length >=0){
        setNoteText(event.target.value);
        } 
    };

const handleSaveClick = () => {
    if(noteText.trim().length > 0){
    handleAddNote(noteText);
    setNoteText('');
    }
};

    return (
    <div className="note new">
        <textarea
         rows='8'
         cols='10'
          placeholder='Type new note here...'
          value={noteText}
          onChange={handleChange}>
        </textarea>
        <div className='note-bottom'>
            <small>{charLimit - noteText.length} words remain</small>
            <button className='save' onClick={handleSaveClick}>ADD</button>
        </div>
    </div>
    );
};

export default Addnote;

