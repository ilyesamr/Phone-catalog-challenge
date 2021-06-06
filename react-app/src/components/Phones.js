import React from "react";
import Phone from "./Phone";
import '../assets/css/Phones.css';
const Phones = ({phones}) => {
    return(
        <div className="phones">
            {phones.map((phone) => (
                <Phone key={phone.id} phone={phone}/>
            ))}
        </div>
    )
};
export default Phones