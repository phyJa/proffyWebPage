import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';

// Icon
import warningIcon from '../../assets/images/icons/warning.svg'

//CSS
import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

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
