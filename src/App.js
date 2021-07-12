
import React from 'react';

import NavigationBar from './components/NavigationBar';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const All = lazy(()=> import('./pages/All'));
const Family = lazy(()=>import('./pages/Family'));
const Friends = lazy(()=>import('./pages/Friends.js'));
const Favourites = lazy(()=>import('./pages/Favourites'));
const Login = lazy(()=>import('./pages/Login'));
  

 
  function App() {
    const [ searchVal, setSearchVal ] = React.useState("");
    const [ isAuth, setIsAuth ] = React.useState( window.localStorage.getItem("username"));
    let contacts = [ 
      {full_name: "Ziyodbek Ahmadjonov", phone: "+998941079990", email: "mr.prgrmr03@gmail.com", company: "iCode Academy", isFam: false, isFr: true, isFav: true},
      {full_name: "Kamronbek Jo'raboyev", phone: "+998944362060", email: "Joraboyevk224@gmail.com", company: "iCode Academy", isFam: true, isFr: false, isFav: false},
      {full_name: "Doniyorbek Hasanov", phone: "+998932554020", email: "doniyorbekhasanov2001@gmail.com", company: "iCode Academy", isFam: false, isFr: true, isFav: false},
      {full_name: "Sirojiddin Qamariddinov", phone: "+998905404642", email: "sirojiddinqamariddinov23@gmail.com", company: "Tojdor Zamin", isFam: false, isFr: true, isFav: true},
      {full_name: "Jo'rabek Soliyev", phone: "+998990525918", email: "jorabeksoliyev1007@gmail.com", company: "Nestle", isFam: false, isFr: true, isFav: true},
      {full_name: "Farxodbek Abdullayev", phone: "+998932418124", email: "farxodbekabdullayev@gmail.com", company: "To'xtaniyoz Ota", isFam: true, isFr: false, isFav: true},
      {full_name: "Sherali Obidov", phone: "+1 978 563 425", email: "sheraliobidov85@gmail.com", company: "Google", isFam: false, isFr: true, isFav: true},
      {full_name: "Muhammadzayd Yo'ldashev", phone: "+998936913580", email: "yuldashevm2004@gmail.com", company: "Business", isFam: false, isFr: true, isFav: false},
      {full_name: "Zikrillo Abdukarimov", phone: "+998931980028", email: "abdukarimovzikrillo1406@gmail.com", company: "Ielts", isFam: false, isFr: true, isFav: false},
      {full_name: "Faxriddin Muxtorov", phone: "+998333303171", email: "faridmuxtorov@gmail.com", company: "Istanbul", isFam: false, isFr: true, isFav: false}  
    ];

    const AddContact = (full_name_ref, phone_ref, email_ref, company_ref, isFam_ref, isFr_ref, isFav_ref, setAllContacts, toggle) => {
      const contact = {
        full_name: full_name_ref.current.value,
        phone: phone_ref.current.value,
        email: email_ref.current.value,
        company: company_ref.current.value,
        isFam: isFam_ref.current.checked,
        isFr: isFr_ref.current.checked,
        isFav: isFav_ref.current.checked,
      };
      let newArr = [];
      contacts.map((contact) => {
        newArr.push(contact);
        return true;
      });
      newArr.push(contact);
      setAllContacts(newArr);
      contacts = newArr;
      toggle();
    }


  const DeleteContact = ( id, setAllContacts )=> {
    let newArrDelete = [];
    contacts.map((contact, index)=> {
       id !== index ? newArrDelete.push(contact) : console.log();
       return true
    });

    setAllContacts(newArrDelete)
    contacts = newArrDelete
  }

  return (
    <div >

    {
        isAuth ?
        <NavigationBar setSearchVal={setSearchVal}  setIsAuth={setIsAuth}/>
            :
            ""
    }

   
    
    <Suspense fallback={<h1 className='text-center m-5'>Loading...</h1>}  >
      <BrowserRouter>
        <Switch>

          {
            isAuth ?
            <>
            <Route path="/" exact render={()=> <All searchVal={searchVal} contacts={contacts} AddContact={AddContact} DeleteContact={DeleteContact}/>}/>
            <Route path="/family" exact render={()=> <Family searchVal={searchVal} contacts={contacts} AddContact={AddContact} DeleteContact={DeleteContact} />}/>
            <Route path="/friends" exact render={()=> <Friends searchVal={searchVal} contacts={contacts} AddContact={AddContact} DeleteContact={DeleteContact} />}/>
            <Route path="/favourites" exact render={()=> <Favourites searchVal={searchVal} contacts={contacts} AddContact={AddContact} DeleteContact={DeleteContact} />}/>
            </>:
             <Route path='/' exact render={()=> <Login setIsAuth={setIsAuth} />}/>
          }


  
        </Switch>
      </BrowserRouter>
    </Suspense>


    </div>
  )
}

export default App;
