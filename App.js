import { nanoid } from 'nanoid';
import { useEffect, useState } from "react";
import Header from './components/Header';
import Noteslist from "./components/Noteslist";
import Search from './components/Search';


const App = () => {
  
 const [notes, setNotes] = useState([
  
 ]);

 const [searchText, setSearchText] = useState('');

 const[darkMode, setDarkMode] = useState(false);

 useEffect(() => {
    const savedNotes = JSON.parse
    (localStorage.getItem('react-notes-app-data')
    );
     if(savedNotes){
      setNotes(savedNotes);
     }
 }, []);

 useEffect(() => {
      localStorage.setItem(
        'react-notes-app-data',
         JSON.stringify(notes)
      );
 }, [notes]);
  
 
 const addNote = (text) => {
    
    const date = new Date();
    const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  };
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
 };

 const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
     setNotes(newNotes);
  };

 return (
  <div className={`${darkMode && 'dark-mode'}`}>
      <div className="contain">
  <Header handleToggleDarkMode={setDarkMode} />
  <Search handleSearchNote={setSearchText}/>
    <Noteslist
     notes={notes.filter((note)=>
       note.text.toLowerCase().includes(searchText)
      )}
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
  </div>
  </div>

 );
 };

export default App;