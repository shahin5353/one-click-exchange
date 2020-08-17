import React from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-dark px-3">
                <div className="row footer-top pt-4">
                    <div className="col-lg-4 d-none d-lg-block">
                       <Link to="/">
                        <div className="d-inline">
                        <h2 className="d-inline">One Click Exchange</h2>
                        <br/>
                        <p className="d-inline">No Register, Keep Exchange</p>
                        </div>
                       </Link>
                    </div>
                    <div className="col-lg-8">
                        <ul className="d-flex justify-content-center">
                            <li className="d-lg-inline"><Link to="/" >About</Link></li>
                            <li className="d-lg-inline pl-3"><Link to="/">Terms & Policy</Link></li>
                            <br/>
                            <li className="d-lg-inline pl-3"><Link to="/">Review</Link></li>    
                            <li className="d-lg-inline pl-3"><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-warning pb-3">
                    <small className="text-capitalize">&copy;copyright one click exchange -2020 | all rights reserved</small>
                </div>
        </footer>
    );
};

export default Footer;