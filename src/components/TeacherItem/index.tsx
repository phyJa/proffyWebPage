import React from 'react';

// Interface
interface TeacherItemProps {
    teacher: {
        avatar: string,
        bio: string,
        cost: number,
        id: number,
        name: string,
        subject: string,
        whatsapp: string
    };
}

// Images
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

// CSS
import './styles.css';

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>  
                
                <div>
                    <strong>{teacher.name}</strong>

                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Pricing: 
                    <strong> R$ {teacher.cost} per hour </strong>
                </p>

                <button type="button">
                    <img src={whatsAppIcon} alt="Whatsapp"/>
                    Contact
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;