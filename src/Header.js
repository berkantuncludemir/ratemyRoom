import React, { Component } from 'react';
import './navbar.css';

class Header extends React.Component {
    render() {
        return (
            <nav class="navbar fixed-top navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">|RooM|</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home
                            <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Categories
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Living Room</a>
                                <a class="dropdown-item" href="#">Bedroom</a>
                                <a class="dropdown-item" href="#">Kitchen</a>
                                <a class="dropdown-item" href="#">Dining Room</a>
                                <a class="dropdown-item" href="#">Bathroom</a>
                                <a class="dropdown-item" href="#">Kids Room</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Show All</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <form class="form-inline my-2 my-lg-0">
                                <button class="btn btn-danger navbar-btn">Upload Photos</button>
                            </form>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="profiles, rooms, items..." aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                     </form>
                </div>
            </nav>
                );
    }
}

export default Header;
