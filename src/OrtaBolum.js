import React, { Component } from 'react';
// import './OrtaBolum.css';

class OrtaBolum extends React.Component {
    render() {
        return (
        

        <div class="container">
        <h2>Welcome to Roomful!</h2>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top"  src="https://cdn3.iconfinder.com/data/icons/seo-e-commerce/294/graphic_layout_articles-512.png"/>
                            alt="Card image cap">
                        <div class="card-body parent">
                            <h5 class="card-title">1. Step - Edit Your Profile</h5>
                            <p class="card-text">You can add your profile picture, description about yourself, add photos to your galleries and links
                                of your social networks.</p>
                            <a href="#" class="btn-holder btn btn-outline-success btn-sm btn-block">Go to my Profile</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src="https://cdn3.iconfinder.com/data/icons/seo-e-commerce/305/picture_photo-512.png"/>
                            alt="Card image cap">
                        <div class="card-body parent">
                            <h5 class="card-title">2. Step - Share your Rooms</h5>
                            <p class="card-text">Upload the best photos of your rooms and share them on your profile. You can add descriptions and
                                see your rankings!</p>
                            <a href="#" class="btn-holder btn btn-outline-success btn-sm btn-block">Upload Photos</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card" >
                        <img class="card-img-top"  src="https://cdn3.iconfinder.com/data/icons/seo-e-commerce/294/chat_communicate_bubbles-512.png"/>
                            alt="Card image cap">
                        <div class="card-body parent">
                            <h5 class="card-title">3. Step - Explore!</h5>
                            <p class="card-text">Take a tour around the gallery you choose. Explore the rooms of others. Start to follow, like, and
                                comment!
                            </p>
                            <a href="#" class="btn-holder btn btn-outline-success btn-sm btn-block">Galleries</a>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default OrtaBolum;