import React from 'react';
import './../css/footer.css';
import {useHistory} from "react-router-dom";
function Footer(){

    const history = useHistory()

    function logout()
    {
        sessionStorage.clear()

        history.push("/")
    }
        return(
            <div className='footer-class'>
                <p>copyright @ 2021  DocForU. All rights reserved</p>
                <button onClick={logout}>Logout</button>
            </div>
        );
}

export default Footer;