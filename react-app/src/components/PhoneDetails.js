import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/PhoneDetails.css';
const PhoneDetail = (props) => {
    const phone = props.phone || {};
    return (
        <div className="details" key={phone.id}>
            <div className="big-img">
                <img src={phone.imageLink} alt=""/>
            </div>

            <div className="box">
                <div className="row">
                    <h2>{phone.name}</h2>
                    <span><strong>{phone.price}€</strong></span>
                </div>
                <p><strong>Description : </strong>{phone.description}</p>
                <p><strong>Screen :</strong> {phone.screen} </p>
                <p><strong>Storage : </strong> {phone.storage}GB</p>
                <p><strong>Processor : </strong>{phone.processor}</p>
                <Link to="/">
                    <button className="back">Home</button>
                </Link>
            </div>
        </div>
    );
};

export default PhoneDetail;