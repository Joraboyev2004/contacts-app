import React from "react";
import { Container, Row, Col } from "reactstrap";
import PhoneImg from '../media/phone.png'
import ProfileImg from '../media/profile.png'

function NavigationBar({ setIsAuth, setSearchVal }){
     const searchRef = React.useRef();
    const [ sideIsOpen, setSideIsOpen ] = React.useState(false);
    
        const ShowSideBar = () => {
                if(sideIsOpen){
                    setSideIsOpen(false);
                    let a = document.querySelector('.sideBar').classList;
                    a.remove("sideBar_kich")
                    a.add("sideBar_kich_none")
                } else {
                    setSideIsOpen(true);
                    let a = document.querySelector('.sideBar').classList;
                    a.remove("sideBar_kich_none")
                    a.add("sideBar_kich");
                }
        }


        const SearchText = () => {
            setSearchVal(searchRef.current.value);
        }

        const logOut = () =>{
            let a = window.confirm("Are you sure to log out!");
        
            if(a){
                let b = window.confirm("Conyinue?");
                if(b){
                    window.localStorage.removeItem("username");
                    window.localStorage.removeItem("email");
                    setIsAuth(false);
                }
            }
        }
    
        return(
            <>
                <div className="nav__bar fixed-top">
                    <Container fluid>
                        <Row className="align-items-center">
                            <Col xs={{ size: 3 }} sm={{ size: 2 }}>
                                <img src={ PhoneImg } alt="iconPhone" className="phone__icon" />
                            </Col>
                            <Col xs={{ size: 6 }} sm={{ size: 8 }} md={{ size: 6, offset: 1 }}>
                                <input onInput={SearchText} ref={searchRef} type="search" placeholder="Search" id="search" />
                            </Col>
                            <Col xs={{ size: 3 }} className="text-end" sm={{ size: 2 }} md={{ size: 2, offset: 1 }}>
                                <img  onClick={logOut} src={ ProfileImg } alt="userIcon" id="phone_icon" className="phone__icon" />
                                {
                                    sideIsOpen ?
                                    <span onClick={ShowSideBar} className="icon_bars"><i className="fas fa-times"></i></span>:    
                                    <span onClick={ShowSideBar} className="icon_bars"><i className="fas fa-bars"></i></span>    
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )   
    }


export default NavigationBar;


