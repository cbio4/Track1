import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contacts/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");
  const{filterContacts,clearFilter,filtered}=contactContext;
   useEffect(() => {
      if(filtered === null){
          text.current.value='';
      }
      
      });
  
  const onChange = () => {
    if (text.current.value !== "") {
      contactContext.filterContacts(e.target.value);
    } else {
      contactContext.clearFilter();
    }
  };
  return (
    <div>
      <input
        ref={tex}
        type="text"
        placeholder="Filtercontacts.."
        onChange={onChange}
      />
    </div>
  );
};
export default ContactFilter;
