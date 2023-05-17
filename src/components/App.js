import React,{useState,useEffect} from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';


function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const[contacts,setContacts]=useState([]);

  const addContactHandler =(contact)=>{
     console.log(contact);
     setContacts([...contacts,contact]);
  };
  
  
  useEffect(()=>{
    const retrivedContacts =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivedContacts) setContacts(retrivedContacts)
  },[]);

  useEffect(() => {
    if(contacts.length >0){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
   <div>
    <Header/>

     <AddContact addContactHandler={addContactHandler}/>

    <ContactList contacts={contacts}/>
   </div>
  );
}

export default App;
