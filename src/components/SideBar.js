import React from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function SideBar() {
    return(
        <>
            <div className="sideBar fixed-top">
            <ListGroup>
                    <NavLink className="link_nav" to="/"><ListGroupItem className="color-custom"><i className="icon_sidebar far fa-user"></i> All Contacts</ListGroupItem></NavLink>
                    <NavLink className="link_nav" to="/family"><ListGroupItem className="color-custom"><i className="icon_sidebar far fa-user-circle"></i> Family</ListGroupItem></NavLink>
                    <NavLink className="link_nav" to="/friends"><ListGroupItem className="color-custom"><i className="icon_sidebar fas fa-user-friends"></i> Friends</ListGroupItem></NavLink>
                    <NavLink className="link_nav" to="/favourites"><ListGroupItem className="color-custom"><i className="icon_sidebar far fa-bookmark"></i> Favourites</ListGroupItem></NavLink>
            </ListGroup>
            </div>
        </>
    )
}

export default SideBar;