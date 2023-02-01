import logo from "../../images/logo.png";
import React from "react";

class Header extends React.Component {
    links;
    constructor(props) {
        super(props);
        this.links = props.links;
    };
    render() {
     return(
        <header className="header">
            <img className="header__logo" alt="my logo green circle" src={logo} />
        </header>
     )
    }
}
export default Header;