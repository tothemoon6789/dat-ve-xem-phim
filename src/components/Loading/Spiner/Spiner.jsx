import React from 'react';
import './style.css'
const Spiner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Spiner;