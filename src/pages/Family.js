import React from 'react';
import SideBar from '../components/SideBar';
import ContactsTableRow from '../components/ContactsTableRow';
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Button,
    Row,
    Col
} from 'reactstrap'

function Family({ contacts, AddContact,DeleteContact, searchVal }){
    const [ allContacts, setAllContacts ] = React.useState(contacts);
    const [modal, setModal] = React.useState(false);

    const toggle = () => setModal(!modal);

    const full_name_ref = React.useRef();
    const phone_ref = React.useRef();
    const email_ref = React.useRef();
    const company_ref = React.useRef();
    const isFam_ref = React.useRef();
    const isFr_ref = React.useRef();
    const isFav_ref = React.useRef();
    return(
        <>
           <div className="d-flex">
              <SideBar />
              <div className='table_width'>
              <div className='d-flex justify-content-between'>
                          <h2>Family Contacts</h2>
                          <Button color="success" onClick={toggle}><i className='fas fa-plus'></i>Add</Button>
                          <Modal isOpen={modal} toggle={toggle} >
                            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                            <ModalBody>
                            <Row>

                              <Col md='12'>
                              <label htmlFor='full_name' className="form-label">Full name</label>
                              <input type='text' id='full_name' ref={full_name_ref} className='form-control' />
                              </Col>
                              <Col md='6 mb-3'>
                              <label htmlFor='phone' className="form-label">Phone</label>
                              <input type='text' id='phone' ref={phone_ref} className='form-control' />
                              </Col>  
                              <Col md='6 mb-3'>
                              <label htmlFor='email' className="form-label">Email</label>
                              <input type='text' id='email' ref={email_ref} className='form-control' />
                              </Col> 
                              <Col md='12'>
                              <label htmlFor='company' className="form-label">Company</label>
                              <input type='text' id='company' ref={company_ref} className='form-control' />
                              </Col>
                              <Col md='12'>
                                 <input className='form-check-input 'ref={isFam_ref} type='checkbox' id='isFam' />
                                 <label className='form-check-label ms-2 ' htmlfor='isFam'>Family</label>
                                 
                                 <input className='form-check-input ' ref={isFr_ref} type='checkbox' id='isFr' />
                                 <label className='form-check-label ms-2 ' htmlfor='isFr'>Friend</label>
                                
                                 <input className='form-check-input ' ref={isFav_ref} type='checkbox' id='isFav' />
                                 <label className='form-check-label ms-2 '  htmlfor='isFav'>Favourite</label>
                             
                              </Col>
                               </Row>
                            </ModalBody>
                            <ModalFooter>
                              <Button color="primary" onClick={ ()=>AddContact(full_name_ref, phone_ref, email_ref, company_ref, isFam_ref, isFr_ref, isFav_ref, setAllContacts, toggle)}>Save</Button>
                              <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                          </Modal>

                    </div>
                 
                  <div className='table-responsive'>
                      <table className='table table-light'>
                          <thead> 
                              <th>Full name</th>
                              <th>Phone</th>
                              <th>Email</th>
                              <th>Company</th>
                              <th>Action</th>
                          </thead>
                          <tbody>
                            
                          {
                                    allContacts.map((contact,index)=>{
                                        if(contact.full_name.toLowerCase().indexOf(searchVal.toLowerCase()) === -1){
                                            return false;
                                        }
                                        if(contact.isFam){
                                            return(
                                                <ContactsTableRow
                                                    key={index}
                                                    index={ index }
                                                    full_name={contact.full_name}
                                                    phone={contact.phone}
                                                    email={contact.email}
                                                    company={contact.company}
                                                    DeleteContact={ DeleteContact }
                                                    setAllContacts={ setAllContacts }
                                                />
                                            )
                                        }
                                        return true;
                                    })
                                }
                          </tbody>
                      </table>
                  </div>
              </div>
           </div>
        </>
    )
}

export default Family;