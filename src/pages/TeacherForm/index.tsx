import React from 'react'
import PageHeader from '../../components/PageHeader'
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

                    <div className="input-block">
                        <label htmlFor="name">Full name</label>
                        <input type="text" id="name"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="text" id="avatar"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="text" id="whatsapp"/>
                    </div>
                </fieldset>
            </main>
        </div>
    )
}
