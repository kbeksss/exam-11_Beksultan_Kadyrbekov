import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {withRouter} from "react-router-dom";
const UserMenu = ({user, logout, history}) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Hello, {user.name}!
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem onClick={() => history.push('/add-product')}>
                    Add Product
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};
export default withRouter(UserMenu);
