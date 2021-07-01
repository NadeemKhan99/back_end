import React from 'react';

import './../index.css';

function Header(){







        return (
            <div className="header_div">
                <div className="row">
                    <div className="col-7">
                            <h1 className="title" align="left"><span className="V">D</span>oc<span className="T">F</span>or<span className="M">U</span></h1>
                    </div>
                    <div className="col">
                            {sessionStorage.getItem("name") ? <h5 className="name"><i>{sessionStorage.getItem("name")}</i></h5>: ""}
                    </div>
                </div>
            </div>
        );
    }
export default Header;