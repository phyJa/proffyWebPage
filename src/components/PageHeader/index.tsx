import React from 'react';
import { Link } from 'react-router-dom';

// Images
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

//CSS
import './styles.css';


// This is for add the type of the variables passed as properties
interface PageHeaderProps {
    //If the property is optional, declare " title?: string "
    title: string;
}

// Defining your component as a const starts to use types.
// Then, to use the interface, use:
// const "NAME" : React.FunctionComponent(or FC)<"Your Interface">
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Return to home page" />
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>

                <div className="header-content">
                    <strong>
                        {props.title}
                    </strong>

                    {props.children}
                </div>
            </header>
    );
}

export default PageHeader;