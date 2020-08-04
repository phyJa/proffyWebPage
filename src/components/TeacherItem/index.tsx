import React from 'react';

// Images
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

// CSS
import './styles.css';

export default function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/62406306?s=460&u=929ad34b0ed0d7adf4025777839101452b1dbe55&v=4" alt="Elias"/>  
                
                <div>
                    <strong>Elias</strong>

                    <span>Physics</span>
                </div>
            </header>

            <p>
                Description Description  Description  Description  Description
                <br/> <br/>
                An undergraduate physics student. Likes to watch the sky.
            </p>

            <footer>
                <p>
                    Pricing: 
                    <strong> R$ 40,00 per hour </strong>
                </p>

                <button type="button">
                    <img src={whatsAppIcon} alt="Whatsapp"/>
                    Contact
                </button>
            </footer>
        </article>
    )
}