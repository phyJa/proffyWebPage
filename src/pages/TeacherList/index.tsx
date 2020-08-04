import React from 'react';
import PageHeader from '../../components/PageHeader';

//Images
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

// CSS
import './styles.css';  


export default function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available Proffys">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Week Day</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/62406306?s=460&u=929ad34b0ed0d7adf4025777839101452b1dbe55&v=4" alt="Elias"/>  
                        
                        <div>
                            <strong>Elias</strong>

                            <span>Física</span>
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
            </main>
        </div>
    )
}