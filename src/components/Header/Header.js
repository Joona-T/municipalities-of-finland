import React from 'react';
import './Header.css'

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1>{props.title}</h1>
        </div>
    </div>
);

Header.defaultProps = {
    title: 'The 10 most populated municipalities in Finland'
};

export default Header;