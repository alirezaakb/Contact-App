import {useState} from "react";
import inputs from "../constants/inputs.js";
import {v4} from "uuid";
import ContactsList from "./ContactsList.jsx";
function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("")
    const [contact, setContact] = useState({
        id:"", name: "", lastName: "", email:"", phone:"",
    });

    const deleteHandler = (id) => {
        const newContacts = contacts.filter((contact => contact.id !== id));
        setContacts(newContacts)
    }
    const changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setContact(contact => ({...contact,[name]: value}))
    }

    const addHandler = () => {
        if(!contact.name || !contact.lastName || !contact.email || !contact.phone){
            setAlert("please enter valid data!");
            return;
        }
        setAlert("");
        const newContact = {...contact, id: v4()}
        setContacts((contacts) => [...contacts, newContact]);
    }

    return (
        <>
        <div>

            {inputs.map((input,index) => (
                <input key={index} type={input.type} name={input.name} placeholder={input.placeholder} value={contact[input.name]} onChange={changeHandler}/>))}
            <button onClick={addHandler}>Add Contact</button>
        </div>
            <div>{alert && <p>{alert}</p>}</div>
            <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
        </>
    );
}

export default Contacts;