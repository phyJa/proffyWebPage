import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';

// Icon
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
                </fieldset>

                <fieldset>
                    <legend>About your lessons</legend>
                    <Input name="subject" label="Subject"/>

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
