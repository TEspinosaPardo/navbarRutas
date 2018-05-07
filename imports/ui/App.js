import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import AccountsUIWrapper from './AccountsUIWrapper';

import Home from '../../webpages/Home';
import Downloads from '../../webpages/Downloads';
import Howto from '../../webpages/Howto';
import Forum from '../../webpages/Forum';

export default class App extends Component {
    render(){
        return(
            <Router>
                <div className="container">
                <br />
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand componentClass="span">
                            <Link to="/" id="logo"><img src="/images/logo.png"/></Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem componentClass="span">
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem componentClass="span">
                            <Link to="/downloads">Downloads</Link>
                        </NavItem>
                        <NavItem componentClass="span">
                            <Link to="/howto">How to play</Link>
                        </NavItem>
                        <NavItem componentClass="span">
                            <Link to="/forum">Forum</Link>
                        </NavItem>
                        <NavItem>
                            <AccountsUIWrapper/>
                        </NavItem>
                    </Nav>
                </Navbar>

                <Route exact path="/" component={Home} />
                <Route path="/downloads" component={Downloads} />
                <Route path="/howto" component={Howto} />
                <Route path="/forum" component={Forum} />

                </div>
            </Router>
        );
    }
}

