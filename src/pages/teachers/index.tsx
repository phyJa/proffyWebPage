import React from 'react';
import { Link } from 'react-router-dom';

// Images
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

// CSS
import './styles.css';  

export default function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Return to home page" />
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>

            <div className="header-content">
                <strong>
                    These are the available Proffys.
                </strong>
            </div>
            </header>

        </div>
    )
}