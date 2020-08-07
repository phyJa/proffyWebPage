import React from 'react';
import api from '../../services/api';

// Images
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

// CSS
import './styles.css';


// Interfaces
export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    function createNewConnection() {
        api.post(
            '/connections',
            {
               user_id: teacher.id 
            }
        );
    }

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

                <a 
                    target="_blank" 
                    href={`https://wa.me/${teacher.whatsapp}`} 
                    onClick={createNewConnection}>
                    <img src={whatsAppIcon} alt="Whatsapp"
                />
                    Contact
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;