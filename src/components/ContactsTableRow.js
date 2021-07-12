import React from "react";


 function ContactsTableRow({
     full_name, phone, email, company, index, setAllContacts, DeleteContact
 }){
     return(
         <>
           <tr>
               <td>{full_name}</td>
               <td>{phone}</td>
               <td>{email}</td>
               <td>{company}</td>
               <td><i onClick={ ()=>DeleteContact(index, setAllContacts)} className='btn btn-danger fas fa-trash-alt'></i></td>
           </tr>
         </>
     )
 }

 export default ContactsTableRow;