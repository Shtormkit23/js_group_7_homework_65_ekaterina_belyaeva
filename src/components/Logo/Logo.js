import React from "react";
import './Logo.css';
import lotusLogo from '../../assets/images/111.png';

const Logo = () => (
    <div className="Logo">
        <img src={lotusLogo} alt="MyLotus" />
        <p>Lotus</p>
    </div>
);

export default Logo;