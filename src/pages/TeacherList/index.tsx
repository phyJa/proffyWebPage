import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

// CSS
import './styles.css';  


export default function TeacherList () {
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();
        
        //To use queries, use it inside a params object
        const response = await api.get('/classes',
            {
                params: {
                    subject,
                    week_day,
                    time
                }
            }
        )

        console.log(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available Proffys">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                            name="subject" 
                            label="Subject"
                            value={subject}
                            onChange={(event) => {setSubject(event.target.value)}}
                            options={
                                [
                                    {value: 'Art', label: 'Art'},
                                    {value: 'Biology', label: 'Biology'},
                                    {value: 'Physic Education', label: 'Physic Education'},
                                    {value: 'English', label: 'English'},
                                    {value: 'Portuguese', label: 'Portuguese'},
                                    {value: 'Physics', label: 'Physics'},
                                    {value: 'Chemistry', label: 'Chemistry'},
                                    {value: 'History', label: 'History'},
                                    {value: 'Geography', label: 'Geography'}
                                ]
                            }
                    />

                    <Select 
                        name="week_day" 
                        label="Week Day"
                        value={week_day}
                        onChange={(event) => {setWeek_day(event.target.value)}}
                        options={
                            [
                                {value: '0', label: 'Sunday'},
                                {value: '1', label: 'Monday'},
                                {value: '2', label: 'Tuesday'},
                                {value: '3', label: 'Wednesday'},
                                {value: '4', label: 'Thursday'},
                                {value: '5', label: 'Friday'},
                                {value: '6', label: 'Saturday'}
                            ]
                        }
                    />
                    
                    <Input 
                        name="time" 
                        label="Time" 
                        type="time"
                        value={time}
                        onChange={(event) => {setTime(event.target.value)}}
                    />

                    <button type="submit">
                        Search
                    </button>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}