import React from 'react'

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
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Amazing! So you want to teach!"
                description="The first step is to complete this submission form." 
            />

            <main>
                <fieldset>
                    <legend>Your data</legend>

                    <Input name="name" label="Full name"/>

                    <Input name="avatar" label="Avatar"/>

                    <Input name="whatsapp" label="Whatsapp"/>

                    <Textarea name="bio" label="Tell us a little bit about you..."/>
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
                    />

                    <Input name="cost" label="Cost per hour"/>
                </fieldset>

                <fieldset>
                    <legend>
                        Available schedule

                        <button type="button">+ New time</button>
                    </legend>
                    
                    <div className="schedule-item">
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
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important warning"/>
                        Important!
                        <br />
                        Fill all the fields
                    </p>
                    <button type="button">
                        Save submission
                    </button>
                </footer>
            </main>
        </div>
    )
}
