import React, { useState, FormEvent } from 'react'

// Components
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

// Icons
import warningIcon from '../../assets/images/icons/warning.svg'

//CSS
import './styles.css';


export default function TeacherForm() {
    // Using states again
    // Teacher information
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    // Classes Information
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    
    // To use states in a function component,
    // import {useState} and store the initial state
    // in this variable
    const [scheduleItems, setScheduleItems] = useState(
        [
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]
    );

    // The useState() function returns two things in an array structure:
    // 1. The first thing, and at the first array position, is the data itself
    // 2. A function which can replace the data returned at the first position

    function addNewScheduleItem() {
        
        // So, in order to not lose the initial data, we copy the original array
        // by using the spread operator (...) and add new data to this array
        setScheduleItems(
            [
                ...scheduleItems,
                {
                    week_day: 0,
                    from: '',
                    to: ''
                }
            ]
        );
    }

    // Let's use Form Event to start preventing the page to reload
    function handleCreateClass (event: FormEvent) {
        event.preventDefault(); // Stops the standard behaviour of a form
        console.log(
            {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost
            }
        )
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Amazing! So you want to teach!"
                description="The first step is to complete this submission form." 
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Your data</legend>
                        <Input 
                            name="name"
                            label="Full name"
                            value={name}
                            onChange={(event) => setName(event.target.value) /* The event is passed to onChange */}
                        />
    
                        <Input 
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(event) => {setAvatar(event.target.value)}}
                        />
    
                        <Input 
                            name="whatsapp" 
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(event) => {setWhatsapp(event.target.value)}}
                        />
    
                        <Textarea 
                            name="bio" 
                            label="Tell us a little bit about you..."
                            value={bio}
                            onChange={(event) => {setBio(event.target.value)}}
                        />
                    </fieldset>
    
                    <fieldset>
                        <legend>About your lessons</legend>
    
                        <Select 
                            name="subject" 
                            label="Subject"
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
                            value={subject}
                            onChange={(event) => { setSubject(event.target.value) }}
                        />
    
                        <Input 
                            name="cost" 
                            label="Cost per hour"
                            value={cost}
                            onChange={ (event) => {setCost(event.target.name)} }    
                        />
                    </fieldset>
    
                    <fieldset>
                        <legend>
                            Available schedule
    
                            <button type="button" onClick={addNewScheduleItem}>+ New time</button>
                        </legend>
                        
                        {
                            scheduleItems.map(
                                (scheduleItem) => {
                                    return(
                                        <div className="schedule-item" key={scheduleItem.week_day}>
                                            <Select 
                                                name="week_day" 
                                                label="Week Day"
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
    
                                            <Input name="from" label="From" type="time" />
    
                                            <Input name="to" label="To" type="time" />
                                        </div>
                                    );
                                }
                            )
                        }
                    </fieldset>
    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Important warning"/>
                            Important!
                            <br />
                            Fill all the fields
                        </p>
                        <button type="submit">
                            Save submission
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}
